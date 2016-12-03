import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import $ from 'jquery';

// Import requester
import DbRequester from './DbRequester';
import { Router, browserHistory } from 'react-router'
import { Route, IndexRoute, Link } from 'react-router'
import Header from './Components/Header';
import observer from './Models/observer';
import notifications  from './Notifications/notifications';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '' };
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount(){
        observer.onSessionUpdate = this.onSessionUpdate;

        // Bind the info / error boxes: hide on click
        $("#infoBox, #errorBox").click(function() {
            $(this).fadeOut();
        });

        // Attach AJAX "loading" event listener
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        $(document).ajaxError(notifications.handleAjaxError());
    }

    onSessionUpdate() {
        if (sessionStorage.getItem("username")) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navBar = {};
        if(this.state.loggedIn){
            navBar = (
                <NavigationBar>
                    <Link to="/" >Начало</Link>
                    <Link to="/ads">обяви</Link>
                    <Link to="/createAd">Създай обява</Link>
                    <Link to="/" onClick={this.logout.bind(this)}>Изход</Link>
                    <div>Здравей, {this.state.username}</div>
                </NavigationBar>
            );
        } else {
            navBar = (
                <NavigationBar>
                    <Link to="/" >Начало</Link>
                    <Link to="/login">Вход</Link>
                    <Link to="/register">Регистрация</Link>
                </NavigationBar>
            );
        }
        return (
            <div className="App">
                <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                    {navBar}
                </Header>
                <div id="loadingBox">Loading...</div>
                <div id="infoBox"></div>
                <div id="errorBox"></div>
                {this.props.children}
            </div>
        );
    }

    // showAdsView(){
    //     DbRequester.showAds()
    //         .then(loadAdsSuccess.bind(this));
    //
    //     function loadAdsSuccess(adsData) {
    //         this.showView(<AdsView ads={adsData}/>);
    //     }
    // }




    logout(){
        DbRequester.logoutUser(sessionStorage.getItem("authToken"))
            .then(logoutSuccess.bind(this));

        function logoutSuccess() {
            this.setState({
                username: '',
                userId: '',
                loggedIn: false
            });
            sessionStorage.clear();
            notifications.showInfo("Logout successful");
            this.context.router.push('/');
        }
    }
}

