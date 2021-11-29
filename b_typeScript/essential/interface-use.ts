import * as allTypes from './interface';

const foo: allTypes.FooFunction = function() {
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