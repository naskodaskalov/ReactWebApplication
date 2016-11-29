import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';

// Import views
import HomeView from './Views/HomeView';

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
}

