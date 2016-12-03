import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Login from './Controllers/LoginController';
import Register from './Controllers/RegisterController';
import AdsView from './Views/AdsView'
import Home from './Views/HomeView';
import CreateAd from './Views/CreateView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/ads" component={AdsView}/>
            <Route path="/create-ad" component={CreateAd}/>
        </Route>
    </Router>
), document.getElementById('root'));

