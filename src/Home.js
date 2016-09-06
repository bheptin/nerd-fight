import React, { Component } from 'react';
import SearchableCharacterContainer from './SearchableCharacterContainer';
var classNames = require('classnames');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      battleCharacters: [],
      readyForBattle: false,
      searchBoxIsVisible: true,
      buttonIsVisible: true
    };
    this.sendCharactersToBattle = this.sendCharactersToBattle.bind(this);
  }

  sendCharactersToBattle(character) {
    this.setState({battleCharacters: this.state.battleCharacters.concat(character)});
    if (this.state.battleCharacters.length === 2) {
      this.setState({readyForBattle: true});
    }
  }

  routeToBattle() {
    if (this.state.battleCharacters.length === 2) {
      this.setState({
        searchBoxIsVisible: false,
        buttonIsVisible: false
      });
      let player1 = this.state.battleCharacters[0].name;
      let player2 = this.state.battleCharacters[1].name;
      this.context.router.push(`/battle/${player1}/${player2}`);
    }
  }

  render() {
    let buttonClasses = classNames({
      active: this.state.readyForBattle,
      inactive: !this.state.readyForBattle,
      hidden: !this.state.buttonIsVisible
    });
    return (
      <section>
        <div className="hero-container">
          <SearchableCharacterContainer
            searchBoxIsVisible={this.state.searchBoxIsVisible}
            sendToBattle={this.sendCharactersToBattle}/>
          <button
            className={buttonClasses}
            onClick={this.routeToBattle.bind(this)}>
            Battle
          </button>
          <SearchableCharacterContainer
            searchBoxIsVisible={this.state.searchBoxIsVisible}
            sendToBattle={this.sendCharactersToBattle}/>
        </div>
        {this.props.children}
      </section>
    );
  }
}

Home.contextTypes = {router: React.PropTypes.object};


export default Home;
