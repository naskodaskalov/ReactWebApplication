import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, hashHistory } from 'react-router'
import { Route, IndexRoute, Link } from 'react-router'
import Login from './Controllers/LoginController';
import Register from './Controllers/RegisterController';
import AdsView from './Views/AdsView'
import Home from './Views/HomeView';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/ads" component={AdsView}/>
        </Route>
    </Router>
), document.getElementById('root'));

