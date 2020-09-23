import React, { Component } from 'react';
import logo from '../logo.svg';

class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        );
    }
}

export default Home;