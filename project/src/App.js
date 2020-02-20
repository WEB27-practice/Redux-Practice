import React from 'react';
import PlayerForm from "./components/PlayerForm.js";
import PlayerList from "./components/PlayerList.js";

import './App.css';

function App() {
  return (
    <div className="center">
      <h1>Soccer Players</h1>
        <PlayerForm />
        <PlayerList />
    </div>
  );
}

export default App;
