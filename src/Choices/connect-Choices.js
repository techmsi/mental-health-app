import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { answerQuestion } from 'Choices/actions-Choices';

import UiChoiceList from 'Choices/ui/ChoiceList';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      answerQuestion
    },
    dispatch
  );

const mapStateToProps = ({ questionnaire: { choices } }) => ({
  choices
});

// Connect to redux
export const ChoiceListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiChoiceList);
