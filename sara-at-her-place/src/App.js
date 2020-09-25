import React from 'react';
import sara from './saraconda2.png';
import './App.css';

function App() {
  const dateFirstInside = new Date('2020-04-21T11:00:00');
  const days = Math.floor((Date.now() - dateFirstInside)/(1000*3600*24));
  return (
    <div className="App">
      <header className="App-header">
        <p>This is Sara</p>
        <p>She is a covid <b>hero</b></p>
        <img src={sara} className="Sara-pic" alt="saraconda" />
        <h2>
          She hasn't left her house in exactly {days} days
        </h2>
        <p>(Don't) Be like Sara</p>
      </header>
    </div>
  );
}

export default App;
