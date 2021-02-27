import { Suspense } from 'react';

import ErrorBoundary from 'App/ui/ErrorBoundary';
export const AppWithBoundary = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<span>Loading ...</span>}>{children}</Suspense>
  </ErrorBoundary>
);
