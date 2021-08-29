// 함수형프로그래밍
const array = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   const item = array[i];
//   array[i] = item + 1;
// }
console.log(array);

// 선언적 프로그래밍 -> 순수 함수
const newArray = array.map(v => v + 1);
console.log(newArray);

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
  return function(m) {
    return m > n;
  }
}

const greaterThen10 = greaterThen(10);

const result = greaterThen(11);
console.log(result);
const result = greaterThen(9);
console.log(result);

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) action(array[i]);
}

forEach(["hello", "higher", "order"], console.log);