import React, { Component } from 'react';

// TODO : make css for this file and update

export default class Register extends Component {
    render() {
        return(
            <div id="register-view">
                <h1>Register user</h1>
                <fieldset>
                    <form className="form-register" onSubmit={this.submitForm.bind(this)}>
                        <legend>Register form</legend>
                        <label>
                            <div>Username:</div>
                            <input type="text" id="usernameRegister" required="required"
                                   ref={x => this.usernameField = x} />
                        </label>
                        <label>
                            <div>Email:</div>
                            <input type="text" id="emailRegister" required="required"
                                   ref={x => this.emailField = x} />
                        </label>
                        <label>
                            <div> Password:</div>
                            <input type="password" id="passwordRegister" required="required"
                                   ref={x => this.passwordField = x} />
                        </label><br/>
                        <label>
                            <div>Re-password:</div>
                            <input type="password" id="confirmPassRegister" required="required"
                                   ref={x => this.passwordFieldConfirm = x} />
                        </label><br/>
                        <input type="submit" value="Register"/>
                    </form>
                </fieldset>
            </div>
        )
    }

    submitForm(event){
        event.preventDefault();
        this.props.submit(
            this.usernameField.value,
            this.emailField.value,
            this.passwordField.value,
            this.passwordFieldConfirm.value)
    }
}
