


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