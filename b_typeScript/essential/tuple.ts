// tuple 투플: 배열을 확장한 기능
// 원소 갯수를 제약함....
const address: [number, string, string] = [14025, '서울시', '서대문구'];
// const addressError: [number, string, string] = ['14025', '서울시', '서대문구'];

let [zipcode, address1] = address;

zipcode = '12345';

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
  ['헨리 8tp', '세익스피어', 1664],
  ['헨리 8tp', '세익스피어', 1664]
]

BookData.push(['a', 'b', 23])
// BookData.push([1, 'b', 23]) //ERROR

function getArrayOne(): any[] {
  return [14025, '서울시', '서대문구']
}

type Address = [number, string, string]

function getArrayTwo(): Address {
  return [14025, '서울시', '서대문구']
}

let address2 = getArrayTwo()[2];

// address2 = 12 //ERROR