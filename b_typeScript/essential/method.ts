
const obj = {
  name: "joy",
  age: 20,

  // 메소드 기술하는 방법
  getFamilyName: function () {
    return 'jeong';
  },

  getLastName: () => 'jeong',

  getBloodType() {
    return 'o';
  },
}

// 속성 (데이터)
obj.name;
obj.age;
// 메소드 (함수) 호출
obj.getFamilyName();
obj.getBloodType();

obj.age = 200;
obj.age = -500; // 문제가 되는 속성을 막고 싶을때 (getter, setter)

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  // setter
  set bloodType(btype: string) {
    if (btype == 'A' || btype == 'B' || btype == 'O' || btype == 'AB') {
      this._bloodType = btype;
    }
  }
  
  // getter
  get bloodType() {
    return `${this._bloodType} 형`
  }
}

const p1 = new Person("O");

p1.bloodType;

p1.bloodType = 'C'


// 구성 (추가 삭제)
// obj.bloodType; //자바스크립트는 가능
delete obj.age;

type MyObject = {
  name?: string;
  age: number;
  readonly blood: string;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
}


const obj2: MyObject = {
  name: "joy",
  age: 20,
  blood: 'o',

  // 메소드 기술하는 방법
  getFamilyName: function () {
    return 'jeong';
  },

  getLastName: () => 'jeong',

  getBloodType() {
    return 'o';
  },
}

// 속성 삭제하고싶지 않을때 (타입 만들기)
delete obj2.age;

// 속성 삭제 가능 (optinal)
delete obj2.age;


// create (부모)

const myObj = Object.create(null, {
  name: {
    value: 'joy',
    // writable: true, // 변경가능 myObj.name = 'sad'
    writable: false, // readonly
    configurable: false, // delete 연산사 사용 불가
  }
});