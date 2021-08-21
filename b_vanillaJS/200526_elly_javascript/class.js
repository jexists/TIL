console.log('class 클래스');

//연관이 있는 데이터를 묶어 놓는 것
//속성 (field) + 행동 (method)
//데이타 클래스: data(field)만 있는 것

// class 
// - template 만드는 틀
// - declare once 한번만 선언
// - no data in 데이터는 없음 (정의만) 메모리 안올라감

// object (실제로 데이터 넣기)
// - instance of a class 새로운 인스턴스 생성
// - created many times 많이 만들수 있음
// - data in

'use strict';
// object-oriendted programming
// class: template
// object: instance of a class
// javascript class
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance (기존에 존재한 프로토타입을 기반으로 생겨난 문법)


// class declarations 선언

class Person {
  // 생성자 초기화
  constructor(name, age) {
    // 데이터 fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// object 생성
const jexists = new Person('jexists', 20);
console.log(jexists.name); // jexists
console.log(jexists.age); // 20
jexists.speak(); // jexists: hello!

// getter and setter
// - 클래스를 사용하는 사람이 잘못 사용해도 방어하기 위해 사용

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  /*
  get age() {
    return this.age;
  }
  
  set age(value) {
    this.age = value;
  }
  */ 
 // ERROR CODE: Maximum call stack size exceeded
 // 수정 코드:
 get age() {
   return this._age;
 }
 
 set age(value) {
  //  if (value < 0) {
  //    throw Error('age can not be negative');
  //  }
  //  this._age = value;
  this._age = value < 0 ? 0 : value;
 }
}
const user1 = new User('joy', 'kim', -1);
// console.log(user1.age); // -1 수정 전
console.log(user1.age); // 0

// Fields (public / private)
// -> 최신 브라우저 지원 x (바벨 이용)
class Experiment {
  publicField = 2; // 외부 접근 가능
  #privateField = 0; // 클래스 내부에서만 값 사용 가능
}
const experiment = new Experiment;
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// Static
// - 호출시 클래스이름으로 호출해야 함
class Article {
  static publisher = 'jexists';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // jexists
Article.printPublisher(); // jexists

// 상속 & 다양성
