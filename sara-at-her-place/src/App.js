import React from 'react';
import sara from './saraconda2.png';
import './App.css';

function Integer(props) {
    let numberStr = props.number.toString();
    let numberRepr = "";
    for (let i=0; i<numberStr.length; i++) {
        if (i !== 0 && (numberStr.length - i) % 3 === 0) {
            numberRepr += ",";
        }
        numberRepr += numberStr[i];
    }
    return (
        <h3 className={props.className}>{numberRepr} {props.label}</h3>
    );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {now: Date.now()};
  }

  componentDidMount() {
    setInterval(() => this._tick(), 1000); 
  }

  _tick() {
    this.setState({now: Date.now()});
  }

  render() {
      const timeFirstInside = new Date('March 21, 2020, 11:00:00 GMT-06:00');
      const milliseconds = (this.state.now - timeFirstInside);
      const seconds = milliseconds/1000;
      const minutes = seconds/60;
      const hours = minutes/60;
      const days = hours/24;
      const years = (days/365).toFixed(1);
      return (
        <div className="App">
          <header className="App-header">
            <p>This is Sara</p>
            <p>She is a covid <b>hero</b></p>
            <img src={sara} className="Sara-pic" alt="saraconda" />
            <h2>She hasn't left her house in exactly:</h2>
          </header>
          <div className="App-body">
            <Integer className="Item" number={Math.floor(days)} label="days"/>
            <Integer className="Item" number={Math.floor(hours)} label="hours"/>
            <Integer className="Item" number={Math.floor(minutes)} label="minutes"/>
            <Integer className="Item" number={Math.floor(seconds)} label="seconds"/>
            <h3 className="Item">{years} years</h3>
            <h2>(Don't) Be like Sara</h2>
          </div>
        </div>
      );
  }
}

export default App;
