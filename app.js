// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 3000;

// routes
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/search', (req, res) => {
  res.sendFile(`${__dirname}/search.html`);
});

app.get('/profile', (req, res) => {
  res.sendFile(`${__dirname}/profile.html`);
});

app.get('/profile/:id', (req, res) => {
  res.send(`My Profile: ${req.params.id}`);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/404.html`);
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}`);
