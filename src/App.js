import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './User';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Simpsons Avatars
        </header>
        <User name="Bart Simpson" avatar="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"/>
        <User name="Homer Simpson" star avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"/>
        <User name="Marge Simpson" avatar="https://static.simpsonswiki.com/images/0/0b/Marge_Simpson.png"/>
        <User name="Lisa Simpson" star />
        </div>
    );
  }
}

export default App;
