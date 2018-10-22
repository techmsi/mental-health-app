import React, { Component } from 'react';

class ScoreBox extends Component {
  render () {
    const { score } = this.props;

    return <h3>{score} pts</h3>;
  }
}

export default ScoreBox;
