import React, { useContext } from "react";
import Letter from "../Letter/Letter";
import { AppContext } from "../App/App"

function Word({ attemptVal }) {
    const { board, pokemon, currAttempt } = useContext(AppContext);
    const guess = board[attemptVal].join('')


    const correct = guess.length === pokemon.length;
    const almost = !correct && (guess.length === pokemon.length + 1 || guess.length === pokemon.length - 1);

    const wordState = currAttempt.attempt > attemptVal && (correct ? "correct-word" : almost ? "almost-word" : "error-word");

    return (
        <div className="row" id={wordState}>
            <Letter letterPos={0} attemptVal={attemptVal} />
            <Letter letterPos={1} attemptVal={attemptVal} />
            <Letter letterPos={2} attemptVal={attemptVal} />
            <Letter letterPos={3} attemptVal={attemptVal} />
            <Letter letterPos={4} attemptVal={attemptVal} />
            <Letter letterPos={5} attemptVal={attemptVal} />
            <Letter letterPos={6} attemptVal={attemptVal} />
            <Letter letterPos={7} attemptVal={attemptVal} />
            <Letter letterPos={8} attemptVal={attemptVal} />
            <Letter letterPos={9} attemptVal={attemptVal} />
            <Letter letterPos={10} attemptVal={attemptVal} />
            <Letter letterPos={11} attemptVal={attemptVal} />
        </div>
    )
}

export default Word;


/*
<Letter letterPos={0} attemptVal={attemptVal} />
            <Letter letterPos={1} attemptVal={attemptVal} />
            <Letter letterPos={2} attemptVal={attemptVal} />
            <Letter letterPos={3} attemptVal={attemptVal} />
            <Letter letterPos={4} attemptVal={attemptVal} />
            <Letter letterPos={5} attemptVal={attemptVal} />
            <Letter letterPos={6} attemptVal={attemptVal} />
            <Letter letterPos={7} attemptVal={attemptVal} />
            <Letter letterPos={8} attemptVal={attemptVal} />
            <Letter letterPos={9} attemptVal={attemptVal} />
            <Letter letterPos={10} attemptVal={attemptVal} />
            <Letter letterPos={11} attemptVal={attemptVal} />
*/