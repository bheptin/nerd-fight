import React, { Component } from 'react';
import './App.css';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search
          className="characterA"/>
        <Search/>
      </div>
    );
  }
}

export default App;
