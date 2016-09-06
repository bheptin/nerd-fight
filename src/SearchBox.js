import React, { Component } from 'react';
import characters from './data/characters.js';

class SearchBox extends Component {
  render() {
    var suggestions = characters.map(character => <option value={character.name}>{character.name}</option>);
    return(
      <form
        onSubmit={this.props.handleSubmit}
        className={this.props.searchBoxIsVisible ? "visible" : "hidden"}>
        <input type="text" name="character" placeholder="input character ID..." onChange={this.props.handleChange} list="suggestions"/>
        <datalist id="suggestions">{suggestions}</datalist>
        <button>Search</button>
      </form>
    )
  }
}

export default SearchBox
