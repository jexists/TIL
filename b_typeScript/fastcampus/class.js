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

const cartJoy = new CartJS({ name: 'joy' });
const cartHappy = new CartJS({ name: 'happy' });