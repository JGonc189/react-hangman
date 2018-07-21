import React, { Component } from 'react';
import Typed from 'react-typed';

class Intro extends Component {
    render() {
        return (
            <div className='intro__wrapper'>
                <h1><Typed
                strings={[`Welcome to a "Coder's Hangman!"  The game is simple, just solve the puzzle by guessing the letters in the word! Too many wrong guesses and you're done!`, `If you need help, click <i class="fas fa-question-circle"></i>`, `Good Luck, and have fun...`]}
                typeSpeed={70}
                
                /></h1>
                <br />

                {/* <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder" 
                    loop
                />                     */}
            </div>
        );
    }
}

export default Intro;

