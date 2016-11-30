// Component: Question
import React, { Component } from 'react';

// Components
import { Answer } from '../imports';

class Question extends Component {

  render() {
    const { id, label, answered } = this.props;
    const answeredStyle = answered ? ' answered' : '';

    return (
      <section className="question">
        <header className={ `question__label${answeredStyle}` }>
          <span>{id}. </span>
          {label}
        </header>

        <Answer { ...this.props } questionId={ id } />

        <footer className="question__footer">
          <span className={ `question__footer--indicator${answeredStyle}` }></span>
          <span className="question__footer--number">{id}</span>
        </footer>
      </section>
    );
  }
}

export default Question;
