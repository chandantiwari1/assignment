import React from 'react'
import '../styles/play.css';
import { useState } from 'react';
import axios from "axios";
/**
 * 
 * query params http://sandbox.mc.edu/~bennet/php/asst/hanger.php?thelet=R
 */
const Play = () => {
    const [char, setChar] = useState('');
    const [count, setCount] = useState(0);
    const [word, setWord] = useState('')
    const apiCall = () => {

    }

    const handleWords = async (e, c) => {
        setCount(count + 1);
        let baseUrl = 'http://localhost:8800'
        let queryparams = `?char=${c}&count=${count}`;
        let response = await axios.get(`${baseUrl}/${queryparams}`).then((res) => {
            console.log(res);
            if (res.data.success) {
                if (res.data.index >= 0) {
                    console.log(word,"==================word==============");
                    document.getElementById(res.data.index+1).innerText = c;
                }
            }
        })
        console.log(response);
    }
    return (
        <div className='main-container'>
            {
                count <= 6
                    ?
                    <div className='main-wrapper'>
                        <div className='game-words-wrapper'>
                            <div className='game'></div>
                            <div className='words'>
                                <span id={1}>_</span>
                                <span id={2}>_</span>
                                <span id={3}>_</span>
                                <span id={4}>_</span>
                                <span id={5}>_</span>
                            </div>
                        </div>
                        <div className='button-wrapper'>
                            <div className='alphabets'>
                                <span onClick={(e) => handleWords(e, 'A')}>A</span>
                                <span onClick={(e) => handleWords(e, 'B')}>B</span>
                                <span onClick={(e) => handleWords(e, 'C')}>C</span>
                                <span onClick={(e) => handleWords(e, 'D')}>D</span>
                                <span onClick={(e) => handleWords(e, 'E')}>E</span>
                                <span onClick={(e) => handleWords(e, 'F')}>F</span>
                                <span onClick={(e) => handleWords(e, 'G')}>G</span>
                                <span onClick={(e) => handleWords(e, 'H')}>H</span>
                                <span onClick={(e) => handleWords(e, 'I')}>I</span>
                                <span onClick={(e) => handleWords(e, 'J')}> J</span>
                                <span onClick={(e) => handleWords(e, 'K')}>K </span>
                                <span onClick={(e) => handleWords(e, 'L')}>L</span>
                                <span onClick={(e) => handleWords(e, 'M')}>M</span>
                                <span onClick={(e) => handleWords(e, 'N')}>N</span>
                                <span onClick={(e) => handleWords(e, 'O')}>O</span>
                                <span onClick={(e) => handleWords(e, 'P')}>P</span>
                                <span onClick={(e) => handleWords(e, 'Q')}>Q</span>
                                <span onClick={(e) => handleWords(e, 'R')}>R</span>
                                <span onClick={(e) => handleWords(e, 'S')}>S</span>
                                <span onClick={(e) => handleWords(e, 'T')}>T</span>
                                <span onClick={(e) => handleWords(e, 'U')}>U</span>
                                <span onClick={(e) => handleWords(e, 'V')}>V</span>
                                <span onClick={(e) => handleWords(e, 'W')}>W</span>
                                <span onClick={(e) => handleWords(e, 'X')}>X</span>
                                <span onClick={(e) => handleWords(e, 'Y')}>Y</span>
                                <span onClick={(e) => handleWords(e, 'Z')}>Z</span>

                            </div>
                            <div className='buttons'>
                                <a href=""> New Game
                                </a>

                                <a href=''>Surrender</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='over-wrapper'>
                        <h1 className='over-header'>
                            Hangman Solution
                        </h1>
                        <div className='score'>
                            the word was: {word}
                        </div>

                        <div className='button'>
                            <a href='' >New Game</a>
                        </div>

                    </div>
            }
        </div>
    )
}

export default Play