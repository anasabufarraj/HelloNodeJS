// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  const readStream_home = fs.createReadStream('./index.html');
  const readStream_search = fs.createReadStream('./search.html');
  const readStream_docs = fs.createReadStream('./docs.html');
  const readStream_404 = fs.createReadStream('./404.html');

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  switch (request.url) {
    case '/index':
      readStream_home.pipe(response);
      console.log(request.url);
      break;
    case '/search':
      readStream_search.pipe(response);
      console.log(request.url);
      break;
    case '/docs':
      readStream_docs.pipe(response);
      console.log(request.url);
      break;
    default:
      readStream_404.pipe(response);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
