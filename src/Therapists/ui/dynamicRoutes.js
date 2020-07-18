import asyncComponent from 'App/ui/asyncComponent';
export const TherapistSortControls = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistSortControls" */ 'Therapists/ui/TherapistSortControls'
    ),
  'TherapistSortControls'
);
export const TherapistCardDetails = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardDetails" */ 'Therapists/ui/TherapistCardDetails'
    ),
  'TherapistCardDetails'
);
export const LazyImage = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardImageLazy" */ 'Therapists/ui/LazyImage'
    ),
  'LazyImage'
);
export const TherapistCardImage = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardImage" */ 'Therapists/ui/TherapistCardImage'
    ),
  'TherapistCardImage'
);
export const TherapistBio = asyncComponent(
  () =>
    import(/* webpackChunkName: "TherapistBio" */ 'Therapists/ui/TherapistBio'),
  'TherapistBio'
);

export const TherapistCardSummary = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardSummary" */ 'Therapists/ui/TherapistCardSummary'
    ),
  'TherapistCardSummary'
);

export const TherapistMenu = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistMenu" */ 'Therapists/ui/TherapistMenu'
    ),
  'TherapistMenu'
);
export const TherapistChosen = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistChosen" */ 'Therapists/ui/TherapistChosen'
    ),
  'TherapistChosen'
);
export const Therapist = asyncComponent(() =>
  import(/* webpackChunkName: "TherapistCardRoute" */ 'Therapists/ui/Therapist')
);
export const TherapistList = asyncComponent(() =>
  import(/* webpackChunkName: "TherapistList" */ 'Therapists/ui/TherapistList')
);

export const TherapistListConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistListConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistListConnect'
);

export const TherapistChosenConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistChosenConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistChosenConnect'
);

export const TherapistConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistConnect'
);
