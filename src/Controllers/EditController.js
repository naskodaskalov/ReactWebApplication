import React, { Component } from 'react';
import EditView from '../Views/EditView.js'
import { editAd } from '../DbRequester';
import notifications from '../Notifications/notifications';
import $ from 'jquery';

export default class EditController extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author:'',
            body: '',
            price: '',
            phone: '',
            picture: '',
            submitDisabled: false };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.createAd = this.editAd.bind(this);
    }

    componentDidMount() {
        // Populate form
        loadAdDetails(this.props.params.adID, this.onLoadSuccess);
    }

    render() {
        return(
            <EditView
                title={this.state.title}
                author={this.state.author}
                body={this.state.body}
                price={this.state.price}
                phone={this.state.phone}
                picture={this.state.picture}
                submitDisabled={this.state.submitDisabled}
                onChangeHandler={this.onChangeHandler}
                onSubmitHandler={this.onSubmitHandler}
            />
        )
    }

    onLoadSuccess(response) {
        this.setState({
            title: response.title,
            body: response.body,
            author: response.author,
            price: response.price,
            phone: response.phone,
            picture: response.picture,
            submitDisabled: false
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        //this.setState({ submitDisabled: true });
        this.editAd(
            this.props.params.adID,
            this.state.title,
            this.state.author,
            this.state.body,
            this.state.price,
            this.state.phone,
            this.state.picture,
            this.onSubmitResponse
        );
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from create page
            this.context.router.push('/ads');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    editAd(adID, title, author, body, price, phone, picture) {
        DbRequester.createAd(adID, title, author, body, price, phone, picture)
            .then(successfulEditdAd.bind(this));

        function successfulEditdAd(adData) {
            notifications.showInfo("Обявата беше успешно редактирана!");
            //this.context.router.push('/');
        }
    }
}


EditController.contextTypes = {
    router: React.PropTypes.object
};
