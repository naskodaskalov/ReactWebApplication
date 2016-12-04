import React, { Component } from 'react';
import DbRequester from '../Models/dbRequester.js';
// TODO : make css for this file and update

export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {
            ad: {},
            tableRows:{}
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createComment = this.createComment.bind(this);
    }

    componentDidMount() {
        this.loadAds();
    }

    loadAds() {
        DbRequester.loadAdDetails(this.props.params.adId,)
            .then(loadAdsSuccess.bind(this));

        function loadAdsSuccess(ad) {
            let adId = ad._id;

            this.setState({
                ad: ad
            })
        }
    }


    render() {
        let ad = this.state.ad;

        return (
            <div className="ad-view">
                <h3>{ad.author}</h3>
                <h3>{ad.title}</h3>
                <h2>{ad.body}</h2>
                <h2>{ad.price}</h2>
                <div>
                    <button onClick={deleteAd}>Изтрий</button>
                    <button onClick={editAd}>Редактирай</button>
                </div><br/><br/>
                <h2>Коментари</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Автор</td>
                            <td>Коментар</td>
                            <td>Действия</td>
                        </tr>
                    </thead>
                </table>
                <div className="commentField">
                    <textarea name="comment" rows="20" cols="10" onChange={this.onChangeHandler}/>
                    <input type="button" value="Изпрати" onClick={this.createComment}/>
                </div>
            </div>
        );

        function deleteAd() {

        }

        function editAd() {

        }
    }

    createComment() {

    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default: break;
        }
    }


}



