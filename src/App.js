import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import $ from 'jquery';
// Import views
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import DbRequester from './DbRequester';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        }
    }

    componentDidMount(){
        // Bind the info / error boxes: hide on click
        $("#infoBox, #errorBox").click(function() {
            $(this).fadeOut();
        });

        // Attach AJAX "loading" event listener
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        $(document).ajaxError(this.handleAjaxError.bind(this));
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        clickHome={this.showHomeView.bind(this)}
                        clickLogin={this.showLoginView.bind(this)}
                        clickRegister={this.showRegisterView.bind(this)}
                        clickAds={this.showAdsView.bind(this)}
                        clickAdCreate={this.showCreateAdView.bind(this)}
                        clickLogout={this.logout.bind(this)}
                    />
                </header>
                <div id="loadingBox">Loading...</div>
                <div id="infoBox"></div>
                <div id="errorBox"></div>
                <div id="main"></div>
            </div>
        );
    }

    showView(component){
        ReactDOM.render(
            component,
            document.getElementById("main"));
    }

    // Show Views:
    showHomeView(){
        this.showView(<HomeView/>);
    }

    showLoginView(){
        this.showView(<LoginView submit={this.login.bind(this)}/>);
    }

    showRegisterView(){
        this.showView(<RegisterView submit={this.register.bind(this)}/>);
    }

    showAdsView(){
        // TODO
    }

    showCreateAdView(){
        // TODO
    }

    login(username, password) {
        DbRequester.loginUser(username, password)
            .then(successLogin.bind(this));

        // clear input fields after login button click
        this.cleanFieldsAfterSubmit(['usernameLogin', 'passwordLogin']);

        function successLogin(userData) {
            this.showAdsView();
            this.saveAuthToken(userData);
            this.showInfo("Login successful!");
        }
    }

    register(username, email, password, confirmPassword) {
        if(validateRequest.bind(this)()){
            DbRequester.registerUser(username, email, password)
                .then(successRegister.bind(this));

            // clear input fields after register button click
            this.cleanFieldsAfterSubmit(['usernameRegister', 'emailRegister', 'passwordRegister', 'confirmPassRegister']);

            function successRegister(userData) {
                this.showAdsView();
                this.saveAuthToken(userData);
                this.showInfo("Register successful!");
            }
        }

        function validateRequest() {
            if(!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/.test(email)){
                $('#emailRegister').css("border-color","red");
                this.showError("Invalid email");
                return false;
            }
            $('#emailRegister').css("border-color","initial");

            if(password !== confirmPassword){
                $('#passwordRegister').css("border-color","red");
                $('#confirmPassRegister').css("border-color","red");
                this.showError("Password and confirm password are different");
                return false;
            }

            $('#passwordRegister').css("border-color","initial");
            $('#confirmPassRegister').css("border-color","initial");
            return true;
        }
    }

    cleanFieldsAfterSubmit(fields){
        fields.map(function (field) {
            $(`#${field}`).val("");
        })
    }

    logout(){
        DbRequester.logoutUser(sessionStorage.getItem("authtoken"))
            .then(logoutSuccess.bind(this));

        function logoutSuccess() {
            this.setState({
                username: null,
                userId: null
            });
            this.showHomeView();
            sessionStorage.clear();
            this.showInfo("Logout successful");
        }
    }

    saveAuthToken(userData){
        sessionStorage.setItem("authToken", userData._kmd.authtoken);
        sessionStorage.setItem("username", userData.username);
        sessionStorage.setItem("userId", userData._id);

        this.setState({
            username: userData.username,
            userId: userData._id
        })
    }
}

