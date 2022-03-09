

// partial application 부분적용
// -> 인자가 여러개인 함수의 전체 인자 중에 인자 몇개를 고정하여 더 작은 개수의 인자를 가지는 또 다른 함수 생성하는 프로세스 (커링이랑 비슷)

// 부분함수
// -> 매개변수로 가능한 값들 중에 일부 경우에만 반환 값이 있는 함수


// // 운송장
// const delivery = (present: string, from: string, to: string) => {
//   return `
//    보내는 물건: ${present}
//    보내는 사람: ${from}
//    받는 사람: ${to}
//   `;
// };

// export const main = () => {
//   console.clear();

//   console.log(delivery("상품권", "엄마", "딸"));
//   console.log(delivery("상품권", "엄마", "아들"));
// }

// 운송장 (parial)
const delivery = (present: string, from: string) => (to: string) => {
  return `
   보내는 물건: ${present}
   보내는 사람: ${from}
   받는 사람: ${to}
  `;
};

export const main = () => {
  console.clear();

  const momsPresent = delivery("상품권", "엄마")
  console.log(momsPresent("딸"));
  console.log(momsPresent("아들"));
}