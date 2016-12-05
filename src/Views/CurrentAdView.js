import React, {Component} from 'react';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import $ from 'jquery';

export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ad: '',
            tableRows: '',
            comment: ''
        };

        this.loadAd = this.loadAd.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createComment = this.createComment.bind(this);
        this.showComments = this.showComments.bind(this);
    }

    componentDidMount() {
        this.loadAd();
        this.showComments(this.props.params.adId);
    }

    loadAd() {
        DbRequester.loadAdDetails(this.props.params.adId)
            .then(loadAdSuccess.bind(this));

        function loadAdSuccess(ad) {

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
                                <img src={ad.picture} className="img-thumbnail" width="400" height="400"/>
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
                    <table className="table table-striped" id="commentsTable">
                        <thead>
                        <tr>
                            <th>Автор</th>
                            <th>Коментар</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                    </table>

                    <form className="form form-control" onSubmit={this.createComment}>
                        <label className="control-label">Напишете коментар:</label>
                        <textarea  className="form-control"
                                   rows="5" cols="40"
                                   onChange={this.onChangeHandler} required="required"
                                   id="textCreateComment"/>
                        <input type="submit" value="Изпрати" className="btn btn-default"/>
                    </form>
                </div>
        );

        function deleteAd() {
            // TODO: delete current ad
        }

        function editAd() {
            // TODO: edit current ad
        }
    }

    createComment(event) {
        event.preventDefault();
        let commentBody = this.state.comment;
        let commentAuthor = sessionStorage.getItem("username");
        let adId = this.state.ad._id;
        let showComments = this.showComments;
        $('#textCreateComment').val("");

        DbRequester.createComment(adId, commentBody, commentAuthor)
            .then(successCommentCreate)
            .catch(notifications.handleAjaxError);

        function successCommentCreate(comment) {
            showComments(comment.adId);
        }
    }

    showComments(adId){
        let loadComments = this.showComments;
        DbRequester.loadCommentsForAd(adId)
            .then(successLoadComments);

        function successLoadComments(comments) {
            let tableRows = $('<tbody>');
            for(let comment of comments){

                let tr = $('<tr>').attr("id",comment._id)
                    .append($('<td>').text(comment.author))
                    .append($('<td class="body">').text(comment.body));

                if(comment.author == sessionStorage.getItem("username")){
                    $('<td>')
                        .append($('<button class="btn btn-default">').text("Delete").click(()=> {deleteComment(comment._id);}))
                        .append($('<button class="btn btn-default">').text("Edit").click(()=> {editComment(comment._id);})).appendTo(tr);
                } else {
                    $(tr).append($('<td>'));
                }

                $(tableRows).append(tr);
            }

            $('#commentsTable tbody').empty();
            $('#commentsTable').append(tableRows);

            function deleteComment(commentId){
                DbRequester.deleteComment(commentId)
                    .then(loadComments);
            }

            function editComment(commentId){
                let tdCommentBody = $(`#${commentId} .body`);
                let inputBar = $('<input>');
                $(tdCommentBody).empty();
                $(tdCommentBody).append(inputBar);

                // TODO: finish comment edit
                //DbRequester.editComment()
            }
        }
    }

    onChangeHandler(event) {
        this.setState({ comment: event.target.value });
    }
}



