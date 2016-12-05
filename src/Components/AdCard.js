import React, {Component} from 'react';
import {Link} from 'react-router';


export default class AdCard extends Component {
    render() {
        return (

                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <Link to={"/ads/" + this.props.id}>
                            <img src={this.props.picture || "http://i.imgur.com/Rtkn7ex.png"}/>
                                <div className="caption">
                                    <h3>{this.props.title}</h3>
                                    <p>Цена: {this.props.price} лв.</p>
                                </div>
                        </Link>
                    </div>
                </div>


        )
    }
}

