import React, { Component } from 'react';
import requester from '../DbRequester';
import App from '../App';

export default class AdsView extends Component {
    render() {
        let ads = this.props.ads.map(ad =>
            <tr className="ad">
                <td>{ad.author}</td>
                <td>{ad.title}</td>
                <td>{ad.body}</td>
                <td>{ad.price}</td>
                <td>
                    <button onClick={function () {
                        showCurrentAd(ad._id)
                    }}>Разгледай</button>
                </td>
            </tr>
        );

        function showCurrentAd(adId) {
            requester.getAd(adId)
                .then(successAdGet);

            function successAdGet(adInfo) {
              // TODO
            }
        }

        return(
            <div id="ads-view">
                <h1>Обяви</h1>
                <div id="ads-content">
                    <table>
                        <thead>
                            <td>Заглавие</td>
                            <td>Автор</td>
                            <td>Съдържание</td>
                            <td>Цена</td>
                            <td>Действия</td>
                        </thead>
                        <tbody>
                        {ads}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
