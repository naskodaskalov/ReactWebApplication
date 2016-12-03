import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="links">
                {this.props.children}
            </div>
        );
    }
}
