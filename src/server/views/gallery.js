import React from 'react';

import { renderStatic } from 'glamor/server';
import ReactDOMServer from 'react-dom/server';

import App from '../../App';

const { html, css } = renderStatic(() => ReactDOMServer.renderToString(<App />));

export default () => (`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="https://cdn.ravenjs.com/3.22.3/raven.min.js" crossorigin="anonymous"></script>
        <script src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
);
