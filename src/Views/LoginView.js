import React, { Component } from 'react';

// TODO : make css for this file and update

export default class LoginView extends Component {
    render() {
        return(
            <div id="login-view">
                <h1>Login user</h1>
                <fieldset>
                    <form className="form-login" onSubmit={this.props.onSubmitHandler}>
                        <legend>Login form</legend>
                        <label>
                            <div>Username:</div>
                            <input
                                type="text"
                                name="username"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </label>
                        <label>
                            <div> Password:</div>
                            <input
                                type="password"
                                name="password"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </label><br/>
                        <input type="submit" value="Login" />
                    </form>
                </fieldset>
            </div>
        )
    }
}
