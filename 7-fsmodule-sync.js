const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/third.txt', `this is sparta ${first}, ${second}`,{flag:"a"});
const readthird = readFileSync('./content/third.txt', 'utf8');
console.log(readthird);
console.log('done with this task');
console.log('starting the next one');