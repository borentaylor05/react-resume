import React, { Component } from 'react';

import AboutMe from './components/AboutMe/AboutMe';
import data from './data.json';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AboutMe {...data.aboutMe} />
            </div>
        );
    }
}

export default App;
