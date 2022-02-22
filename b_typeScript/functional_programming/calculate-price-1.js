// 토마토 7000
// 오렌지 15000
// 사과 10000

// export let totalPrice = 0;
// totalPrice += 7000;
// totalPrice += 15000;
// totalPrice += 10000;
// totalPrice += 7000;
// totalPrice += 7000;

export let totalPrice = 0;

export function addTomato() {
  totalPrice += 7000;
}
export function addOrange() {
  totalPrice += 15000;
}
export function addApple() {
  totalPrice += 10000;
}

export function list1() {
  // 토마토, 오렌지, 사과 1 상자
  addTomato();
  addOrange();
  addApple();
}

export function list2() {
  // 토마토 2 상자
  addTomato();
  addTomato();
}

export function list3() {
  // 오렌지 100 상자
  // -> 그냥 입력
  // addOrange();
  // addOrange();
  // addOrange(); 
  // ...

  // -> for, while
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
}

// 전역변수 부수효과 