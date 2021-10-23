
export interface Hello {
  text: string
}

export const user = {
  name: 'user1'
}

// export default class A {
//   a() {}
// }

type d =  Hello & {hi(): void}
export default d;

// export default function() {}
//-> 모듈에는 기본 내보내기가 여러개 있을 수 없다.