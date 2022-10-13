import React, { useState, createContext, useEffect } from "react"; 
import './App.css';

//components
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import { boardDefault, generatePokeSet } from "../Board/GrabBag";
import GameOver from "../GameOver/GameOver";


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0});
  const [pokeSet, setPokeSet] = useState(new Set());
  const [wrongLetters, setWrongLetters] = useState([]);
  const [pokeOfDay, setPokeOfDay] = useState("");
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});

  

  useEffect(() => {
    generatePokeSet()
    .then((pokes) => {
      setPokeSet(pokes.pokemon);
      setPokeOfDay(pokes.todaysPoke);
      setPokeOfDay('rattata');
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
    console.log(pokeOfDay);
    const guess = board[currAttempt.attempt].join('').toLowerCase();
    if (pokeSet.has(guess)) {

      flipTile();
      checkLength(guess);

      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
      if (guess === pokeOfDay) {
        setGameOver({gameOver: true, guessedWord: true});
        return;
      }
  
      if (currAttempt.attempt === 5) {
        setGameOver({gameOver: true, guessedWord: false});
      }
    } else {
      alert("Your guess must be a valid Pokemon.");
    }
  }

  const flipTile = () => {
    const guessArray = []
    const rowTiles = document.querySelector('#row-' + currAttempt.attempt).childNodes;
    let checkPokle = pokeOfDay;

    rowTiles.forEach(tile => {
      guessArray.push({letter: tile.getAttribute('data').toLowerCase(), color: 'error'})
    })

    guessArray.forEach((guess, index) => {
      if (guess.letter == pokeOfDay[index]) {
          guess.color = 'correct'
          checkPokle = checkPokle.replace(guess.letter, '')
      }
    })

    guessArray.forEach(guess => {
      if (checkPokle.includes(guess.letter) && guess.letter != '' && guess.color === 'error') {
          guess.color = 'almost'
          checkPokle = checkPokle.replace(guess.letter, '')
      }
    })

    rowTiles.forEach((tile, index) => {
      setTimeout(() => {
          tile.classList.add('flip')
          tile.classList.add(guessArray[index].color)
      }, 150 * index)
    })
  }

  const checkLength = (guess) => {
    const guessRow = document.querySelector('#row-' + currAttempt.attempt);
    if (guess.length === pokeOfDay.length) {
      guessRow.classList.add("correct-word");
    } else if (guess.length + 1 === pokeOfDay.length || guess.length - 1 === pokeOfDay.length) {
      guessRow.classList.add("almost-word");
    } else {
      guessRow.classList.add("error-word");
    }
  }


  return (
    <div className="App">
      <nav>
        <h1>Pokle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, pokeOfDay, wrongLetters, setWrongLetters, gameOver, setGameOver }} >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
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

