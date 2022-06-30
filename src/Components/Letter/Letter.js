import React, { useState, useContext } from "react"; 
import { AppContext } from "../App/App"

function Letter({ letterPos, attemptVal }) {
    const { board, pokemon, currAttempt } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = pokemon[letterPos] === letter
    const almost = !correct && letter !== "" && pokemon.includes(letter);

    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    return (
        <div className="letter" id={letterState} >{letter}</div>
    )
}

export default Letter;