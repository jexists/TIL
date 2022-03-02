
// 관심사 별로 코드 나누기
// -> 코드 중복
const list1 = () => {
  let html = '<ul>';
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].outOfStock === false) {
      html += '<li>';
      html += `<h2>${cart[i].name}</h2>`
      html += `<div>${cart[i].price}</div>`
      html += `<div>${cart[i].quantity}</div>`
      html += '</li>';
    } else {
      html += '<li>';
      html += `<h2>${cart[i].name} (품절)</h2>`
      html += `<div class="strike">${cart[i].price}</div>`
      html += `<div class="strike">${cart[i].quantity}</div>`
      html += '</li>';
    }
  }
  html += '</ul>'

  let totalCount = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].outOfStock === false) {
      totalCount += cart[i].quantity;
    }
  }
  html += `<h2>전체수량: ${totalCount}상자</h2>`

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].outOfStock === false) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
  }
  html += `<h2>전체가격: ${totalPrice}원</h2>`

  return `
      ${html}
  `;
}

const app1 = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
    <h1>장바구니</h1>
    ${list()}
  `;
}