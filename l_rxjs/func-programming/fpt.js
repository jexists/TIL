// 함수형프로그래밍
const array = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   const item = array[i];
//   array[i] = item + 1;
// }
console.log(array); // [ 0, 1, 2, 3, 4, 5 ]

// 선언적 프로그래밍 -> 순수 함수
const newArray = array.map(v => v + 1);
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

let counter = 0;
function add(a, b) {
  // conter++;
  // return a + b + counter;
  return a + b;
}

// console.log(add(1, 2)); // 4
// console.log(add(1, 2)); // 5
// console.log(add(1, 2)); // 6

console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3

// 고차함수

function greaterThen(n) {
  return function (m) {
    return m > n;
  }
}

const greaterThen10 = greaterThen(10);

const result1 = greaterThen(11);
console.log(result1); // [Function]
const result2 = greaterThen(9);
console.log(result2); // [Function]

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) action(array[i]);
}

forEach(["hello", "higher", "order"], console.log);
// hello
// higher
// order
const array2 = [0, 1, 2, 3, 4, 5];

// const newArray2 = array2.map(v => {
//   return v * 2;
// })
const newArray2 = array2.map(v => v * 2);
const filterArray = array2.filter(v => v % 2 === 0);
const sum = array.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(array2); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArray2); // [ 0, 2, 4, 6, 8, 10 ]
console.log(filterArray); // [ 0, 2, 4 ]
console.log(sum); // 15


// 매소드 체이닝 
// array.map(v => v * 2)
//   .filter(v => v % 2 == 0)
//   .reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);

const double = v => v * 2;
const isEven = v => v % 2 == 0;
const sumUp = (prev, curr) => prev + curr;
const final = array2.map(double)
  .filter(isEven)
  .reduce(sumUp);
console.log(array2); // [ 0, 1, 2, 3, 4, 5 ]
console.log(final); // 30


// 커링

const add2 = (a, b, c) => a + b + c;
const curriedAdd = a => b => c => a + b + c;
add2(1, 2, 3);
curriedAdd(1)(2)(3);
console.log(add2(1, 2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6

// loadash
import _ from 'loadash';
// package type = module
const curriedAdd2 = _.curry(add);
console.log(curriedAdd2(1)(2)(3)); // 6

const addVAT = (rate, amout) => amout * (1 + rate / 100);
const addVATCurried = _.curry(addVAT);
const addNationalVAT = addVATCurried(5);
const addStateVAT = addVATCurried(10);

console.log(addNationalVAT(1000));
console.log(addNationalVAT(2000));
console.log(addStateVAT(1000));
console.log(addStateVAT(2000));