import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { questionsActions } from 'Questions/actions-Questions';
import { Question, QuestionsList } from 'Questions/ui/dynamicRoutes';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestApiData: questionsActions.pending
    },
    dispatch
  );

const mapStateToProps = ({ questionnaire, unanswered, questionCount }) => ({
  questionnaire,
  unanswered,
  questionCount
});

export const QuestionsListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);

export const QuestionConnect = connect(mapStateToProps)(Question);
