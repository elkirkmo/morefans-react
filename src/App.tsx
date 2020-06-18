import React, { useState } from 'react';
import Team from './components/Team';
import data from './data/nfl';
import './App.css';

const App = () => {
  const [currentTeam, setCurrentTeam] = useState(0);
  return (
    <div className="App" id="nfl">
      <Team {...data[currentTeam]} />
      <button
        onClick={() =>
          currentTeam > 0
            ? setCurrentTeam(currentTeam - 1)
            : setCurrentTeam(data.length - 1)
        }
      >
        Previous Team
      </button>
      <button
        onClick={() =>
          currentTeam < data.length - 1
            ? setCurrentTeam(currentTeam + 1)
            : setCurrentTeam(0)
        }
      >
        Next Team
      </button>
      <footer></footer>
    </div>
  );
};

export default App;
