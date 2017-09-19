import './styles/core/margins.css';
import 'bulma/css/bulma.css';
import './styles/app.css';

import registerServiceWorker from './lib/registerServiceWorker';

import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import Navigation from './components/router/Navigation';

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Navigation/>
      </ConnectedRouter>
    </Provider>,
    target);

registerServiceWorker();

