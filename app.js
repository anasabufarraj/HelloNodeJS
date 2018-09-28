// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'pug');
app.use('/static', express.static('./static'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello Pug' });
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
