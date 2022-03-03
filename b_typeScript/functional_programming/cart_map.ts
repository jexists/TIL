
// 고차 함수
// 다른 함수를 매개 변수로 받는 함수 
export class Item {
  name: string;
  price: number;
  quantity: number;
  outOfStock: boolean;
}
export const cart = []

const stockItem = (item: Item): string => {
  // let html = ''
  // html += '<li>';
  // html += `<h2>${item.name}</h2>`
  // html += `<div>${item.price}</div>`
  // html += `<div>${item.quantity}</div>`
  // html += '</li>';
  return `<li>
    <h2>${item.name}</h2>
    <div>${item.price}</div>
    <div>${item.quantity}</div>
  </li>`
}

const outOfStockItem = (item: Item): string => `
  <li class="gray">  
    <h2>${item.name} (품절)</h2>
    <div class="strike">${item.price}</div>
    <div class="strike">${item.quantity}</div>
  </li>
`;

const item = (item: Item): string => {
  if (item.outOfStock) {
    return outOfStockItem(item);
  } else {
    return stockItem(item);
  }
}

const totalCalculator = (list: Array<Item>, getValue: (item: Item) => number) => {
  // 전체 목록중 재고가 있는 상품만 getValue 실행하고 값 더하기
  const result: Array<number> = [];
  // list.map((item) => {
  //   if (item.outOfStock === false) {
  //     result.push(getValue(item));
  //   }
  // })
  // return result.reduce((total, value) => total + value)
  // map 함수에 return 값이 없을 경우 forEach 사용 추천
  list.forEach((item) => {
    if (item.outOfStock === false) {
      result.push(getValue(item));
    }
  })
  return result.reduce((total, value) => total + value)


  // return list
  // // 1. 재고가 있는 상품 분류 (filter)
  // .filter(item => item.outOfStock === false)
  // // 2. 분류된 상품들에 대해서 getValue 실행 (map)
  // .map(getValue)
  // // 3. getValue가 실행한 값 모두 더하기  (reduce)
  // .reduce((total, value) => total + value, 0);

  // let total = 0;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].outOfStock === false) {
  //     total += getValue(list[i])
  //   }
  // }
  // return total;
}

const totalCount = (list: Array<Item>): string => {
  // let totalCount = 0;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].outOfStock === false) {
  //     totalCount += list[i].quantity;
  //   }
  // }
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체수량: ${totalCount}상자</h2>`
}

const totalPrice = (list: Array<Item>): string => {
  // let totalPrice = 0;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].outOfStock === false) {
  //     totalPrice += list[i].price * list[i].quantity;
  //   }
  // }
  const totalPrice = totalCalculator(list, (item) => item.price);
  return `<h2>전체가격: ${totalPrice}원</h2>`
}

// 관심사 별로 코드 나누기
// -> 코드 중복
const list1 = (list: Array<Item>) => {
  return `
    <ul>
     ${list
      // 1. 목록에 있는 아이템 태그로 변경 (map)
      .map(item)
      // 2. 태그의 목록을 모두 하나의 문자열로 연결 (reduce)
      .reduce((tags, tag) => tags + tag, '')}
    </ul>
  `

  // let html = '';
  // for (let i = 0; i < list.length; i++) {
  //   html += item(list[i]);
  // }
  // html += '</ul>'
  // return `${html}`;
}

const app1 = document.getElementById("app");
if (app1 != null) {
  app1.innerHTML = `
    <h1>장바구니</h1>
    ${list1(cart)}
    ${totalCount(cart)}
    ${totalPrice(cart)}
  `;
}