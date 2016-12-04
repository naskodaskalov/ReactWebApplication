import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester';
import notifications from '../Notifications/notifications';
import { Link } from 'react-router'
import $ from 'jquery';

export default class AdsController extends Component {
    constructor(props){
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {tableRows:null};
    }

    componentDidMount(){
        this.loadAds();
    }

    loadAds(){
        DbRequester.showAds()
            .then(loadAdsSuccess.bind(this));

        function loadAdsSuccess(adsData) {
            let tBodyRows =  adsData.map(ad =>
                <tr key={ad._id}>
                    <td>{ad.title}</td>
                    <td>{ad.author}</td>
                    <td>{ad.body}</td>
                    <td>{ad.price}</td>
                    <td><Link to="/ads/adId">Разгледай</Link></td>
                </tr>);

            this.setState({
                tableRows: tBodyRows
            })
        }
    }

    render() {
        return(
            <div id="ads-view">
                <h1>Обяви</h1>
                <div id="ads-content">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Заглавие</th>
                                <th>Автор</th>
                                <th>Съдържание</th>
                                <th>Цена</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

AdsController.contextTypes = {
    router: React.PropTypes.object
};
