// 프로그래밍 도의 객체

function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
  return width * height;
}

class Circle {
  // 데이터
  #radius;
  // private 속성..

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }
  // 메소드
  area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

// 사용하는 쪽이 알려줘야할것이 많다
console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

// 데이터 행위 효과적으로 사용가능 
console.log(circle.area());
console.log(rect.area());