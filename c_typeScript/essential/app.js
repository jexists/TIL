
function addAgeJS(age) {
  return age + 1;

  // 체크해야하는 코드를 만들어야한다.
  // if (typeof age === 'number') {
  //   return age + 1;
  // } else {
  //   return 
  //   throw 'ERROR/!'
  // }
}

let ageJS = addAgeJS(30);
console.log(ageJS); // 30

ageJS = addAgeJS('30');
console.log(ageJS); // 301

let z = 10;
const y = 200;

z = 200;
z = 300;

// y = 400; ERROR

const obj = {
  height: 200,
  width: 300
}
// object는 속성은 변경가능
obj.height = 300;
// obj = 100; ERROR

// 식 = 값 ; 하나의 값을 수렴, 세미콜론으로 끝난다. 
// 문 != 값 (for문, if문 ) 

// 구조분해  es6
const colors = ['red', 'yellow', 'black'];
// const red = color[0];
// const yellow = color[1];
// const black = color[2];
yellow;
const [red, yellow, black] = colors

const [, yellow] = colors;

const Colors = {
  blue: 'blue',
  green: 'green',
  white: 'white'
}
const { white, green } = Colors;

let a = 10;
let b = '10';

if (a == b) {

}

if (a === b) {

}

// 삼항연산자
if (a == b) {
  a = 0;
} else {
  a = 1;
}
a = (a == b) ? 0 : 1;

// typeof (어떤 유형의 값인가?)

let a = 10;
let b = a;

b = 20;
// b의 값을 바꾼다고 해도 a의 값에 영향이 없다.
// 기본 값은 복사가 된다. (기본형 데이터 타입은 실제값이 들어간다. )

console.log('done');

// 참조 => 객체는 참조된다.
// 객체형 타입은 객체가 들어가는 것이 아니라 위치값만 저장
// 언제나 하나만 존재한다.
let o = {
  isLoading: false,
}

let o2 = o;

o2.isLoading = true;

// 객체인 경우에는 함수에서도 참조된다.
function foo(o) {
  o.isLoading = true;
}

foo(o);
console.log('done2');

