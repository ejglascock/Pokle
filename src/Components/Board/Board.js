import React, {useState} from "react"; 
import { boardDefault } from "./GrabBag";
import Word from '../Word/Word';
import Letter from '../Letter/Letter';

function Board() {
    return (
        <div className="board">
            <div className="row">
                <Word attemptVal={0}></Word>
            </div>
            <div className="row">
                <Word attemptVal={1}></Word>
            </div>
            <div className="row">
                <Word attemptVal={2}></Word>
            </div>
            <div className="row">
                <Word attemptVal={3}></Word>
            </div>
            <div className="row">
                <Word attemptVal={4}></Word>
            </div>
            <div className="row">
                <Word attemptVal={5}></Word>
            </div>
        </div>
    )
}

export default Board;