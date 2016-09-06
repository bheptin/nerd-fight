import React, { Component } from 'react';
import BattleManager from './js/battlemanager.js';
import Message from './Message';
import ProgressBar from './ProgressBar';
import characters from './data/characters.js';
import messages from './data/messages.js';
import _ from 'lodash';

class Battle extends Component {
  constructor() {
    super();
    this.state = {
      currentMessage: ""
    };
    this.cycleMessages = this.cycleMessages.bind(this);
  }

  cycleMessages(playByPlay) {
    var self = this;
    var i = 0;                     //  set your counter to 1
    function myLoop () {           //  create a loop function
       setTimeout(function () {    //  call a 3s setTimeout when the loop is called
          console.log(playByPlay[i]);
          self.setState({
            currentMessage: playByPlay[i].message,
            currentPlay: playByPlay[i]
          });
          i++;                     //  increment the counter
          if (i < playByPlay.length) {            //  if the counter < 10, call the loop function
             myLoop();             //  ..  again which will trigger another
          }                        //  ..  setTimeout()
       }, 300)
    };

    myLoop();                      //  start the loop
  }

  componentWillMount() {
    BattleManager.addMessages(messages);
    let player1 = _.find(characters, {name: this.props.params.player1});
    let player2 = _.find(characters, {name: this.props.params.player2});
    var playByPlay = BattleManager.statBattle(player1, player2, 1).data[0].fightData;
    this.setState({
      currentMessage: playByPlay[0].message,
      currentPlay: playByPlay[0]
    });
    this.cycleMessages(playByPlay);
  }


  render() {
    return (
      <div>
        <div className="progress-bar-container">
          <ProgressBar
            playerName={this.props.params.player1}
            currentPlay={this.state.currentPlay}/>
          <ProgressBar
            playerName={this.props.params.player2}
            currentPlay={this.state.currentPlay}/>
        </div>
        <Message message={this.state.currentMessage}/>
      </div>
    );
  }
}

export default Battle;
