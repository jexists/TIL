interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

abstract class Shape {
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = "Shape";
  // 읽기 전용 만들기
  protected _borderWidth: number;
  private action: string;

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
