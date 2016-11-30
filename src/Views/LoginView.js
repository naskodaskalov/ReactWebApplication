import React, { Component } from 'react';

// TODO : make css for this file and update

export default class Login extends Component {
    render() {
        return(
            <div id="login-view">
                <h1>Please login</h1>
                <fieldset>
                    <form className="form-login" onSubmit={this.submitForm.bind(this)}>
                        <legend>Login form</legend>
                        <label>
                            <div>Username:</div>
                            <input type="text"
                                   ref={x => this.usernameField = x} />
                        </label>
                        <label>
                            <div> Password:</div>
                            <input type="password"
                                   ref={x => this.usernamePass = x} />
                        </label><br/>
                        <input type="submit" value="Login"/>
                    </form>
                </fieldset>
            </div>
        )
    }

    submitForm(){
        this.props.submit(this.usernameField.value, this.usernamePass.value)
    }
}
