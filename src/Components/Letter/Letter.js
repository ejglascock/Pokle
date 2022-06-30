import React, { useContext, useEffect } from "react"; 
import { AppContext } from "../App/App"

function Letter({ letterPos, attemptVal }) {
    const { board, pokeOfDay, currAttempt, wrongLetters, setWrongLetters } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = pokeOfDay[letterPos] === letter
    const almost = !correct && letter !== "" && pokeOfDay.includes(letter);

    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setWrongLetters((prev) => [...prev, letter])
        }
    }, [currAttempt.attempt]);

    return (
        <div className="letter" id={letterState} >{letter}</div>
    )
}

export default Letter;