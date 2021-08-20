console.log("22장 this");

// this: 객체

console.log("전역 this", this);

//
var Person = function (nam) {
  this.name = name;
  this.say = function () {
    console.log(this); // Person {name: "haha", say: f}
 
    setTimeout(() => {
      console.log(this); // Person {name: "haha"}
      console.log(this.name + '입니다.'); 
    }, 100)
  };
};
var me = new Person('haha'); //haha입니다.
console.log('---------');

var btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
	console.log(this); //#btn
});


// this 값 => 함수 호출하는 방법에 의해 결정
function square(num) {
  console.log("일반 함수 this", this);
  //1. 일반함수호출: 전역 객체 window
  //'use strict' 사용할 경우 //undefined!
  return num * num;
}
square(2);
// ex)-----------------------
var age = 100;
function foo() {
  var age = 99;
  bar();
}

function bar() {
  console.log(this.age);
}

foo(); //100

///////////////////////////////////////////////////

const add = (num) => {
  console.log("Arrow 함수 this", this);
  return num + num;
}
add(2);

///////////////////////////////////////////////////

const person = {
  name: 'Lee',
  getName() {
    console.log('매소드 내부 함수', this);
    //2. 매소드 호출(프로퍼티 값 할당 호출): 매서드 호출한 객체 obj
    return this.name;
  }
};

console.log(person.getName());

///////////////////////////////////////////////////

function Person(name) {
  this.name = name;
  console.log('생성자 함수', this);
  //3. 생성자 함수 호출(new 연산자): 생성자 함수가 생성한 인스턴스
};

const you = new Person('lee');

///////////////////////////////////////////////////

// Funtion.prototype.apply
// Funtion.prototype.call
// Funtion.prototype.bind
// 4. 매서드에 의한 간접 호출: 첫번째 인수로 전달한 객체



