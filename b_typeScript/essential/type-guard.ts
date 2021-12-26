// 타입 가드

// 타입스크립트에서 2개 이상의 타입을 갖게 되는 경우가 있을 때 a라는 타입이 들어왔을때 작동될수 없는 코드에 대해서 경고를 해주거나 혹은 원천적으로 막을 수 있는 코드 테크닉 / 코딩 방식
// 컴파일 타임에 타입 가드
function doubleTypeFunction(a: number | string) {
  if (typeof a == 'string') {
    return a.replace('x', 'X');
  }
  // 코드 흐름까지 인지해서 경고해줌
  return a.replace('Y', 'y');
}

doubleTypeFunction(10);


function foo(a?: number | null) {
  if (a == null) return;

  console.log('display before');
  console.log(a?.valueOf());
  // ? 없는 상황이면 undefined으로 만들어라
  console.log('display after');
}

foo();

interface Foo {
  foo: string;
  common: string;
}

// 타입가드 문법 is
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({foo:'ok', common:'wow'})); //true
console.log(isFoo({foo:'ok', common:'wow', active: false})); //true 
// -> active가 없어도 실제로 타입가드에서 확인 불가능 (한계)
