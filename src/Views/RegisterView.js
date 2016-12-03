import React, { Component } from 'react';

// TODO : make css for this file and update

export default class Register extends Component {
    render() {
        return(
        <div id="register-view">
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>:: Направете Вашата регистрация в GanyoExpress.BG</h1>
                <div className="form-group">
                    <label className="col-md-4 control-label">Потребителско име:</label>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={this.props.username}
                            onChange={this.props.onChangeHandler}
                            required="required"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">E-mail:</label>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={this.props.email}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">Парола:</label>
                    <div className="col-md-4">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={this.props.password}
                            onChange={this.props.onChangeHandler}
                            required="required"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">Повторете Вашата парола:</label>
                    <div className="col-md-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            value={this.props.confirmPassword}
                            onChange={this.props.onChangeHandler}
                            required="required"
                        />
                    </div>
                </div>
                <input type="submit" className="btn btn-default" value="Регистрирай се" />
            </form>
        </div>
        )
    }
}
