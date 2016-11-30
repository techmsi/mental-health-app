// Component: Answer
import React, { Component } from 'react';

// Stylesheets
require('../../scss/spinner.scss');

class Spinner extends Component {
  render() {
    return (
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default Spinner;
