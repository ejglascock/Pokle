import React, { useContext } from 'react';
import { AppContext } from "../App/App"

function Help() {
    const { helpOpen, setHelpOpen } = useContext(AppContext)

    return (
        <div className="help-background">
            <div className="help-container">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={() => {setHelpOpen(false)}}>X</button>
                </div>
                <div className="title">
                    <h1>How to Play</h1>
                    <br></br>
                </div>
                <div className="body">
                    <p>Guess the Pokle within 6 tries!</p>
                    <br></br>
                    <ul>
                        <li>Each guess must be a valid Pokemon name.</li>
                        <br></br>
                        <li>The color of the tiles will change to show how close your guess was to the Pokemon.</li>
                        <br></br>
                        <li>The color of the outline will change to show how close in length your guess was to the Pokemon.</li>
                        <br></br>
                        <li><em className="blue">Blue</em> signafies a correct letter in a correct position, or correct name length.</li>
                        <br></br>
                        <li><em className="yellow">Yellow</em> signafies a correct letter in a wrong position, or a guess length of one greater or lesser than the correct answer.</li>
                        <br></br>
                        <li><em className="gray">Gray</em> signafies an incorrect letter, or a guess length of two or more greater or lesser than the correct answer.</li>
                        <br></br>
                    </ul>
                    <p>Some Pokemon names had to be changed to fit the constraints of the game.</p>
                    <br></br>
                    <ul>
                     <li>Any spaces, dashes, apostrophes, periods, or accents have been removed (i.e. MRMIME).</li>
                     <br></br> 
                     <li>Numbers are spelled out (i.e. PORYGONTWO).</li>
                     <br></br>
                     <li>The male and female symbols have been replaced with M and F respectively for the Nidorans (i.e. NIDORANM and NIDORANF).</li>
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Help;