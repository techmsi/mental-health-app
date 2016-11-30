// Component: Answer
import React, { Component } from 'react';

// Redux wiring
import { connect } from 'react-redux';

class Answer extends Component {

  _onAnswer(points) {
    const { questionId, answerQuestion } = this.props;

    answerQuestion(points, questionId);
  }

  render() {
    const { choices, questionId, answered } = this.props;

    const AnswersList = choices.map((answer, index) => (<label key={ answer.label } htmlFor={ `answer-${questionId}-${index}` } className="answer">
      <input
        type="radio"
        id={ `answer-${questionId}-${index}` }
        name={ `answer-${questionId}` }
        value={ answer.points }
        disabled={ answered }
        onChange={ () => this._onAnswer(answer.points) }
      />
      <span>{answer.label}</span>
    </label>));

    return (
      <div className="answers">
        {AnswersList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  choices: state.questionnaire.choices,
});

// Connect to redux
export default connect(mapStateToProps)(Answer);
