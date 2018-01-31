import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine';

class App extends Component {
  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
