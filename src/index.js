import React from 'react';
import { render, hydrate } from 'react-dom';

import { Application } from './App/ui/Application';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Application />, rootElement);
} else {
  render(<Application />, rootElement);
}
