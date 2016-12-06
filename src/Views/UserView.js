import React, { Component } from 'react';

export default class UserView extends Component{

    render(){
        return (
        <div>
            <h2>Потребители</h2>
            <table className="table table-striped" id="usersTable">
                <thead className="table table-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
            </table>
        </div>
        )
    }
}