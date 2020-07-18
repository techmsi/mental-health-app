// Component: Questions
import React, { Component } from 'react';

import { API_ENDPOINT } from 'Api/api-config';
import { ErrorMessage } from 'styles/Layout';

import { Spinner } from 'App/ui/dynamicRoutes';
import { QuestionsPage } from 'Questions/ui/dynamicRoutes';

class QuestionsList extends Component {
  state = {};

  componentDidMount() {
    const { questions } = this.props.questionnaire;
    const isLoaded = questions && questions.length > 0;

    if (!isLoaded) {
      this.loadList();
    }
  }

  loadList() {
    console.debug('No questions exist. Getting the list.');
    this.props.requestApiData(API_ENDPOINT.phq9);
  }

  render() {
    const { loading, error, questions: list = [] } = this.props.questionnaire;

    console.debug('QuestionsList Page', list.length);

    return (
      <>
        {loading ? <Spinner /> : <QuestionsPage list={list} {...this.props} />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
}

export default QuestionsList;
