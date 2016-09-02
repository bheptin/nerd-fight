import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import messages from './data/messages.js';
import BattleManager from './js/battlemanager';

class App extends Component {
  constructor() {
    super();
    this.state = {battleCharacters: []};
  }

  sendCharactersToBattle(character) {
    this.setState({battleCharacters: this.state.battleCharacters.concat(character)});
    if (this.state.battleCharacters.length === 2) {
      BattleManager.addMessages(messages);
      console.log(BattleManager.statBattle(this.state.battleCharacters[0], this.state.battleCharacters[1], 100));
    }
  }

  render() {
    return (
      <div className="App">
        <Search battle={this.sendCharactersToBattle.bind(this)}/>
        <Search battle={this.sendCharactersToBattle.bind(this)}/>
      </div>
    );
  }
}

export default App;
