// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const hostname = 'localhost';
const port = 3000;

var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
