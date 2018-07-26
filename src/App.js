import React, { Component } from 'react';
import Play from './components/play';
import Intro from './components/intro';
import Footer from './components/footer';
import './App.css';
import words from './words.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Intro />
        <Play />
        <Footer />
      </div>
    );
  }
}

export default App;
