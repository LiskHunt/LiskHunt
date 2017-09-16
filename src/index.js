import './styles/core/margins.css';
import 'bulma/css/bulma.css';
import './styles/app.css';

import registerServiceWorker from './lib/registerServiceWorker';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Navigation from './components/router/Navigation';

const store = createStore(
    reducer
)

render(
    <Provider store={store}>
      <Router>
        <Navigation/>
      </Router>
    </Provider>,
document.getElementById('root'));

registerServiceWorker();

