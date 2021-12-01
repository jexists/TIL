
// 함수 
// (문)
function myFn() {
  // 계산로직
  // 값
  return 100;
}

// 호출방식
const result = myFn();

// 인자

function myFn1(x) {
  return x + 100;
}
const result1 = myFn1(10);

// 익명 함수: 반드시 변수에 넣어야 사용가능 (식)
const myFnV2 = function () {
  return 100;
};

myFnV2();


//즉시 실행함수 -> 단 한번만 실행하는 코드
(function () {
  console.log('즉시 실행 함수 실행');
})();