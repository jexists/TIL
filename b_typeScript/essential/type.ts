import { v4 } from 'uuid';

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
}

// const makeObject = (): UniqObject => ({
//   id: '123456'
// })
const makeObject = (): UniqObject => ({
  id: v4(),
})

console.log(makeObject());
console.log(makeObject());

// 필요한 라이브러리가 있는데 타입스크립트가 지원하지 않을 경우 
// 1. 모듈에 들어가서 타입을 확인하고 직접 타이핑 
// 2. @types 사용
// -> 예) @types/uuid

// npm install uuid
// npm install @types/uuid