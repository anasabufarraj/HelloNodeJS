// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const fs = require('fs');

(function readWrite(src, dest, data) {
  fs.readFileSync(src, 'utf-8');
  fs.writeFileSync(dest, data);
  console.log('Successfully written');
})(`${__dirname}/data/read.txt`, `${__dirname}/data/write.txt`, 'hello');
