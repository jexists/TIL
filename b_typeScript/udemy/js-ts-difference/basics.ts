// primitives: number, string, boolean
// more complex types: arrays, objects
// function types, parameters

// primitives ==========================
let age: number;
// let age: number = 12; // 바로 할당도 가능
// let age = 12; // 바로 할당할때 타입

age = 12.1;
age = 12;
// age = '12'; // type ERROR

let username: string;
username = 'joy';

let bool: boolean;
bool = true;

let box: null;
// box = 'null'; // type ERROR
// box = 12; // type ERROR

// more complex types ==========================

let hobbies: string[];
hobbies = ['tv', 'sleep']
// hobbies = ['tv', 'sleep', 12] // type ERROR

// let person; // any type
// let person: any; // -> javascript 사용하는거랑 같음

let person: {
  name: string;
  age: number;
};

person = {
  name: 'joy',
  age: 30
}

// person = {
//   isEmpty: true,
// }

let people: {
  name: string;
  age: number;
}[];