// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/profile/:id', (req, res) => {
  // TODO: get this from database
  var userData = {
    id: req.params.id,
    firstName: 'John',
    lastName: 'Peterson',
    age: 23,
    active: true,
    interests: ['Design', 'Web', 'Acting']
  };
  res.render('profile', { data: userData });
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/404.html`);
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
