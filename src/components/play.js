import React, { Component } from 'react';

class Play extends Component {
    render() {
        return (
            <div className='shell-wrapper'>
                <p className='shell-top-bar'>/Users/Anon/Sandbox/Hangman</p>
                <ul className='shell-body'>
                    <li>cd&nbsp;/Users/Anon/Sandbox/Hangman/play.js</li>
                    <li> // Type play.js to initiate the game! </li>
                </ul>
            </div>
        );
    }

}

export default Play;