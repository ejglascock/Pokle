import React, { useContext } from "react";
import { AppContext } from "../App/App";

function GameOver() {
    const {gameOver, pokeOfDay, currAttempt} = useContext(AppContext)
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? "You guessed correctly!" : "You were not able to guess correctly"}</h3>
            <h1>Correct Pokemon: {pokeOfDay}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts.</h3>)}
        </div>
    )
}

export default GameOver;