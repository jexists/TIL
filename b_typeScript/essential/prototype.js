// 자바스크립트 => 프로토타입 기반 언어

const c1 = {
  name: 'c1',
  color: 'red',
}

const c2 = {
  name: 'c2',
  width: 300,
}

const c3 = {
  name: 'c3',
  height: 100,
}


console.log(c1);
console.log(c2);
console.log(c3);

// c1.__proto__ = c2;
// console.log(c1.width); // 300
// // -> c2 width

c1.__proto__ = c3;
console.log(c1.width); // undefind
c3.__proto__ = c2;
console.log(c1.width); // 300
// -> c2 width

// c1.__proto__

// console.log(c1.toString()); // '[object Object]'
// -> 프로토 타입 체이닝 매커니즘
// 모든 객체에는 __proto__ 속성
// toString => object가 가지고 있는 메소드 
// 자바스크립트는 속성을 접근하게되면 c1이 가지고 있는 메소드 찾아보고 없으면 c1이 가지고 있는 __proto__가 가리키고 있는 객체에 있는지 찾아봄 있으면 동작 없으면 undefined

// 함수의 프로토타입 매카니즘
// 함수로 객체를 만들수 있는 방법중에 인스턴스 new 연산자 통해 인스턴스 객체

function Foo(name) {
  this.name = name;
  this.__proto__ = Foo.prototype;
}

const f = new Foo("joy");

console.log(f.name);
Foo.prototype; //객체

Foo.prototype.lastName = 'hahaha'

console.log(f.lastName); // 'hahaha'