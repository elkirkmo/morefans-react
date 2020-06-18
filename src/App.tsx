import React, { useState, useEffect } from 'react';
import Team from './components/Team';
import data from './data/nfl';
import './App.css';

interface Props {
  className: string;
  fanCount: string;
  id: string;
  mascot: string;
  // mascotFacts: {
  //   number: string;
  // };
  mythical: boolean;
  name: string;
  vs: boolean;
}

function App() {
  const [currentTeam, setCurrentTeam] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>More Fans</h1>
        <Team {...data[currentTeam]} />
        {currentTeam > 0 && (
          <button onClick={() => setCurrentTeam(currentTeam - 1)}>
            Previous Team
          </button>
        )}
        <button onClick={() => setCurrentTeam(currentTeam + 1)}>
          Next Team
        </button>
      </header>
    </div>
  );
}

export default App;
