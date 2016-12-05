import React, { Component } from 'react';
import CreateView from '../Views/CreateView'
import notifications from '../Notifications/notifications';
import DbRequester from '../Models/dbRequester';

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
        switch (event.target.name) {
            case 'title':
                this.setState({title: event.target.value});
                break;
            case 'body':
                this.setState({body: event.target.value});
                break;
            case 'price':
                this.setState({price: event.target.value});
                break;
            case 'phone':
                this.setState({phone: event.target.value});
                break;
            case 'picture':
                this.setState({picture: event.target.value});
                break;
            default:
                break;
        }
    }


    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({author: sessionStorage.getItem("username") , submitDisabled: true});
        this.createAd(this.state.title, this.state.author, this.state.body, this.state.price, this.state.phone, this.state.picture);
    }

    createAd(title, author, body, price, phone, picture) {
               DbRequester.createAd(title, author, body, price, phone, picture)
            .then(successfulCreatedAd.bind(this));

        function successfulCreatedAd(adData) {
            // Navigate away from create page
            this.context.router.push('/ads');
            notifications.showInfo("Обявата беше успешно добавена!");
        }
    }
}


CreateController.contextTypes = {
    router: React.PropTypes.object
};