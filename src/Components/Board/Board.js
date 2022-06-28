import React, {useState} from "react"; 
import { boardDefault } from "./Pokemon";

function Board() {
    const [board, setBoard] = useState(boardDefault);
    
}

export default Board;