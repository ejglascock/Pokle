import React, {Fragment, useState} from "react"; 
import './App.css';

//components

import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <Fragment>
      <div className="container">
        <SearchBar pokemonCallback = {setPokemonInfo} />
      </div>
    </Fragment>
  );
}

export default App;
