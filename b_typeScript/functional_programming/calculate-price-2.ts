// 토마토 7000
// 오렌지 15000
// 사과 10000


export function priceOfTomato() {
  return 7000;
}
export function priceOfOrange() {
  return 15000;
}
export function priceOfApple() {
  return 10000;
}

export function list1() {
  // 토마토, 오렌지, 사과 1 상자
  return priceOfTomato() + priceOfOrange() + priceOfApple()
}

export function list2() {
  // 토마토 2 상자
  return priceOfTomato() + priceOfTomato();
}

export function list3() {
  // 토마토 100 상자
  return priceOfTomato() * 100;
}

function getPrice(name: string) {
  if (name === 'tomato') {
    return 7000;
  } else if (name === 'orange') {
    return 15000;
  } else if (name === 'apple') {
    return 10000;
  }
}

const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000
}

const isEven = {
  tomato: true,
  orange: true,
  apple: false
}

const isEvenFn = (str: string) => str.length % 2 === 0;

export function getTotalPrice() {
  return list1();
}