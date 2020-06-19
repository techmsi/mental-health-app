import React from 'react';
import ErrorBoundary from 'App/ui/ErrorBoundary';
export const AppWithBoundary = ({ children }) => (
  <ErrorBoundary>
    <React.Suspense fallback={<span>Loading ...</span>}>
      {children}
    </React.Suspense>
  </ErrorBoundary>
);
