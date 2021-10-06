interface User {
  name: string;
}

interface Product {
  id: string;
  price: number
}

class Cart {
  // user: User; // 작성 안할경우 public
  protected user: User; 
  // class 내부에서만 접근가능 (extend에서 가능)
  private store: object; // class 내부에서만 접근가능
  constructor(user: User) {
    this.user = user;
    this.store = {};
  }
  put(id: string, product: Product) {
    this.store[id] = product;
    // this.get();
  }
  private get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user // protected는 접근 가능
    // this.store //접근 불가
  }
}

const cartJoy = new Cart({ name: 'joy' });
// cartJoy. //속성과 메소드를 볼수 있음
// cartJoy.store // 접근불가..
const cartHappy = new Cart({ name: 'happy' });