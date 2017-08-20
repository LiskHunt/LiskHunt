import './styles/core/margins.css';
import 'bulma/css/bulma.css';
import './styles/app.css';

import registerServiceWorker from './lib/registerServiceWorker';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/router/Navigation';
render(
  <Router>
    <Navigation/>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
