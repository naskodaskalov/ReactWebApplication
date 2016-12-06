import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester';
import AdCard from '../Components/AdCard.js';
import './AdsController.css';
import {Pagination} from 'react-bootstrap';

export default class AdsController extends Component {
    constructor(props){
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {ads:[]};
        this.state.activePage = 1;
    }

    componentDidMount(){
        if(!sessionStorage.getItem("username"))
            this.context.router.push('/');
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

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
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
                <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
            </div>
        )
    }
}

AdsController.contextTypes = {
    router: React.PropTypes.object
};
