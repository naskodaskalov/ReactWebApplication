import React, { Component } from 'react';
import CreateView from '../Views/CreateView'
import { createAd } from '../DbRequester';
import notifications from '../Notifications/notifications';
import $ from 'jquery';

export default class CreateController extends Component {
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
        this.createAd = this.createAd.bind(this);
    }
    render() {
        return(
            <CreateView
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

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);

        // event.preventDefault();
        // switch (event.target.name) {
        //     case 'title':
        //         this.setState({ title: event.target.value });
        //         break;
        //     case 'author':
        //         this.setState({ author: event.target.value });
        //         break;
        //     case 'body':
        //         this.setState({ body: event.target.value });
        //         break;
        //     case 'price':
        //         this.setState({ price: event.target.value });
        //         break;
        //     case 'phone':
        //         this.setState({ phone: event.target.value });
        //         break;
        //     case 'picture':
        //         this.setState({ picture: event.target.value });
        //         break;
        //     default: break;
        // }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        //this.setState({ submitDisabled: true });
        this.createAd(this.state.title, this.state.author, this.state.body, this.state.price, this.state.phone, this.state.picture, this.onSubmitResponse);
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

    createAd(title, author, body, price, phone, picture) {
        DbRequester.createAd(title, author, body, price, phone, picture)
            .then(successfulCreatedAd.bind(this));

        function successfulCreatedAd(adData) {
            notifications.showInfo("Обявата беше успешно добавена!");
            //this.context.router.push('/');
        }
    }
}


CreateController.contextTypes = {
    router: React.PropTypes.object
};
