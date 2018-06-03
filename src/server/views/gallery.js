import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { renderStatic } from 'glamor/server';
import ReactDOMServer from 'react-dom/server';

import App from '../../App';
import rootReducer from '../../redux/modules/reducer';

// Create a new Redux store instance
const store = createStore(rootReducer);

// Redux initial state
const preloadedState = store.getState();

const { html, css } = renderStatic(() => ReactDOMServer.renderToString(
  <Provider store={store}>
    <App />
  </Provider>));

export default () => (`
    <html>
      <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
      <style>${css}</style>
      <style>
        * {
            box-sizing: border-box
        }

        body{
            margin: 0;
            background-color: #FAFAFA;
            font-family: "Lato","Helvetica Neue",Helvetica,Arial,sans-serif !important;
        }
      </style>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
        <script src="https://cdn.ravenjs.com/3.22.3/raven.min.js" crossorigin="anonymous"></script>
        <script src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
);
