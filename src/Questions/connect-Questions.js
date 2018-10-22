import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { questionsActions } from 'Questions/actions-Questions';
import UiQuestionsList from 'Questions/ui/QuestionsList';
import UiQuestion from 'Questions/ui/Question';

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    requestApiData: questionsActions.pending
  },
  dispatch
);

const mapStateToProps = ({questionnaire, unanswered, questionCount}) => ({
  questionnaire,
  unanswered,
questionCount});

export const QuestionsListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiQuestionsList);

export const QuestionConnect = connect(
  mapStateToProps
)(UiQuestion);
