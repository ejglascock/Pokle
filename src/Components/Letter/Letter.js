import React, { useContext, useEffect } from "react"; 
import { AppContext } from "../App/App"

function Letter({ letterPos, attemptVal }) {
    const { board, pokeOfDay, currAttempt, wrongLetters, setWrongLetters, gameOver } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = pokeOfDay[letterPos] === letter.toLowerCase()
    const almost = !correct && letter.toLowerCase() !== "" && pokeOfDay.includes(letter.toLowerCase());

    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setWrongLetters((prev) => [...prev, letter])
        }
    }, [currAttempt.attempt]);

    return (
        <div data={letter} className="letter" id={letterState} >{!gameOver.guessedWord ? letter : ""}</div>
    )
}

export default Letter;