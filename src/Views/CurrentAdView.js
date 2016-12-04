import React, { Component } from 'react';

export default class AdView extends Component {
    render() {
        let ads = this.props.ads.map(ad =>
            <div className="ad">
                <h3>{ad.author}</h3>
                <h3>{ad.title}</h3>
                <h2>{ad.body}</h2>
                <h2>{ad.price}</h2>
                <div>
                    <button onClick={deleteAd}>Изтрий</button>
                    <button onClick={editAd}>Редактирай</button>
                </div>
            </div>
        );

        function deleteAd() {

        }

        function editAd() {

        }

        return(
            <div id="ads-view">
                {ads}
            </div>
        )
    }
}
