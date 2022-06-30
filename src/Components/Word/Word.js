import React, {useState} from "react";
import Letter from "../Letter/Letter";

function Word({ attemptVal }) {
    return (
        <div className="row">
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