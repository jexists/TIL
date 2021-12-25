type User = {
  id: number;
  name: string;
}

type Address = {
  zipcode: number;
  address: string;
}

// 인자로 받은값을 그대로 리턴
function pipeOne(value: any): any {
  return value;
}

// 제네릭을 이용한 함수
// 함수명 뒤에 타입 명시 
// <T> 아직 확정되지 않는 의미 타입
function pipeTwo<T>(value: T): T {
  return value;
}

let p1 = pipeOne(10); // 10
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

// pipeTwo랑 같은 내용인데 애로우 함수 사용할경우F
const pipeObjectOne = <T>(obj: T): T => {
  return obj;
}

let po1 = pipeObjectOne({ id: 1, name: 'joy', zipcode: 50214 });
// 함수를 호출할때 타입 명시 (타입을 호출 순간에 확정 -> 확정되는 타이핑 범위를 확대)
let po2 = pipeObjectOne<User>({ id: 1, name: 'joy', zipcode: 50214 });

// 상태를 만들고 상태를 반환하는 클래스
class State<S, Config = {}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address, { active: boolean }>({
  zipcode: 50213,
  address: '서울시',
}, {
  active: true
});

const s1Data = s1.getState();

console.log(s1Data.address, s1Data.zipcode, s1.config.active);

// 제네릭 고급
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
getProperty(x, 'm'); 

// 제네릭 인터페이스
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'joy' };
let kv2: KeyPair<number, number> = { key: 1, value: 1234 };