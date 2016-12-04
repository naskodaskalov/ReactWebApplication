import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Login from './Controllers/LoginController';
import Register from './Controllers/RegisterController';
import Ads from './Controllers/AdsController'
import Home from './Views/HomeView';
import Ad from './Views/CurrentAdView';
import CreateAd from './Views/CreateView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="ads" component={Ads} >
                <Route path=":adId" component={Ad}/>
            </Route>
            <Route path="create-ad" component={CreateAd}/>
        </Route>
    </Router>
), document.getElementById('root'));

