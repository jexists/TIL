console.log('es6');

// 1. shorthand property names (객체초기자)
//key, value가 동일할 때는 생략 가능

const jexists1 = {
  myName: 'joy',
  age: '27',
}

const myName = 'joy';
const age = '27';

const jexists2 = {
  myName: myName,
  age: age,
}
//key, value가 동일할 때는 생략 가능

const jexists3 = {
  myName,
  age
}
console.log(jexists1, jexists2, jexists3);

// 2. Destructuring Assignment

//object
const student = {
  nickname: 'joy',
  level: 1,
}
//옛날 접근방식
// const nickname = student.nickname;
// const level = student.level;

//지금 접근방식
const {nickname, level} = student;
console.log(nickname, level);

//지금 접근방식: 이름 변경
const { nickname: username, level: stat } = student;
console.log(username, stat);

//array
const animals = ['dog', 'cat'];

//옛날 접근방식
// const first = animals[0];
// const second = animals[1];
// console.log(first, second);

//지금 접근방식
const [first, second] = animals;
console.log(first, second);

// 3. Spread Syntax
//다 복사하는것이 아니라 주소의 참조값만 복사
//원래의 obj을 변경시 모든 것 다 변경

const obj1 = {key: 'key1'};
const obj2 = {key: 'key2'};
const array = [obj1, obj2];

//array copy (map, forㄷEach 이용가능)
const arrayCopy = [...array] //...array로 가능
console.log(array, arrayCopy);

//카피 후 추가
const arrayCopyAdd = [...array, {key: 'key3'}]
console.log(array, arrayCopy, arrayCopyAdd);

//주소값만 카피해왔기때문에 obj1키를 변경해도 다 변경됨
obj1.key = 'newkey';
console.log(array, arrayCopy, arrayCopyAdd);

//object copy
const obj3 = {...obj1};
console.log(obj3);

//array concatenation (concat)
const fruits1 = ['apple', 'mango'];
const fruits2 = ['melon', 'kiwi'];
const fruits = [...fruits1, ...fruits2];
console.log(fruits); // concat

//object concatenation
const dog1 = {dog1 : 'puppy'};
const dog2 = {dog2 : 'cutty'};
const dogs = {...dog1, ...dog2};
console.log(dogs);

//key가 동일할 경우
const cat1 = {cat: 'puppy'};
const cat2 = {cat: 'cutty'};
const cats = {...cat1, ...cat2};
console.log(cats); //마지막에 있는것이 첫번째것을 덮어쓴다.

// 4. default parameters
function printMsg(message) {
  if(message == null) {
    message = 'default message'
  }
  console.log(message);
}
printMsg('hello');
printMsg();

//초기값 지정
function printMessage(message = 'default message') {
  console.log(message);
}
printMessage('hello');
printMessage();

// 5. Ternary Operator
const isCat = true;

let component;
if (isCat) {
  component = 'cat'
} else {
  component = 'dog'
}
console.log(component);

const component2 = isCat ? 'cat' : 'dog';
console.log(component2);

// 6. Template Literals
const month = 'may';
const date = '11'

console.log(
  'today is ' + month + ' ' + date + '.'
);
console.log(
  `today is ${month} ${date}.`
);