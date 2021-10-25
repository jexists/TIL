


// 변수의 이름에 따라 데이터를 설명 가능
let age = 10;

let x = 10;
// 타입스크립트가 설명하는 데이터의 유형 설명
let weight: number = 80;

// 훨씬 표현이 다양하게  type을 정할 수 있다. 
type Centimeter = number;
let height: Centimeter = 178;

let color: string = 'orange';
type RainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
let color1: RainbowColor = 'orange';
// let color2: RainbowColor = 'black'; ERROR

// 식별자
// 코드내의 변수, 함수 혹은 속성을 식별하는 문자열
// 대소문자 구별, 유니코드 사용($,_,숫자,유니코드 구성가능)
// let 1num = 10; // 숫자시작X
// let nu m = 10; // 공백 포함X
// 길이제한없음

let num = 10;
function setNum() { }

const o = {
  age: 10,
  // 식별자를 문자열로 변환하는 방법은 없지만 어떤 경우는 문자열을 분석해 식별자로 사용가능
  ['myName']: '김',
  ['my Name']: '김',
  ['123myName']: '김'
}
o.myName;
// o.my Name; //식별자 규칙에 어긋나서 사용불가
// o.123myName; //식별자 규칙에 어긋나서 사용불가
o['123myName']; //이렇게 사용 가능

// 상수는 대문자로 짓는것을 선호
const AGE = 10;

// 카멜케이스 / 스네이크케이스

