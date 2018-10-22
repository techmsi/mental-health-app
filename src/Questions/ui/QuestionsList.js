// Component: Questions
import React, { Component } from 'react';

import { ErrorMessage } from 'styles/Layout';
import QuestionsPage from 'Questions/ui/QuestionsPage';
import Spinner from 'Spinner/';

const API_ENDPOINT = `http://localhost:3001/api/phq9`;

class QuestionsList extends Component {
  state = {};

  componentDidMount() {
    if(!this.props.questionnaire.hasOwnProperty('questions')) {
      console.log('No questions exist.');
      this.props.requestApiData(API_ENDPOINT);
    }
  }

  render() {
    const {
      loading,
      error,
      questions: list = []
    } = this.props.questionnaire;
    
    console.info('QuestionsList Page', list.length);

    return (
      <div>
        {loading ? (
          <Spinner />
        ) : (
        <QuestionsPage list={list} {...this.props} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

export default QuestionsList;
