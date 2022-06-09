import React, {Fragment} from "react"; 
import './App.css';

//components

import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <Fragment>
      <div className="container">
        <SearchBar />
      </div>
    </Fragment>
  );
}

export default App;
