import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AdControls extends Component {
    render() {
        let edit = null;
        let del = null;


        if (this.props.canEdit) {
            edit = <Link to={"/edit/" + this.props.adId} className="btn btn-default">Редактирай</Link>;
            del = <Link to={"/delete/" + this.props.adId} className="btn btn-default">Изтрий</Link>;
            // edit = <a href="" className="btn btn-default" onClick={this.props.onEdit}>Редактирай</a>;
            // del = <a href="" className="btn btn-default" onClick={this.props.onDelete}>Изтрий</a>;
        }

        return (
            <div>
                {edit}
                {del}
            </div>
        )
    }
}