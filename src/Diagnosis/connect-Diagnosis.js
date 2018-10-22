import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { diagnosisActions } from 'Diagnosis/actions-Diagnosis';
import UiDiagnosisPage from 'Diagnosis/ui/DiagnosisPage';

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    requestApiData: diagnosisActions.pending
  },
  dispatch
);

const mapStateToProps = ({score, questionnaire: { outOfScore }, diagnosis}) => ({
  score,
  outOfScore,
diagnosis});

// Connect to redux
export const DiagnosisConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiDiagnosisPage);
