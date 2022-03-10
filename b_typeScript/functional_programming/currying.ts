

import * as O from "./cart_option";

// Currying 커링
//  -> 인자가 여러개인 함수를 인자가 하나인 함수들의 함수열


// 운송장
// const delivery = (present: string, from: string, to: string) => {
//   return `
//    보내는 물건: ${present}
//    보내는 사람: ${from}
//    받는 사람: ${to}
//   `;
// };

// 커링
// const delivery = (present: string) => (from: string) => (to: string) => {
//   return `
//    보내는 물건: ${present}
//    보내는 사람: ${from}
//    받는 사람: ${to}
//   `;
// };

const delivery = (present: string, from: string, to: string) => {
  return `
   보내는 물건: ${present}
   보내는 사람: ${from}
   받는 사람: ${to}
  `;
};

const curry3 = <A, B, C, D>(f: (a: A, b: B, c: C) => D) => (a: A) => (b: B) => (c: C) => f(a, b, c);

const curriedDelivery = curry3(delivery);

export const main = () => {
  console.clear();

  const momsPresent2 = curriedDelivery("상품권")("엄마");
  console.log(momsPresent2("딸"));

}


export const curry2 = <A, B, C>(f: (a: A, b: B) => C) => (a: A) => (b: B): C => f(a, b);

export const flip = <A, B, C>(f: (a: A, b: B) => C) => (b: B, a: A): C => f(a, b);

// Array<A> == A[]
// map :: (Array<A>, (A => B)) => Array<B>

export const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value));
  }
  return result;
};

export const main3 = () => {
  const numbers = [1, 2, 3];
  const isEven = (x: number) => x % 2 === 0;

  map(numbers, isEven);

  // curriedMap :: Array<A> => ((A => B) => Array<B>)
  const curriedMap = curry2(map);
  curriedMap(numbers)(isEven);

  // Array<A>.map :: (A => B) => Array<B>
  // map :: Array<A> ~> (A => B) => Array<B>
  numbers.map(isEven);

  // map_ :: (A => B) => (Array<A> => Array<B>)
  const map_ = curry2(flip(map));
  // map_(isEven)(numbers);
  // isEven :: number => boolean
  // mapIsEven :: Array<number> => Array<boolean>
  const mapIsEven = map_(isEven);

  isEven(42);
  isEven(7);
  mapIsEven([42]);

  const omap = curry2(flip(O.map));
  //optionIsEven :: Option<number> => Option<boolean>
  const optionIsEven = omap(isEven);

  optionIsEven(O.some(42));
  optionIsEven(O.none());
}
