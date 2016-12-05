import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';
import DbRequester from '../Models/dbRequester.js';
import notifications from '../Notifications/notifications';
import $ from 'jquery';

import AdControls from '../Controllers/AdControls.js';
// TODO : make css for this file and update


export default class Ad extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            author: '',
            price: '',
            phone: '',
            picture: '',
            submitDisabled: false,
            tableRows: '',
            comment: '',
            showModal: false
        };

        this.loadAd = this.loadAd.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createComment = this.createComment.bind(this);
        this.showComments = this.showComments.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onDeleteAd = this.onDeleteAd.bind(this);
    }

    componentDidMount() {
        this.loadAd();
        this.showComments(this.props.params.adId);
    }

    loadAd() {
        DbRequester.loadAdDetails(this.props.params.adId)
            .then(loadAdSuccess.bind(this));

        function loadAdSuccess(ad) {

            let newState = {
                title: ad.title,
                body: ad.body,
                author: ad.author,
                price: ad.price,
                phone: ad.phone,
                picture: ad.picture,
                submitDisabled: false
            };

            if (ad._acl.creator === sessionStorage.getItem('userId')) {
                newState.canEdit = true;
            }

            this.setState(newState);
        }
    }

    closeModal() {
        this.setState({showModal: false});
    }

    deleteClicked(event) {
        event.preventDefault();
        this.setState({showModal: true});
    }

    onDeleteAd(event) {
        event.preventDefault();
        DbRequester.deleteAd(this.props.params.adId)
            .then(deleteAdSuccess.bind(this));

        function deleteAdSuccess(response) {
            this.context.router.push('/ads');
            notifications.showInfo("Обявата беше успешно изтрита!");
        }
    }



    render() {
        let ad = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-default center-block">
                        <div className="panel-heading">Снимка:</div>
                        <div className="panel-body">

                            <img src={ad.picture  || "http://i.imgur.com/Rtkn7ex.png"} className="img-thumbnail"
                                 width="400" height="400" alt="photo"/>

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

                <div className="row">
                    <div className="panel panel-default center-block">
                        <div className="panel-heading">Телефон:</div>
                        <div className="panel-body">
                            <span>{ad.phone}</span>
                        </div>
                    </div>
                </div>

                <AdControls
                    adId={this.props.params.adId}
                    canEdit={this.state.canEdit}
                    deleteClicked={this.deleteClicked}
                />

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
                        <textarea className="form-control"
                                  rows="5" cols="40"
                                  onChange={this.onChangeHandler} required="required"
                                  id="textCreateComment"/>
                    <input type="submit" value="Изпрати" className="btn btn-default"/>
                </form>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Потвърждение!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Сигурни ли сте че искате да изтриете обявата?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onDeleteAd}>Изтрий!</Button>
                        <Button onClick={this.closeModal}>Затвори</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );


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

    showComments(adId) {
        let loadComments = this.showComments;
        DbRequester.loadCommentsForAd(adId)
            .then(successLoadComments);

        function successLoadComments(comments) {
            let tableRows = $('<tbody>');
            for (let comment of comments) {

                let tr = $('<tr>').attr("id", comment._id)
                    .append($('<td>').text(comment.author))
                    .append($('<td>').text(comment.body));

                if (comment.author == sessionStorage.getItem("username")) {
                    $('<td>')
                        .append($('<button class="btn btn-default">').text("Delete").click(()=> {
                            deleteComment(comment._id);
                        }))
                        .append($('<button class="btn btn-default">').text("Edit").click(()=> {
                            editComment(comment._id);
                        })).appendTo(tr);
                } else {
                    $(tr).append($('<td>'));
                }

                $(tableRows).append(tr);
            }

            $('#commentsTable tbody').empty();
            $('#commentsTable').append(tableRows);

            function deleteComment(commentId) {
                DbRequester.deleteComment(commentId)
                    .then(loadComments);
            }

            function editComment(commentId) {
                alert("edit comment");
            }
        }
    }


    onChangeHandler(event) {
        this.setState({comment: event.target.value});
    }
}


Ad.contextTypes = {
    router: React.PropTypes.object
};


