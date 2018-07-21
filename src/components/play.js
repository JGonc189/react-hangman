import React, { Component } from 'react';
import Typed from 'react-typed';

class Play extends Component {
    render() {
        return (
            <div className='shell__wrapper'>
                
                <p className='shell__top__bar'>
                    <span className='shell__icons'>
                        <a href="#"><i className="fas fa-question-circle"></i></a>
                        <a href="#"><i className="fas fa-times-circle"></i></a>
                        <a href="#"><i className="fas fa-minus-circle"></i></a>
                    </span>
                    /Users/Anon/Sandbox/Hangman
                </p>
                <ul className='shell__body'>
                    <li>cd&nbsp;/Users/Anon/Sandbox/Hangman/play.js</li>
                    <li>
                        <input className='play__input' type='text' />
                     </li>
                </ul>
            </div>
        );
    }

}

export default Play;