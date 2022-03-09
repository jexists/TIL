

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