
// 입력된값을 그대로 return 하는 함수: Identity (id)

// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => {
  return n;
}
// 문자열를 그대로 돌려주는 함수
const idString = (s: string) => {
  return s;
}
// Boolean를 그대로 돌려주는 함수
const idBoolean = (b: boolean) => {
  return b;
}

// => 타입은 달라도 구현부분(입력값을 그대로 돌려주는 구현) 동일. 
// 제네릭
// 구현을 동일한 함수가 있다면 중복을 일반화해서 한개로 만든다. 
// 타입을 매개화 시켜서 같은 동작 만듬
// 타입에 대한 중복 처리

// 어떤 타입의 값이라도 그대로 돌려주는 함수 
const id = <T>(x: T) => {
  return x;
}
// 함수의 타입을 일반화 시켜서 만듬

type T1 = Array<string>


