import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import {Link} from 'react-router'
import $ from 'jquery';
import AdControls from '../Controllers/AdControls.js';
// TODO : make css for this file and update

export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.loadAds = this.loadAds.bind(this);
        //this.onDelete = this.onDelete.bind(this);
        //this.onEdit = this.onEdit.bind(this);
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

            let newState = {
                ad: ad
            };

            if (ad._acl.creator === sessionStorage.getItem('userId')) {
                newState.canEdit = true;
            }

            this.setState(newState);
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
                                <img src={ad.picture  || "http://i.imgur.com/Rtkn7ex.png"} className="img-thumbnail" width="400" height="400" alt="photo"/>
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

                    <AdControls
                        adId={this.props.params.adId}
                        onEdit={this.onEdit}
                        onDelete={this.onDelete}
                        canEdit={this.state.canEdit}
                    />

                </div>
            </div>
        )

        // function onDelete() {
        //     //todo
        // }
        //
        // function editAd() {
        //
        // }

    }
}



