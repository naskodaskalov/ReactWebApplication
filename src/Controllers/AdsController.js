import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester';
import notifications from '../Notifications/notifications';
import { Link } from 'react-router'
import $ from 'jquery';
import AdCard from '../Components/AdCard.js';
import './AdsController.css';

export default class AdsController extends Component {
    constructor(props){
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {ads:[]};
    }

    componentDidMount(){
        this.loadAds();
    }

    loadAds(){
        DbRequester.showAds()
            .then(loadAdsSuccess.bind(this));

        function loadAdsSuccess(adsData) {

            this.setState({
                ads: adsData
            })
        }
    }

    render() {
        return(
            <div id="ads-view">
                <h1>Обяви</h1>
                <div className="cards">
                    {this.state.ads.map((e, i) => {
                        return <AdCard key={i} picture={e.picture} title={e.title} id={e._id} price={e.price}/>
                    })}
                </div>
            </div>
        )
    }
}

AdsController.contextTypes = {
    router: React.PropTypes.object
};
