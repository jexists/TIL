
// 클래스 
// -> ES6 처음 등장
// -> 함수를 통해 만들었다면 클래스 통해서 만들고 있음.

interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class CartTS {
  // 아무런 접근제한자를 적지 않았을 경우 => public
  protected user: User;
  private store: object;
  constructor(user: User) {
    this.user = user;
    this.store = {};
  }
  put(id: string, product: Product) {
    this.get(id); // 밖에서는 접근 못하지만 안에서는 가능
    this.store[id] = product;
  }
  private get(id: string) {
    return this.store[id];
  }
}

const cartJohnTS = new CartTS({ name: 'John' });
const cartJayTS = new CartTS({ name: 'Jay' });

//CartTS의 인스턴스는 속성과 행위를 가지고 있는다.
// cartJohnTS.get //(private 속성은 접근 못함)
cartJohnTS.put
// cartJohnTS.store //(private 속성은 접근 못함)
// cartJohnTS.user //(protected 속성은 접근 못함)

// 접근제한자
// public
// private
// protected

// 상속 (private / protected의 차이)
class PromotionCart extends CartTS {
  addPromotion() {
    this.user; //(protected 속성은 접근 가능)
    // this.store //(private 속성은 접근 못함)
  }
}

const cart2 = new PromotionCart({ name: 'john' });

cart2.addPromotion();
cart2.put; // CartTS에 정의 된 것도 사용 가능



class CartConstructorError {
  private store: object;
  constructor(user: User) {
    this.user = user; // ERROR 
    this.store = {};
  }
}

// 생성자의 매개변수를 접근제한자를같이 쓸 경우 속성을 정의하고 할당까지 한번에 처리 가능
class CartConstructor {
  constructor(
    public user: User,
    private store: object
  ) {
  }

  put(id: string, product: Product) {
    this.user
    this.store
  }
}