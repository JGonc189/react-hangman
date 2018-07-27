import React, { Component } from 'react';
import Play from './components/play';
import Intro from './components/intro';
import Footer from './components/footer';
import './App.css';
// import words from './words.json';

class App extends Component {
  state = {
    alphabet: [
      'a', 'b', 'c',
      'd', 'e', 'f',
      'g', 'h', 'i',
      'j', 'k', 'l',
      'm', 'n', 'o',
      'p', 'q', 'r',
      's', 't', 'u',
      'v', 'w', 'x',
      'y', 'z'
    ],
    words: ['html', 'css', 'javascript', 'react', 'vue'],
    randomWord: "",
    letters: [],
    numberOfBlanks: 0,
    blanks: [],
    incorrect: [],
    letterGuessed: 0,
    win: 0,
    guesses: 5,
    correct: 0

  };
  
  resetGame = () => {
    this.setState({
      // chooses a word randomly from the words array
      randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)],
      // splits the randomword into individual letters
      letters: this.state.randomWord.split(''),
      // get the number of blanks
      numberOfBlanks: this.state.letters.length,
    });
    console.log(this.state.randomWord);
  }




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
        <Play resetGame={this.resetGame} />
        <Footer />
      </div>
    );
  }
}

export default App;
