import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class AdCard extends Component {
    render() {
        return (

                <div className="col-md-4">
                    <div className="thumbnail">
                        <Link to={"/ads/" + this.props.id}>
                            <img src={this.props.picture || "http://i.imgur.com/Rtkn7ex.png"} alt=""/>
                                <div className="caption">
                                    <h4>{this.props.title}</h4>
                                    <h4 className="pull-right">{this.props.price} лв.</h4>
                                    <p>{this.props.body}</p>
                                </div>
                        </Link>
                    </div>
                </div>


        )
    }
}

