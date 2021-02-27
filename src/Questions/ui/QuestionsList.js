// Component: Questions
import React, { Component } from 'react';

import { ErrorMessage } from 'styles/Layout';
import QuestionsPage from 'Questions/ui/QuestionsPage';
import Spinner from 'Spinner/';

import { API_ENDPOINT } from 'Api/api-config';

class QuestionsList extends Component {
  state = {};

  componentDidMount() {
    if (!this.props.questionnaire.hasOwnProperty('questions')) {
      console.log('No questions exist.');
      this.props.requestApiData(API_ENDPOINT.phq9);
    }
  }

  render() {
    const { loading, error, questions: list = [] } = this.props.questionnaire;

    console.info('QuestionsList Page', list.length);

    return (
      <div>
        {loading ? <Spinner /> : <QuestionsPage list={list} {...this.props} />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

export default QuestionsList;
