// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const express = require('express');
const fs = require('fs');

const app = express();
const hostname = 'localhost';
const port = 3000;
const readStream = {
  home: fs.createReadStream('./index.html'),
  search: fs.createReadStream('./search.html'),
  docs: fs.createReadStream('./docs.html'),
  noMatch: fs.createReadStream('./noMatch.html')
  // express.js automatically figure content-type
};

// define routes
app.get('/', (req, res) => {
  readStream.home.pipe(res);
});

app.get('/search', (req, res) => {
  readStream.search.pipe(res);
});

app.get('/docs', (req, res) => {
  readStream.docs.pipe(res);
});

app.get('/404', (req, res) => {
  readStream.noMatch.pipe(res);
});

// listen to server
app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
