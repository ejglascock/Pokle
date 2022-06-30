import React, {useContext, useState} from "react"; 
import { AppContext } from "../App/App";

function Key({ keyVal, bigKey }) {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext);
    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
    }
    return (
        <div className="key" id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;