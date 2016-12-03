import React, { Component } from 'react';
import $ from 'jquery';
// TODO : make css for this file and update

export default class AdsView extends Component {
    render() {
        let ads = this.props.ads.map(ad =>
            <tr className="ad">
                <td>{ad.author}</td>
                <td>{ad.title}</td>
                <td>{ad.body}</td>
                <td>{ad.price}</td>
                <td>
                    <button onClick={showCurrentAd}>Разгледай</button>
                </td>

            </tr>
        );

        function showCurrentAd() {
            alert("delete ad")
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
