import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hello world</h1>
        </header>
        <h2>Esto es un h2</h2>
        <p className="App-intro">esto es el párrafo central</p>
      </div>
    );
  }
}

export default App;
