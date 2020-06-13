import React from 'react';
import { render } from 'react-dom';

import { Application } from './App/ui/Application';

import 'styles/reset.css';
import 'styles/styles.css';

const rootElement = document.getElementById('root');
render(<Application />, rootElement);
