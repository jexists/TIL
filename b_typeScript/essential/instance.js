// 인스턴스
// -> 구체적으로 현실화된 객체

// 만드는 방법
// 1. 함수를 이용해서 만드는 방법 (고전)
// 2. 클래스 문법을 이용해서 만드는 방법 (현대)



// 1. 함수를 이용해서 만드는 방법 / 고전
function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

CartV1.prototype.getNewId = function() {
  this.currentId++;
  return this.currentId;
  // this. 새로 만들어진 인스턴스 객체 (동적 바인딩으로 속성 추가)
};

CartV1.creatItem = function(name, price) {
  return {
    name, price
  };
};

CartV1.prototype.addItem = function(item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function(item) {
  this.cart = [];
  this.currentId = 0;
}

const shoppingCartV1 = new CartV1();
// -> 새로 만들어진 인스턴스 객체 반환

// 암묵적인 매커니즘 작동 (3가지)
// -> 1. 빈객체 하나 생성 
// -> 2.5. prototype this객체 _prototype_에 할당
// -> 2. 인스턴스 객체를 만들고 함수 종료되면 자동으로 this 리턴


shoppingCartV1.addItem(CartV1.creatItem('수박', 8000));
shoppingCartV1.addItem(CartV1.creatItem('사과', 12000));
shoppingCartV1.addItem(CartV1.creatItem('두부', 2000));

console.log(shoppingCartV1.cart);



// 2. 클래스 문법을 이용해서 만드는 방법 (타입스크립트) /현대
