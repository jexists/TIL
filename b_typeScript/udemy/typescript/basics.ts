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

// Type inference 타입 추론
let course = 'React - The complete'

// course = 123456;

// Union type (두개 이상 타입 가능)

let unionCourse: string | number = 'string';
unionCourse = 12345;

// Type Alias
// type definition
type Person = {
  name: string;
  age: number;
}

let student: Person;
let school: Person[];

// Functions & types

function add(a: number, b: number): string | number {
  return a + b;
}

// void: never return / return value
function print(value: any): void {
  console.log(value);
}

// Generics
// -> any type: first type locked
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1 ,2, 3]

updatedArray[0].split('');

// -> genric 변경
function insertAtBeginningGeneric<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArrayGeneric = [1, 2, 3];
const updatedArrayGeneric = insertAtBeginningGeneric(demoArrayGeneric, -1); // [-1, 1 ,2, 3]
// updatedArrayGeneric[0].split(''); // Type Error

const stringArray = ['a', 'b', 'c'];
const updatedStringArray = insertAtBeginningGeneric(stringArray, 'c'); // Type Error
// const updatedStringArray = insertAtBeginningGeneric(stringArray, -1); // Type Error
updatedStringArray[0].split('');

// class

class Student {
  // private -> inside
  // public -> default, inside & outside
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

// Short Notation
class StudentConstruct {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const myStudent = new Student('joy', 'jeong', 30, ['angular']);
myStudent.enroll('react');
// myStudent.courses // Error (Private)
myStudent.listCourses(); // 'angular', react
// myStudent.courses // 'angular', react

// interface -> object type definition

interface Human {
  firstName: string,
  age: number,
  greet: () => void;
}

type HumanType = {
  firstName: string,
  age: number,
  greet: () => void;
}

let joy: Human;

joy = {
  firstName: "Joy",
  age: 30,
  greet() {
    console.log('Hello');
  }
}

class Instructor implements Human {
  constructor(
    public firstName: string,
    public age: number
  ) {
  }
  greet() {
    console.log('Hello');
  }
}