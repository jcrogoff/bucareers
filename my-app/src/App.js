import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Toolbar />
          <img src={require('./BUlogo.png')} alt="logo" />
          <p>
            BUILDING UP CAREERS
          </p>
        </header>
      </div>
    );
  }
}


export default App;

//https://www.youtube.com/watch?v=l6nmysZKHFU