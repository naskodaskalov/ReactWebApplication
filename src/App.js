import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';

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
          <NavigationBar username={this.state.username} />
        </header>
      </div>
    );
  }
}

