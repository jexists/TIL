import { cart, Item } from "./cart_model";

const stockItem = (item: Item): string => {
  // return `<li>
  //   <h2>${item.name}</h2>
  //   <div>가격: ${item.price} (xx원 할인)</div>
  //   <div>수량: ${item.quantity}</div>
  // </li>`
  // <div>가격: ${item.price - item.discountPrice} ${saleText}</div>
  // -> error (optional이라서 undefined가 나올수 있음: NaN)
  let saleText = '';
  let discountPrice = 0;
  if (item.discountPrice !== undefined) {
    saleText = `(${item.discountPrice}원 할인)`
    discountPrice = item.discountPrice;
  }
  return `<li>
    <h2>${item.name}</h2>
    <div>가격: ${item.price - discountPrice} ${saleText}</div>
    <div>수량: ${item.quantity}</div>
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
  const result: Array<number> = [];
  list.forEach((item) => {
    if (item.outOfStock === false) {
      result.push(getValue(item));
    }
  })
  return result.reduce((total, value) => total + value)
}

const totalCount = (list: Array<Item>): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체수량: ${totalCount}상자</h2>`
}

const totalPrice = (list: Array<Item>): string => {
  const totalPrice = totalCalculator(list, (item) => item.price);

  const totalDiscountPrice = totalCalculator(list, (item) => {
    let discountPrice = 0;
    if (item.discountPrice !== undefined) {
      discountPrice = item.discountPrice
    }
    return discountPrice * item.quantity;
  })
  return `<h2>전체가격: ${totalPrice - totalDiscountPrice}원 (총xx원 할인)</h2>`
}


const list1 = (list: Array<Item>) => {
  return `
    <ul>
     ${list
      .map(item)
      .reduce((tags, tag) => tags + tag, '')}
    </ul>
  `

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