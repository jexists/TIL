interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

abstract class Shape {
  public static MIN_BORDER_WIDTH = 0;
  // public instance 객체에 그냥 사용
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = "Shape";
  // readonly 읽기 전용 만들기
  protected _borderWidth: number;
  // protected 외부에는 공개 안되지만 내부 자식클래스 확장 클래스에서 접근 할수 있는 요소 (외부 접근 불가) 상속받은 자식 클래스에서도 접근 가능
  private action!: string;
  // private 그 클래스 자체 안에서만 사용/동작가능 (상속받거나 부모 클래스에서 접근 불가) (외부 접근 불가)
  //! 값을 세팅하지 않아도 된다

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  abstract area: () => number;
  // 추상 메소드 추상클래스일경우 (실체적인 코드를 구현해라)
  // 상속받을때 꼭 사용해라

  set borderWidth(width: number) {
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }

}

// Shape 상속
// 부모로부터 물려받았지만 재정의 가능
// 자식에서 찾아보고 있으면 끝 없으면 부모에서 찾아서 사용
class Circle extends Shape {
  private _radius: number;
  // 보이지 않게 만들고 사용하고 getter setter 사용
  // 읽고 쓸수 있는데 외부로부터 값은 보호하고 싶을때 private로 만든후 외부에 getter나 혹은 setter로 사용 
  public name: string = "Circle";

  constructor(radius: number) {
    super(); //부모를 뜻하는 지시어 사용 (항상 반드시 호출)
    this._radius = radius;
  }
  area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
  private _width: number;
  private _height: number;

  constructor(width, height: number) {
    super();
    this._width = width;
    this._height = height;
  }
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
  area: () => number;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);


try {
  rect.borderWidth = 10;
} catch (e) {
  console.error(e);
}

// 클래스 설계도를 interface로 사용하겠다
// interface public만 취급
class MyContainer implements Container {
  tagName: string;
  className: string;
  private name: string;
  // 인터페이스에 private 혹 protected 속성 지금 x
  // 인터페이스에는 항상 public한 요소만 기술
  // private한 요소는 그냥 클래스에만 등장해서 사용하면 됨

  constructor(tagName, className: string) {
    this.tagName = tagName;
    this.className = className;
  } 

  getTagName = () => this.tagName;
  getClassName = () => this.className;
}

console.log('done');
