import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import {Link} from 'react-router'
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
                <div className="container">

                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Снимка:</div>
                            <div className="panel-body">
                                <img src={ad.picture} className="img-thumbnail" width="400" height="400" alt="photo"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Автор:</div>
                            <div className="panel-body">
                                {ad.author}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Заглавие:</div>
                            <div className="panel-body">
                                {ad.title}
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Описание:</div>
                            <div className="panel-body">
                                {ad.body}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Цена:</div>
                            <div className="panel-body">
                                <span>{ad.price} лева.</span>
                            </div>
                        </div>
                    </div>


                    <div>
                        <button onClick={deleteAd}>Изтрий</button>
                        <button onClick={editAd}>Редактирай</button>
                    </div>

                </div>
            </div>
        )

        function deleteAd() {

        }

        function editAd() {

        }

    }
}



