import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import configureStore from './redux/configureStore';

import App from './App';

const store = configureStore();

// Sentry Integration
Raven.config('https://e1c732c7baf0475b8004adeb79000372@sentry.io/1214301', {
  release: '0-0-0',
  environment: 'development-test',
}).install();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);

