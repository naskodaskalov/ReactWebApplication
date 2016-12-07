import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import $ from 'jquery';

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: ''
        };

        this.loadUserInfo = this.loadUserInfo.bind(this);
        this.loadUsersAds = this.loadUsersAds.bind(this);
        // this.onChangeHandler = this.onChangeHandler.bind(this);
        // this.createComment = this.createComment.bind(this);
        // this.showComments = this.showComments.bind(this);
        // this.deleteClicked = this.deleteClicked.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        // this.onDeleteAd = this.onDeleteAd.bind(this);
    }

    componentDidMount() {
        this.loadUserInfo();
        this.loadUsersAds();
        //this.showComments(this.props.params.adId);
    }

    loadUserInfo() {
        DbRequester.getUserInfo(sessionStorage.getItem('userId'))
            .then(loadUserInfoSuccess.bind(this));

        function loadUserInfoSuccess(profile) {

            let newState = {
                username: profile.username,
                email: profile.email
            };

            this.setState(newState);
        }
    }

    loadUsersAds() {
        DbRequester.getUsersAds()
            .then(loadUserAdsSuccess.bind(this));

        function loadUserAdsSuccess(usersAds) {

            for (let ad of usersAds) {
                if (ad._acl.creator === sessionStorage.getItem('userId')) {
                    let tr = $('<tr>').attr("id", ad._id)
                        .append($('<td>').text(ad.title))
                        .append($('<td class="body">').text(ad.body));
                    
                    $('#usersAds').append(tr);
                }
            }

            let newState = {
                title: usersAds.title
            };

            this.setState(newState);
        }
    }


    render() {
        let profile = this.state;
        let usersAds = this.state;

        return (
            <div className="container">

                <div className="row">
                    <div className="panel panel-default center-block">
                        <div className="panel-heading">Потребителско име:</div>
                        <div className="panel-body">
                            <h3>{sessionStorage.getItem('username')}</h3>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="panel panel-default center-block">
                        <div className="panel-heading">E-mail:</div>
                        <div className="panel-body">
                            {profile.email}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="panel panel-default center-block">
                        <div className="panel-heading">Обяви:</div>
                        <div className="panel-body">
                            <table className="table table-striped" id="usersAds">
                                <thead>
                                <tr>
                                    <th>Автор</th>
                                    <th>Коментар</th>
                                    <th>Действия</th>
                                </tr>
                                </thead>
                            </table>


                        </div>
                    </div>
                </div>
                </div>
                );
                }

}


