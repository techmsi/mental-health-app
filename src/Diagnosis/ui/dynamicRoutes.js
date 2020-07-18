import asyncComponent from 'App/ui/withLazy';
export const ScoreHeader = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "ScoreHeader" */ 'Diagnosis/ui/DiagnosisScoreDetails'
    ),
  'ScoreHeader'
);
export const ScoreDetails = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "ScoreDetails" */ 'Diagnosis/ui/DiagnosisScoreDetails'
    ),
  'ScoreDetails'
);
export const ScoreExplanation = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "ScoreExplanation" */ 'Diagnosis/ui/DiagnosisScore'
    ),
  'ScoreExplanation'
);
export const ScoreTotal = asyncComponent(
  () =>
    import(/* webpackChunkName: "ScoreTotal" */ 'Diagnosis/ui/DiagnosisScore'),
  'ScoreTotal'
);
export const ScoreRange = asyncComponent(
  () =>
    import(/* webpackChunkName: "ScoreRange" */ 'Diagnosis/ui/DiagnosisScore'),
  'ScoreRange'
);

export const DiagnosisPage = asyncComponent(() =>
  import(/* webpackChunkName: "DiagnosisPage" */ 'Diagnosis/ui/DiagnosisPage')
);
