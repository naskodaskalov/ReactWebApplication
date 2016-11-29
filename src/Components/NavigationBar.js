import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {

    render() {
        if(this.props.username != null){
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Home</a>
                    <a href="#" >Posts</a>
                    <a href="#" >Create Post</a>
                    <a href="#" >Logout</a>
                </div>
            );
        } else {
            return (
                <div className="links">
                    <a href="#" onClick={this.props.clickHome}>Home</a>
                    <a href="#" >Login</a>
                    <a href="#" >Register</a>
                </div>
            );
        }
    }

}
