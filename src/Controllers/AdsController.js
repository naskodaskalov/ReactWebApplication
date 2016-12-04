import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester';
import { Link } from 'react-router'

export default class AdsController extends Component {
    constructor(props){
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {tableRows:null};
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
            let tBodyRows =  adsData.map(ad =>
                <tr key={ad._id}>
                    <td>{ad.title}</td>
                    <td>{ad.author}</td>
                    <td>{ad.body}</td>
                    <td>{ad.price}</td>
                    <td><Link to={"/ads/" + ad._id}>Разгледай</Link></td>
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
                                <th className="table-bordered th">Заглавие</th>
                                <th className="table-bordered th">Автор</th>
                                <th className="table-bordered th">Съдържание</th>
                                <th className="table-bordered th">Цена</th>
                                <th className="table-bordered th">Действия</th>
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
