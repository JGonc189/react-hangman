import React, { Component } from 'react';

class Play extends Component {
    render() {
        return (
            <div className='shell__wrapper'>
                <p className='shell__top__bar'>/Users/Anon/Sandbox/Hangman</p>
                <ul className='shell__body'>
                    <li>cd&nbsp;/Users/Anon/Sandbox/Hangman/play.js</li>
                    <li> // Type play.js to initiate the game! </li>
                </ul>
            </div>
        );
    }

}

export default Play;