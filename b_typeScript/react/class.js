
class CartJS {
  constructor(user) {
    this.user = user;
    this.store = {};
  }
  put(id, product) {
    this.store[id] = product;
  }
  get(id) {
    return this.store[id];
  }
}

const cartJohnJS = new CartJS({ name: 'John'});
const cartJayJS = new CartJS({ name: 'Jay'});