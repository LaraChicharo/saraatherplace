import React from 'react';
import sara from './saraconda2.png';
import './App.css';

function App() {
  const timeFirstInside = new Date('March 21, 2020, 11:00:00 GMT-06:00');
  const milliseconds = (Date.now() - timeFirstInside);
  const seconds = milliseconds/1000;
  const minutes = seconds/60;
  const hours = minutes/60;
  const days = hours/24;
  const years = days/365;
  return (
    <div className="App">
      <header className="App-header">
        <p>This is Sara</p>
        <p>She is a covid <b>hero</b></p>
        <img src={sara} className="Sara-pic" alt="saraconda" />
        <h2>She hasn't left her house in exactly:</h2>
      </header>
      <div className="App-body">
        <h3 className="Item">{Math.floor(days)} days</h3>
        <h3 className="Item">{Math.floor(hours)} hours</h3>
        <h3 className="Item">{Math.floor(minutes)} minutes</h3>
        <h3 className="Item">{Math.floor(seconds)} seconds</h3>
        <h3 className="Item">{Math.floor(seconds)} seconds</h3>
        <h2>(Don't) Be like Sara</h2>
      </div>
    </div>
  );
}

export default App;
