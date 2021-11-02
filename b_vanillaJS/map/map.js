// map
// 자바스크립트 내장객체 
// key값 저장하기위해 object사용하지 말고 new Map()사용

// ==========object

let user = {};
user.name = 'jexists';
user.email = 'jexists@gmail.com';
user.phone = '010-1111-2222';
// user.1 = //object에는 숫자를 넣을수 없다
user[1] = '숫자로 키를 적는 방법'
const key = 'ID';
user.ID = 'abc';
user[key] = '나중에 받는 값일 경우';

console.log('name obj', user.name);

let guestArr = [
  { name: 'A', city: 'Seoul' },
  { name: 'B', city: 'Jeju' },
  { name: 'C', city: 'Daegu' },
  { name: 'D', city: 'Busan' },
  { name: 'E', city: 'Busan' },
  { name: 'F', city: 'Seoul' },
  { name: 'G', city: 'Seoul' },
]

if (3) console.log('3'); // 조건식 true '3'
if (1) console.log('1'); // 조건식 true '1'
if (0) console.log('0'); // 조건식 X
if (undefined) console.log('undefined'); // 조건식 X
if ({}) console.log('{}'); // 조건식 true '{}'
console.log(oGuest['a']); // 'undefined'

let oGuest = {};
guestArr.forEach(item => {
  if (!oGuest[item.city]) {
    oGuest[item.city] = [];
  }
  oGuest[item.city].push(item);
})

console.log(oGuest);

// ==========MAP

let userMap = new Map();
// map : key 와 value가 있다
// map 생성 후 넣기
userMap.set('name', 'jexists');
userMap.set('email', 'jexists@gmail.com');
userMap.set('phone', '010-1111-2222');
userMap.set(1, 'map에서는 숫자입력가능')
userMap.set(key, '나중에 받는 값일 경우')
// key에 모든것이 올수있다(obj, function, num, etc)

// map 받기
console.log('name map', userMap.get('name'));

let mapGuest = new Map();
guestArr.forEach(item => {
  // has는 정확히 true/false를 return해주기때문에 정확/명확/빠르다.
  if (!mapGuest.has(item.city)) {
    mapGuest.set(item.city, []);
  }
  mapGuest.get(item.city).push(item)
});
console.log(mapGuest);