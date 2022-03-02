const cart = [];

const list = () => {
  let html = '<ul>';
  let totalCount = 0;
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    html += '<li>';
    html += `<h2>${cart[i].name}</h2>`
    html += `<div>${cart[i].price}</div>`
    html += `<div>${cart[i].quantity}</div>`
    html += '</li>';

    totalCount += cart[i].quantity;
    totalPrice += cart[i].price * cart[i].quantity;
  }
  html += '</ul>'

  html += `<h2>전체수량: ${totalCount}상자</h2>`
  html += `<h2>전체가격: ${totalPrice}원</h2>`

  return `
      ${html}
  `;
}

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
    <h1>장바구니</h1>
    ${list()}
  `;
}