import React, { Component } from 'react';
import './NavigationBar.css';
import { Route, IndexRoute, Link } from 'react-router'


export default class NavigationBar extends Component {

    render() {
        if(this.props.username != null){
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Начало</a>
                    <a href="#" onClick={this.props.clickAds}>обяви</a>
                    <a href="#" onClick={this.props.clickAdCreate}>Създай обява</a>
                    <a href="#" onClick={this.props.clickLogout}>Logout</a>
                    <div>Здравей, {this.props.username}</div>
                </div>
            );
        } else {
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Начало</a>
                    <a href="#" onClick={this.props.clickLogin}>Вход</a>
                    <a href="#" onClick={this.props.clickRegister}>Регистрация</a>
                </div>
            );
        }
    }
}
