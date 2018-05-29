import React from 'react';

import { renderStatic } from 'glamor/server';
import ReactDOMServer from 'react-dom/server';

import App from '../../App';

const { html, css } = renderStatic(() => ReactDOMServer.renderToString(<App />));

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
        <script src="https://cdn.ravenjs.com/3.22.3/raven.min.js" crossorigin="anonymous"></script>
        <script src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
);
