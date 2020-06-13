import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return children;
  }
}

export default ErrorBoundary;
