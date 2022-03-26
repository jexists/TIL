

import { Item } from "./cart_map";

const validateItem = (item: Item) => {
  if (item.quantity < 1) {
    throw new Error("상품은 반드시 한 개 이상 담아야 합니다.");
  } else if (item.quantity > 10) {
    throw new Error("한 번에 10개를 초과하여 구매할 수 없습니다.");
  }
}

type ArrayItem = Array<Item>

const stockItem = (item: Item): string => {
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

const renderItem = (item: Item): string => {
  try {
    validateItem(item)
    if (item.outOfStock) {
      return outOfStockItem(item);
    } else {
      return stockItem(item);
    }
  } catch (e) {
    return `
    <li style="color:red">
      <h2>${item.name}</h2>
      <div>${e}</div>
    </li>
    `
  }
}


const totalCalculator = (list: ArrayItem, getValue: (item: Item) => number) => {
  return list
    .filter(item => {
      try {
        validateItem(item)
        item.outOfStock === false
      } catch(e) {
        return false;
      }
    })
    .map(getValue)
    .reduce((total, value) => total + value, 0);
}

const totalCount = (list: ArrayItem): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체수량: ${totalCount}상자</h2>`
}

const totalPrice = (list: ArrayItem): string => {
  const totalPrice = totalCalculator(list, (item) => item.price);
  return `<h2>전체가격: ${totalPrice}원</h2>`
}

// const list1 = (list: Array<Item>) => {
//   return `
//     <ul>
//      ${list
//       .map(item)
//       .reduce((tags, tag) => tags + tag, '')}
//     </ul>
//   `
// }

const app1 = document.getElementById("app");
if (app1 != null) {
  app1.innerHTML = `
    <h1>장바구니</h1>
    // ${list1(cart)}
    // ${totalCount(cart)}
    // ${totalPrice(cart)}
  `;
}