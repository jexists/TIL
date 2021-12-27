// json 
// -> 데이터 주고 받기 (서버 <-> 웹앱/브라우저)
// -> 데이터를 교환하기 위한 용도도 개발된 용도
// -> 자바스크립트 객체랑 유사 / 문자열
// -> 
const jsString = {
  name: 'joy',
  age: 28,
  booldType: 'O',
}

// JSON 만드는 방법
// key => "" 
// 문자열 => "" (''사용불가)
// 마지막 콤마 없애기
// 데이터 타입/value종류 제한적 (문자열, 숫자, 배열, 객체, boolean)
// 함수 지원 x
// json 문제 생길 경우 parse 할경우 종료..
const jsonString = {
  "name": "joy",
  "age": 28,
  "booldType": "O"
}

// json -> 객체 변환
const myJson = JSON.parse(jsonString);

console.log(myJson.name);

// 객체 -> json 변환
console.log(JSON.stringify(myJson));


// json.parse 할때 발생하는 오류 예외 처리
// -> try-catch 구문 사용

try {
  // 에러
  const myJsonError = JSON.parse(jsString);
  console.log(myJsonError.name);

  // 정상
  const myJson = JSON.parse(jsonString);
  console.log(myJson.name);
} catch (e) {
  console.log('다시한번 시도해주세요.');
}