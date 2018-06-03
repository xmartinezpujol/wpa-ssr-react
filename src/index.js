import React from 'react';
import { hydrate } from 'react-dom';


import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/configureStore';

import App from './App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

// Sentry Integration
Raven.config('https://e1c732c7baf0475b8004adeb79000372@sentry.io/1214301', {
  release: '0-0-0',
  environment: 'development-test',
}).install();

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);