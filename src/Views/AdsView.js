import React, { Component } from 'react';
import $ from 'jquery';
// TODO : make css for this file and update

export default class AdsView extends Component {
    render() {
        let ads = this.props.ads.map(ad =>
            <div className="ad">
                <h3>Author: {ad.author}</h3>
                <h3>Title: {ad.title}</h3>
                <h3>Content: {ad.body}</h3>
                <button onClick={deleteAd}>Delete</button>
                <button onClick={editAd}>Edit</button>
            </div>
        );
        console.log(ads);

        function deleteAd() {
            alert("delete ad")
        }

        function editAd() {
            alert("edit ad");
        }

        return(
            <div id="ads-view">
                <h1>Ads</h1>
                <div id="ads-content">{ads}</div>
            </div>
        )
    }
}
