import 'preact/debug';
import React from 'react';
import { render, hydrate } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { Application } from './App/ui/Application';

import 'styles/reset.css';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Application />, rootElement);
} else {
  render(<Application />, rootElement);
}

serviceWorker.register();
