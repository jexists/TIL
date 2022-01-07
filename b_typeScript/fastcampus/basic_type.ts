// static types
// -> set during development

// dynamic types
// -> resolved at runtime

// JavaScript 
function addJS(n1, n2) {
  // javascript는 런타임에서 체크,
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!');
  }
  return n1 + n2;
}
const resultJS = addJS(39, 28);

//  Typescript
function addTS(n1, n2: number) {
  // typescript는 코드상에서 체크 가능
  return n1 + n2;
}

const resultTS = addTS(39, 28);

// ecmascript
// -> boolean, number, string, null, undefined, symbol (6개 기본형)
// -> array (object형)
// -> any, void, never, unknow, enum (타입스크립트)
// -> tuple (object형)