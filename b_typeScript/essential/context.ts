// 컨텍스트

const person = {
  name: 'joy',
  age: 20,
  getAge() {
    return this.age;
  }
}

person.age; // 20
person.getAge(); // 20 접근o

const age = person.getAge;

age(); // undefined 접근X
// 호출되는 맥락 상 소유자가 안보임 (person이 없음)
// this가 뭔지 몰라서 연결 안됨

// 컨텍스트
// 1. execution 실행 컨텍스트 (기본 컨텍스트)
// 실행: 실제로 어떤 객체의 메소드에 접근을 한다는 뜻 (호출)
// -> 호출하는 맥락
// this => 맥락을 가르키는 지시어 (소유자)
// 2. lexical


// 교정하는 방법
// 함수를 호출하는 시점, 호출하는 방법중에 call, apply 메소드로 컨텍스트 객체 지정 가능

age.call(person); // 20


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  getAge() {
    return this.age;
  }
}

const p1 = new Person('joy', 30);

p1.getAge(); // 30

const myAge = p1.getAge;

myAge(); // undefined

myAge.call(p1); //30 (매번 call쓰기 귀찮음)

// 클래스를 만들때 컨텍스트 고정하는 방법 -> bind

class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
    this.getAge = this.getAge.bind(this);
    // 컨텍스트 교정
  }

  getAge() {
    return this.age;
  }

  getName = () => this.name;
}

const p2 = new Person2('joy', 30);

p2.getAge(); // 30

const myAge2 = p2.getAge;

myAge2(); // 30


// 더 편리한 방법 lexical 컨텍스트
// -> 어휘 맥락
// 코드로 보는 맥락 자체에서 this를 알수있는 언제나 고정되는 됨
// 애로우 함수로 메소드 만들면 고정됨
// 어휘적 공간으로 
// this가 다른 객체로 연결시키는걸 바꿀수 없음
p2.getName(); // joy

const myName = p2.getName;

myName(); // joy