import React, { useContext } from "react"; 
import { AppContext } from "../App/App";

function Key({ keyVal, bigKey, wrong }) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DEL") {
            onDelete();
        }else {
            onSelectLetter(keyVal);
        }
    };
    return (
        <div className="key" id={bigKey ? "big" : wrong && "wrong"} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;