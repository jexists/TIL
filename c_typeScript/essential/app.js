
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
  blue:'blue',
  green: 'green',
  white: 'white'
}
const {white, green} = Colors;