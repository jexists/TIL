// set
// map
// weakSet
// weakMap

const myMap = new Map();
let obj = { a: 1 }
myMap.set(obj, 'this is my obj');
console.log(myMap); // Map { { a: 1 } => 'this is my obj' }
function sample() {
  console.log('hi');
}

myMap.set(sample, 'this is a function');

console.log(myMap); // Map {{ a: 1 } => 'this is my obj',[Function: sample] => 'this is a function'}

const calculator = {
  add: (a, b) => a + b,
  minus: (a, b) => a - b
}

const myMapOne = new Map();
myMapOne.set(calculator.add, 'this is a add function');
myMapOne.set(calculator.minus, 'this is a minus function');

function getDescription(_funcName) {
  return myMapOne.get(_funcName)
}
console.log(getDescription(calculator.add)); // this is a add function
console.log(getDescription(calculator.minus)); // this is a minus function