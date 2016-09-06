import React, { Component } from 'react';

class Character extends Component {
  render() {
    let imageElement;
    if (this.props.image) {
      imageElement = <img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/>;
    } else {
      imageElement = null;
    }
    return (
      <div class="Character">
        <p>Name: {this.props.name}</p>
        {imageElement}

      </div>
      );
    }
}

export default Character
