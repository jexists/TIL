interface Props {
  name: string
  [key: string]: string;
  // [key: number]: string;
  // string 또는 number만 가능
}

const p: Props = {
  name: 'hello', //name은 무조건 있어야한다.
  a: 'd',
  b: 'e',
  // c: 3 ERROR 
  0: 'd',
  1: 'b'
}

// p[0]
// p.name
// p.dlafasefa

let keys: keyof Props;

interface User {
  name: string;
  age: number;
  hello(msg: string): void;
}

let keysOfUser: keyof User;

keysOfUser = "age"

let helloMethod: User["hello"];

helloMethod = function(msg: string) {

}

// helloMethod = "d" ERROR