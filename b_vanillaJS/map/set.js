// set

const mySet = new Set();
mySet.add(1);
console.log(mySet); // Set { 1 }
mySet.add(2);
console.log(mySet); // Set { 1, 2 }
mySet.entries();
console.log(mySet.entries()); // [Set Entries] { [ 1, 1 ], [ 2, 2 ] }
console.log(mySet.values()); // [Set Iterator] { 1, 2 }

console.log('----');

let myItem = mySet.entries();
console.log(myItem); // [Set Entries] { [ 1, 1 ], [ 2, 2 ] }
console.log(myItem.next().value); // [ 1, 1 ]
console.log(myItem.next().value); // [ 2, 2 ]

console.log('------');
// [1, 3, 4, 2, 7, 5, 6, 8, 10, 9]
function getRandom() {
  return Math.round(Math.random(10) * 10);
}
console.log(getRandom());

const mySetOne = new Set();

while (mySetOne.size < 10) {
  mySetOne.add(getRandom())
}
console.log(mySetOne);
console.log([...mySetOne]);