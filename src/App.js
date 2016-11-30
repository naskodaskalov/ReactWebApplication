import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';

// Import views
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        clickHome={this.showHomeView.bind(this)}
                        clickLogin={this.showLoginView.bind(this)}
                        clickRegister={this.showRegisterView.bind(this)}
                    />
                </header>
                <div id="main"></div>
            </div>
        );
    }

    showView(component){
        ReactDOM.render(
            component,
            document.getElementById("main"));
    }

    showHomeView(){
        this.showView(<HomeView/>);
    }

    showLoginView(){
        this.showView(<LoginView submit={this.login}/>);
    }

    login(username, password) {
        // TODO: make ajax request!
    }

    showRegisterView(){
        this.showView(<RegisterView/>);
    }
}

