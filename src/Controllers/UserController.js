import React, { Component } from 'react';
import UserView from '../Views/UserView'
import DbRequester from '../Models/dbRequester';
import $ from 'jquery';

export default class UserController extends Component {
    constructor(props){
        super(props);
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentWillMount(){
        // check if user is not admin
        if(sessionStorage.getItem("userId") !== "58467dea01bde1035e82c073")  this.context.router.push('/');

        this.loadUsers();
    }

    loadUsers(){
        DbRequester.loadUsers()
            .then(function (users) {
                let tBody = $('<tbody>');

                for(let user of users){
                    let tr = $('<tr>').attr("id", user._id)
                        .append($('<td>').text(user._id))
                        .append($('<td>').text(user.username))
                        .append($('<td>').text(user.email));

                    $(tBody).append(tr);
                }
                $('#usersTable tbody').empty();
                $('#usersTable').append(tBody);
            });
    }

    render() {
        return(
            <UserView/>
        )
    }
}

UserController.contextTypes = {
    router: React.PropTypes.object
};
