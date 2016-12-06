import React, { Component } from 'react';

export default class AboutView extends Component {
    render() {
        return (
            <div className="about-view">
                <h1>По проекта работиха:</h1>
            <ul>
                <h3>Петър Петров</h3>
                <a href="https://github.com/PetrovPetar"><img src="http://i.imgur.com/wJeG0iy.png" alt='github' height="42" width="42"/></a>
            </ul>
                <ul>
                    <h3>Наско Даскалов</h3>
                    <a href="https://github.com/naskodaskalov"><img src="http://i.imgur.com/wJeG0iy.png" alt='github' height="42" width="42"/></a>
                </ul>
                <ul>
                    <h3>Петър Стоянов</h3>
                    <a href="https://github.com/peter-stoyanov"><img src="http://i.imgur.com/wJeG0iy.png" alt='github' height="42" width="42"/></a>
                </ul>
            </div>
        );
    }
}

