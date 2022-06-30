import React, { useState, createContext, useEffect } from "react"; 
import './App.css';

//components
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import { boardDefault, generatePokeSet } from "../Board/GrabBag";


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0});
  const [pokeSet, setPokeSet] = useState(new Set());
  const [wrongLetters, setWrongLetters] = useState([]);

  const pokeOfDay = "REGIDRAGO"

  useEffect(() => {
    generatePokeSet()
    .then((pokes) => {
      setPokeSet(pokes.pokemon);
    })
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 11) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }

  const onEnter = () => {
    if (currAttempt.letterPos < 3) return;
    const guess = board[currAttempt.attempt].join('');
    if (pokeSet.has(guess)) {
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    } else {
      alert("Your guess must be a valid Pokemon.");
    }

    if (guess === pokeOfDay) {
      alert("You guessed correctly!")
    }
  }


  return (
    <div className="App">
      <nav>
        <h1>Pokle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, pokeOfDay, wrongLetters, setWrongLetters }} >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}


export default App;
/*
//components

import SearchBar from '../SearchBar/SearchBar';
import Display from '../Display/Display';

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <Fragment>
      <div className="container">
        <SearchBar pokemonCallback = {setPokemonInfo} />
      </div>
      <div className="constainer">
        <Display pokemon = {pokemonInfo} />
      </div>
    </Fragment>
  );
}

export default App;
*/

