import React, { useState, useEffect } from 'react';
import Team from './components/Team';
import data from './data/nfl';
import './App.css';

const App = () => {
  const [currentTeam, setCurrentTeam] = useState(0);

  useEffect(() => {
    if (currentTeam === data.length - 1) setCurrentTeam(0);
  }, [currentTeam]);
  return (
    <div className="App" id="nfl">
      <header>
        <h1>More Fans</h1>
      </header>
      {currentTeam > 0 && (
        <button onClick={() => setCurrentTeam(currentTeam - 1)}>
          Previous Team
        </button>
      )}
      <Team {...data[currentTeam]} />

      <button onClick={() => setCurrentTeam(currentTeam + 1)}>Next Team</button>
    </div>
  );
};

export default App;
