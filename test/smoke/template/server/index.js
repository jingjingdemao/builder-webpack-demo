if (typeof window === 'undefined') {
  global.window = {};
  global.self = {};
}
const express = require('express');
const { renderToString } = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const SSR = require('../dist/search-server.js');
const data = require('./data.json');

const dataStr = JSON.stringify(data);
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
const renderHtml = (str) =>
  template
    .replace('<!--HTML_PLACEHODLER -->', `${str}`)
    .replace('<!--DATA_PLACEHODLER -->', `<script>window._initail_data=${dataStr}</script>`);

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));

  app.get('/search', (req, res) => {
    console.log('/search');
    const html = renderHtml(renderToString(SSR));
    console.log(html, 'html');
    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.log('Server start');
  });
};

server(process.env.PORT || 3000);
