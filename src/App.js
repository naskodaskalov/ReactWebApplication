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

    showHomeView(){
        this.showView(<HomeView/>);
    }

    showLoginView(){
        this.showView(<LoginView submit={this.login.bind(this)}/>);
    }

    login(username, password) {
        //alert(username + " " + password);
        DbRequester.loginUser(username, password)
            .then(successLogin.bind(this));

        function successLogin() {
            this.showInfo("Login successful!");
        }
    }

    showRegisterView(){
        this.showView(<RegisterView/>);
    }
}

