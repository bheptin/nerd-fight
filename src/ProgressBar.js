import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {currentWounds: 0};
  }

  getCurrentWounds(relevantProps) {
    if (relevantProps.playerName === relevantProps.currentPlay.attackerName) {
      this.setState({currentWounds: relevantProps.currentPlay.attackerWounds});
    } else {
      this.setState({currentWounds: relevantProps.currentPlay.defenderWounds});
    }
  }

  componentWillMount() {
    this.getCurrentWounds(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getCurrentWounds(nextProps);
  }

  render() {
    return (
      <progress
        value={this.state.currentWounds} max="100">70 %</progress>
    );
  }
}

export default ProgressBar
