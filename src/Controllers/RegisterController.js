import React, { Component } from 'react';
import RegisterView from '../Views/RegisterView'
import DbRequester from '../DbRequester';
import notifications from '../Notifications/notifications';
import user from '../Models/user';
import $ from 'jquery';

export default class RegisterController extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            email:'',
            password: '',
            confirmPassword: '',
            submitDisabled: false };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.register = this.register.bind(this);
    }
    render() {
        return(
            <RegisterView
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                submitDisabled={this.state.submitDisabled}
                onChangeHandler={this.onChangeHandler}
                onSubmitHandler={this.onSubmitHandler}
            />
        )
    }

    onChangeHandler(event) {
        event.preventDefault();
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'email':
                this.setState({ password: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            case 'confirmPassword':
                this.setState({ password: event.target.value });
                break;
            default: break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        this.register(this.state.username,this.state.email, this.state.password, this.state.confirmPassword);
    }

    register(username, email, password, confirmPassword) {
        console.log(password);
        console.log(confirmPassword);
        if(validateRequest.bind(this)()){
            DbRequester.registerUser(username, email, password)
                .then(successRegister.bind(this));

            function successRegister(userData) {
                user.saveAuthToken(userData);
                this.context.router.push('/');
                notifications.showInfo("Register successful!");
            }
        }

        function validateRequest() {
            if(!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/.test(email)){
                $('#emailRegister').css("border-color","red");
                notifications.showError("Invalid email");
                return false;
            }
            $('#emailRegister').css("border-color","initial");

            if(password !== confirmPassword){
                $('#passwordRegister').css("border-color","red");
                $('#confirmPassRegister').css("border-color","red");
                notifications.showError("Password and confirm password are different");
                return false;
            }

            $('#passwordRegister').css("border-color","initial");
            $('#confirmPassRegister').css("border-color","initial");
            return true;
        }
    }
}


RegisterController.contextTypes = {
    router: React.PropTypes.object
};
