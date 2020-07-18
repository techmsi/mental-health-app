import asyncComponent from 'App/ui/withLazy';

export const ChoiceListConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "ChoiceListConnect" */ 'Choices/connect-Choices'
    ),
  'ChoiceListConnect'
);

export const ChoiceList = asyncComponent(() =>
  import(/* webpackChunkName: "ChoiceList" */ 'Choices/ui/ChoiceList')
);
