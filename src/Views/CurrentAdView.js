import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';

export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.loadAds = this.loadAds.bind(this);
        this.state = {
            ad: '',
            tableRows: '',
            comment: ''
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

            this.setState({
                ad: ad
            })
        }
    }


    render() {
        let ad = this.state.ad;

        return (
                <div className="container">
                    <div className="row">
                        <div className="panel panel-default center-block">
                            <div className="panel-heading">Снимка:</div>
                            <div className="panel-body">
                                <img src={ad.picture} className="img-thumbnail" width="400" height="400" alt="photo"/>
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


                    <div>
                        <button onClick={deleteAd}>Изтрий</button>
                        <button onClick={editAd}>Редактирай</button>
                    </div>

                    <h2>Коментари</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Автор</th>
                            <th>Коментар</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.tableRows}
                        </tbody>
                    </table>

                    <div className="commentField">
                        <textarea name="comment" rows="6" cols="20" onChange={this.onChangeHandler}/><br/>
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
        let commentBody = this.state.comment;
        let commentAuthor = sessionStorage.getItem("username");
        let adId = this.state.ad._id;

        DbRequester.createComment(adId, commentBody, commentAuthor)
            .then(successCommentCreate)
            .catch(notifications.handleAjaxError);

        function successCommentCreate() {
            alert("create comment");
            this.showComments.bind(this);
        }
    }

    showComments(){
        alert("showComments")
        DbRequester.loadCommentsForAd()
            .then(successLoadComments)
            .catch(notifications.handleAjaxError);

        function successLoadComments(comments) {
            alert("success showComments")
            let tableRows =  comments.map(comment =>
                <tr key={comment._id}>
                    <td>{comment.author}</td>
                    <td>{comment.body}</td>
                    <td>
                        <button onClick={this.deleteComment.bind(this)}>Изтрий</button>
                        <button onClick={this.editComment.bind(this)}>Редактирай</button>
                    </td>
                </tr>
            );
            this.setState({tableRows: tableRows});
        }
    }

    deleteComment(){
        alert("delete comment");
    }

    editComment(){
        alert("edit comment");
    }

    onChangeHandler(event) {
        this.setState({ comment: event.target.value });
    }
}



