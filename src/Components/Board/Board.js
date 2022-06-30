import React from "react"; 
import Word from '../Word/Word';

function Board() {
    return (
        <div className="board">
            <Word attemptVal={0} ></Word>
            <Word attemptVal={1} ></Word>
            <Word attemptVal={2} ></Word>
            <Word attemptVal={3} ></Word>
            <Word attemptVal={4} ></Word>
            <Word attemptVal={5} ></Word>
        </div>
    )
}

export default Board;