import React, {Fragment, useState} from "react";
import './Display.css';

const Display = (props) => {

    if (props.pokemon.id) {
        return (
            <Fragment>
                <img class="center" src={props.pokemon.sprites.other["official-artwork"]["front_default"]} ></img>
                <h1 className="text-center mt-5">{props.pokemon.name}</h1>
                {props.pokemon.types.map(e => (
                    <h2 className="text-center mt-2" key={e.slot}>{e.type.name}</h2>
                ))}
            </Fragment>
        )
    }
}


export default Display;