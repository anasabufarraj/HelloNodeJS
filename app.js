// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const express = require('express');

const app = express();
app.set('view engine', 'ejs'); // set 'ejs' for express

const hostname = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/profile', (req, res) => {
  res.sendFile(`${__dirname}/profile.html`);
});

app.get('/profile/:id', (req, res) => {
  // TODO: query user data from database
  let data = {
    id: req.params.id,
    firstName: 'John',
    lastName: 'Peterson',
    age: 23,
    active: true,
    interests: ['Design', 'Web', 'Acting']
  };
  res.render('profile', { data: data }); // <= views/profile.ejs
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/404.html`);
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
