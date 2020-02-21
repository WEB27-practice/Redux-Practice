import React from 'react';
import PlayerForm from "./components/PlayerForm.js";
import PlayerList from "./components/PlayerList.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="image">
        <h1>Soccer Players</h1>
        <PlayerForm />
        <PlayerList />
      </div>
    </div>
  );
}

export default App;
