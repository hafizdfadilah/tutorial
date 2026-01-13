

const names = require('./3-modules2');
const sayHi = require('./3-modules3');
const items = require('./3-modules4');
const person = require('./3-modules4');
console.log(person)
const one = person.singlePerson.name
const itemone = items.items[0];
const itemtwo = items.items[1];

sayHi(one)
sayHi(itemone)
sayHi(itemtwo)
sayHi('Alice');
sayHi(names.john);
sayHi(names.peter);