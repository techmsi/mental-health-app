import 'preact/debug';
import React from 'react';
import { render, hydrate } from 'react-dom';

import 'worker/fontLoad/host';
import 'worker/imageLoad/host';
import * as serviceWorker from 'worker/serviceWorker';
import { Application } from 'App/ui/Application';

import 'styles/reset.css';

const debugOff = process.env.NODE_ENV === 'production';
if (debugOff) {
  console.debug(process.env.NODE_ENV);
  console.debug = () => {};
}
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Application />, rootElement);
} else {
  render(<Application />, rootElement);
}

serviceWorker.register();
