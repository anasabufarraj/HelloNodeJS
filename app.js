// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', name => {
  rl.setPrompt(`Hello ${name}, what year you've been born? `);
  rl.prompt();
  rl.on('line', age => {
    rl.setPrompt(`Hey ${name}, you are ${2018 - age} years old.\n`);
    rl.prompt();
    rl.on('close', () => {
      console.log(`Good Bye...`);
    });
    rl.close();
  });
});
