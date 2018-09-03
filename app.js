// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

// ------------------------------------------
// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ------------------------------------------
// setTimeout(function() {
//   console.log('2s passed');
// }, 2000);

// ------------------------------------------
// var time = 0;
//
// var timer = setInterval(function() {
//   time += 1;
//   if (time === 5) {
//     clearInterval(timer);
//   }
//   console.log(`${time} second have passed`);
// }, 1000);

// ------------------------------------------
// console.log(__dirname);
// console.log(__filename);

// ------------------------------------------
// function callFunction(fun) {
//   return fun();
// }
//
// let sayHello = function() {
//   console.log('Hello');
// };
//
// callFunction(sayHello); // 'Hello'

// ------------------------------------------
const operations = require('./modules/_operations');

console.log(operations.count(['john', 'peter', 'robin']));
console.log(operations.add(5, 6));
