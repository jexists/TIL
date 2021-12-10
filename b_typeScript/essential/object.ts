type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string;
}

// 0.객체 리터럴(객체 생성표기법) 만든 객체
let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red'
}

// 1. 함수 이용해서 객체 만들기
// -> 틀과 데이터를 분리 (나중에 key 수정할때 편리하다)
function makeBox(
  // 객체 유형
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string
): Box {
  return {
    width: width,
    //key: value (key==value 같을때 형식 생략가능)
    height,
    borderRadius,
    backgroundColor
  }
}

// 데이터
makeBox(100, 100, 0, 'blue');

// 클래스를 이용한 객체 생성
class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  constructor(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string
  ) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor
  }
}

const boxShape = new Shape(10, 10, 0, 'blue');

// 어떤 클래스로 만든 객체인지? 확인 가능 (규격확인)
if (boxShape instanceof Shape) {

}

// 접근하는방법
box.borderWidth = 10;
box['className'] = 'box rounded';

// 자바스크립트에는 자동 추가 가능
// box.color = 'blue'
// 타입스크립트는 옵셔널로 추가 후 넣을 수 있음

// 속성삭제 (타입스크립트는 옵셔널말 삭제 가능)
delete box.backgroundColor; 

// 객체 복사하는 방법 
// 객체는 참조타입이기때문에 원본이 바뀌지 않는다.
const box1 = box;
// 이전 객체와 연결을 끊고 싶을때 (새로운객체 만들고싶을때)
// 1. assign 첫번째 인자로 준 객체에 두번째, 세번째, 네번째 가변 인자 받음 / 순서대로 첫번째 인자한테 덮어쓰기 함
// 최종적으로 주어진 객체 모두를 하나의 첫 번째 객체 안에다가 모두 다 결합 시킨 다음에 그 결합된 객체 리턴
// 어떤 객체에 다른 객체 속성 추가하고 싶은 경우 그 객체를 첫번째 인자를 두고 추가하고 싶은 객체를 뒤에 나열
// 새로운 객체를 만들 경우 첫번째 인자에 빈 객체를 두고 복사하고 싶은 객체 입력
const box2 = Object.assign({}, box); 
// 전개 연산자 사용 (새로운 속성 추가하고 싶은 경우 일반 객체 리터럴처럼 추가 )
const box4 = { ...box, borderRadius: 10 };
// 복사하고 싶은 객체를 문자로 만든 다음 다시 객체로 만듬  
const box3 = JSON.parse(JSON.stringify(box));