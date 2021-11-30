import * as allTypes from './interface';

const foo: allTypes.FooFunction = function () {
  return '아무 쓸모없는 함수';
}

const iUser: allTypes.IUser = {
  id: 1,
  name: '빌 게이츠',
  email: 'bill@ms.com',
  receiveInfo: false,
  active: 'Y'
}

const tUser: allTypes.TUser = {
  id: 1,
  name: '빌 게이츠',
  email: 'bill@ms.com',
  receiveInfo: false,
  active: 'Y'
}

const IUserProfile: allTypes.TUserProfile[] = [];

const iStyle: allTypes.IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  // height: '100',
  height: 100,
}

const getApi: allTypes.IGetApi = (url, search = '') => {
  return new Promise(resolve => resolve('ok'));
}

class Rect implements allTypes.IRect {
  // private id: number; (interface private 사용불가)
  // interface는 항상 public 공개된 기술만 기술한다.
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
function createDefaultRect(cstor: allTypes.IRectConstructor) {
  return new cstor(0,0,100,20);
}

const rect1 = new Rect(0,0,100,20);
const rect2 = createDefaultRect(Rect)

// 타입알리아스
// -> 데이터 표현할 때 
// 인터페이스
// -> 매소드와 같은 구체적인 행위까지 포함된 객체 표현
// -> 데이터를 포괄하는 객체를 묘사하는 경우 
// 클래스
// -> 데이터와 행위 포괄 (인터페이스 사용)