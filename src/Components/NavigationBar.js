import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {

    render() {
        if(this.props.username != null){
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Home</a>
                    <a href="#" onClick={this.props.clickAds}>Ads</a>
                    <a href="#" onClick={this.props.clickAdCreate}>Create Ad</a>
                    <a href="#" onClick={this.props.clickLogout}>Logout</a>
                    <div>Hello, {this.props.username}</div>
                </div>
            );
        } else {
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Home</a>
                    <a href="#" onClick={this.props.clickLogin}>Login</a>
                    <a href="#" onClick={this.props.clickRegister}>Register</a>
                </div>
            );
        }
    }
}
