import React, { Component } from 'react';

// TODO : make css for this file and update

export default class Register extends Component {
    render() {
        return(
            <div id="register-view">
                <h1>Register user</h1>
                <fieldset>
                    <form className="form-register" onSubmit={this.props.onSubmitHandler}>
                        <legend>Register form</legend>
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
                            <div>Email:</div>
                            <input
                                type="text"
                                name="email"
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
                        <label>
                            <div>Re-password:</div>
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={this.props.onChangeHandler}
                                required="required"
                            />
                        </label><br/>
                        <input type="submit" value="Register"/>
                    </form>
                </fieldset>
            </div>
        )
    }
}
