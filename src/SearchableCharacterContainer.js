import React, { Component } from 'react';
import Character from './Character';
import SearchBox from './SearchBox';
import characters from './data/characters.js';
import $ from 'jquery';


class SearchableCharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  getServerData() {
    return $.get(`http://gateway.marvel.com/v1/public/characters?name=${this.state.userInput}&apikey=2e264257579ec772309983d87144e044`, function (response) {
      this.setState({
        image: response.data.results[0].thumbnail.path,
        name: response.data.results[0].name,


      });
    }.bind(this));
  }

  getCharacterInfo(characterId) {
    return characters.filter(character => character.id === characterId)[0];
  }

  handleSubmit(event){
    event.preventDefault();
    this.getServerData()
    .then(response => this.getCharacterInfo(response.data.results[0].id))
    .then(character => this.props.sendToBattle(character));
  }

  render() {
    return(
      <div className="hero">
        
        <SearchBox
          matchedCharacters={this.state.matchedCharacters}
          searchBoxIsVisible={this.props.searchBoxIsVisible}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        <Character
          name={this.state.name}
          image={this.state.image}/>
      </div>
    )
  }
}

export default SearchableCharacterContainer
