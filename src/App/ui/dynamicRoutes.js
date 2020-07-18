import asyncComponent from 'App/ui/withLazy';
export const Menu = asyncComponent(() =>
  import(
    /* webpackChunkName: "MenuBar" */
    /* webpackPreload: true */
    'App/ui/Menu'
  )
);
export const AppRoutes = asyncComponent(() =>
  import(/* webpackChunkName: "AppRoutes" */ 'App/ui/routes-App')
);
export const Welcome = asyncComponent(() =>
  import(/* webpackChunkName: "WelcomeRoute" */ 'Welcome')
);
export const TherapistRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "TherapistsRoute" */
    'Therapists/ui/routes-Therapist'
  )
);
export const QuestionsRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "QuestionsRoute" */ 'Questions/ui/routes-Questions'
  )
);
export const DiagnosisRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "DiagnosisRoute" */ 'Diagnosis/ui/routes-Diagnosis'
  )
);

export const StyleGuide = asyncComponent(() =>
  import(/* webpackChunkName: "StyleGuide" */ 'styles/StyleGuide')
);

export const Spinner = asyncComponent(() =>
  import(/* webpackChunkName: "Spinner" */ 'Spinner/')
);
