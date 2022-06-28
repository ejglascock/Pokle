import React, {useState} from "react"; 
import './App.css';

//components
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';


function App() {
  return (
    <div className="App">
      <nav>
        <h1>Pokle</h1>
      </nav>
      <Board />
      <Keyboard />
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

