import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <br /><br />
                {this.props.children}
            </div>
        );
    }
}