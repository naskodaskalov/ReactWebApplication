import React, { Component } from 'react';

// TODO : make css for this file and update

export default class LoginView extends Component {
    render() {
        return(
        <div id="login-view">
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>Влезте в системата</h1>
                <div className="form-group">
                    <label className="col-md-4 control-label">Потребителско име:</label>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={this.props.onChangeHandler}
                            required="required"
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
                            onChange={this.props.onChangeHandler}
                            required="required"
                        />
                    </div>
                </div>
                <input type="submit" className="btn btn-default" value="Влезте" />
            </form>
        </div>
        );
    }
}
