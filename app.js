// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const fs = require('fs');

// delete files asynchronously
fs.unlink('./write.txt', err => {
  if (err) throw err;
  console.log('File was deleted');
});
