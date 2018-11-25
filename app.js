// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const fs = require('fs');
const zlib = require('zlib');
const src = `${__dirname}/data/`;
const gzip = zlib.createGzip();

// creating read, write, and compress piped streams
const readStream = fs.createReadStream(`${src}read.txt`);
const writeStream = fs.createWriteStream(`${src}read.txt.gz`); // or .gz

readStream.pipe(gzip).pipe(writeStream);
