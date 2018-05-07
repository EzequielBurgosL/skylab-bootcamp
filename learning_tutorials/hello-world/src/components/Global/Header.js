import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="logo">
          <img src={logo} alt="logo" />
          <h1>hello world React</h1>
        </header>
      </div>
    );
  }
}

export default Header;