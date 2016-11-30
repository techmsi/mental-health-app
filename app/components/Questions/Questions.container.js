/**
  * Component: QuestionView - Parent Component for Questions, Answers, & Score.
  *
  * - Patient Health QuestionView (PHQ-9)
  * - Diagnoses depression severity
  */

import React, { Component } from 'react';

// Redux wiring
import { connect } from 'react-redux';

// Components
import {
  Spinner,
  Question,
  UnansweredView,
  ScoreView,
  mapDispatchToPropsHelper,
  findById,
} from '../imports';

class QuestionView extends Component {
  constructor(props) {
    super(props);
    // Loading flag - loading

    this.state = {
      loading: false,
    };
  }
  componentWillMount() {
    this._loadData();
  }

  _renderItem(id = '1') {
    const { questionCount, questionnaire: { questions } } = this.props;

    const question = findById(questions, id);

    return (id <= questionCount) ?
      <Question key={ `question-${question.id}` } { ...this.props } { ...question } />
    : <p className="questionnaire__notfound">Sorry, we cannot find question #{id}.</p>;
  }

  _loadData() {
    const { searchQuestions } = this.props;

    this.setState({ loading: true });

    // `searchQuestions` comes in from mapDispatchToProps
    searchQuestions().then(() => {
      // When completed set search flag to false
      this.setState({ loading: false });
    })
    .catch(err => { console.error('No results'); });
  }

  render() {
    const { loading } = this.state;
    const { questionnaire: { title, subtitle, questions }, params: { questionId }, interpretScore, unanswered } = this.props;
    const allAnswered = unanswered.length === 0;

    if (allAnswered && questions) {
      interpretScore();
    }

    return (
      <div>
        { loading ?
          <Spinner />
        :
          <div className="questionnaire">
            <h1>{ title }</h1>
            { !allAnswered && <h2>{ subtitle }</h2> }

            { !allAnswered && unanswered &&
            <UnansweredView />
          }

            { allAnswered && questions && questionId ?
              <ScoreView { ...this.props } />
            :
            this._renderItem(questionId)
          }
          </div>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionnaire: state.questionnaire,
  unanswered: state.unanswered,
  questionCount: state.questionCount,
});

// Connect to redux
export default connect(mapStateToProps, mapDispatchToPropsHelper)(QuestionView);
