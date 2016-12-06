import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import $ from 'jquery';
import '../Components/currentAdStyles.css';

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: ''
        };

        this.loadUserInfo = this.loadUserInfo.bind(this);
        // this.onChangeHandler = this.onChangeHandler.bind(this);
        // this.createComment = this.createComment.bind(this);
        // this.showComments = this.showComments.bind(this);
        // this.deleteClicked = this.deleteClicked.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        // this.onDeleteAd = this.onDeleteAd.bind(this);
    }

    componentDidMount() {
        this.loadUserInfo();
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


    render() {
        let profile = this.state;

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
                            <span>list all personals ads</span>
                        </div>
                    </div>
                </div>
                </div>
                );
                }

}


