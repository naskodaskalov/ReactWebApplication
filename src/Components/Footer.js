import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (

            <footer className="footer-basic-centered">
                <div className="left-menu">
                    <div className="devs-names">Dev. Петър Стоянов</div>
                    <a href="https://github.com/peter-stoyanov"><img id="facebook" alt="fb-icon" src="http://naskodaskalov.cloudvps.bg/content/images/facebook-logo-hover.png" /></a>
                    <a href="https://github.com/naskodaskalov"><img id="github" alt="github-icon" src="http://naskodaskalov.cloudvps.bg/content/images/github-logo-hover.png" /></a>
                </div>

                <div className="center-menu">
                    <div className="devs-names">Dev. Петър Петров</div>
                    <a href="https://www.facebook.com/petar.petrov.stz"><img id="facebook" alt="fb-icon" src="http://naskodaskalov.cloudvps.bg/content/images/facebook-logo-hover.png" /></a>
                    <a href="https://github.com/PetrovPetar"><img id="github" alt="github-icon" src="http://naskodaskalov.cloudvps.bg/content/images/github-logo-hover.png" /></a>
                </div>

                <div className="right-menu">
                    <div className="devs-names">Dev. Наско Даскалов</div>
                    <a href="https://www.facebook.com/nasko.daskalov"><img id="facebook" alt="fb-icon" src="http://naskodaskalov.cloudvps.bg/content/images/facebook-logo-hover.png" /></a>
                    <a href="https://github.com/naskodaskalov"><img id="github" alt="github-icon" src="http://naskodaskalov.cloudvps.bg/content/images/github-logo-hover.png" /></a>
                </div>

                <p className="footer-company-name">GanyoExpress.BG &copy; 2016</p>

            </footer>

    );
    }
}
