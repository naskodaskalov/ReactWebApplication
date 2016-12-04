import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import { Link } from 'react-router'
import $ from 'jquery';
// TODO : make css for this file and update

export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {
            ad: {}
        };
    }

    componentDidMount() {
        this.loadAds();
    }

    loadAds() {
        DbRequester.loadAdDetails(this.props.params.adId,)
            .then(loadAdsSuccess.bind(this));

        function loadAdsSuccess(ad) {

            this.setState({
                ad: ad
            })
        }
    }


    render() {
        let ad = this.state.ad;

        return (
        <div className="ad-view">
                <h3>{ad.author}</h3>
                <h3>{ad.title}</h3>
                <h2>{ad.body}</h2>
                <h2>{ad.price}</h2>
                <div>
                    <button onClick={deleteAd}>Изтрий</button>
                    <button onClick={editAd}>Редактирай</button>
                </div>
            </div>
        )

        function deleteAd() {

        }

        function editAd() {

        }

    }
}



