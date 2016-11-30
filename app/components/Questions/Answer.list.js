// Component: Answer
import React, { Component } from 'react';

// Redux wiring
import { connect } from 'react-redux';

class Answer extends Component {

  _onAnswer(points){
    const { questionId, answerQuestion, interpretScore } = this.props;

    answerQuestion(points, questionId);
    interpretScore();
  }

  render() {
    const { choices, questionId, answerQuestion, answered } = this.props;

    const AnswersList = choices.map((answer)=> {
      return (<label key={answer.label} className="answer">
        <input type="radio"
          name={`answer-${questionId}`}
          value={answer.points}
          disabled={answered}
          onChange={()=> this._onAnswer(answer.points)}
           />
        <span>{answer.label}</span>
      </label>)
    });

    return (
      <div className="answers">
      {AnswersList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    choices: state.questionnaire.choices
  }
}

// Connect to redux
export default connect(mapStateToProps)(Answer);
