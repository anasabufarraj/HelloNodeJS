// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run(
  {
    collection: require('./sample-collection.json'),
    reporters: 'cli'
  },
  function(err) {
    if (err) {
      throw err;
    }
    console.log('collection run complete!');
  }
);
