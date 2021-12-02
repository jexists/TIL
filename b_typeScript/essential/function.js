
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


// 함수를 호출하는 방법 3가지
// 괄호 ()
myFnV2();
// call 함수 사용 (함수인자)
myFnV2.call();
// apply 이용 호출 (함수인자)
myFnV2.apply();

//함수 이름이 맞으면 무조건 호출 (인자 상관없이)
//인자 안줄때, 인자를 더 많이 줄때 (가변인자)

function sum(a, b, c) {
  return a + b + c;
}
const abcSum = sum(10, 20, 30, 40, 50);

// 가변인자를 처리하는 방법: (문제)함수 정보를 알수없다.. 함수시그니처 표현 필요
function sum() {
  //유사배열(arguments): 받은 인자 다 들어옴
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
}

const abcSum = sum(10, 20, 30, 40, 50);

// 개선 됨-> 전개파라미터 (rest parameter) ...args
function sum(...args) {
  //유사배열(arguments): 받은 인자 다 들어옴
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
}


// 개선 됨-> 전개파라미터 (rest parameter) ...args
function sum(a, b, ...args) {
  //a==10, b==30 ...args==30, 40, 50
  //a,b는 필수값이고 나머지는 안줘도되고 많이줘도된다.
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
}
const abcSum = sum(10, 20, 30, 40, 50);

// call 함수 사용 (함수인자)
sum.call();
// apply 이용 호출 (함수인자)
sum.apply();
// 공통점: context 객체를 받는다
// 차이점: 함수에 필요한 인자 기술 차이


// call 함수 사용 (context, 함수에 필요한 인자 기술)
sum.call(null, 10, 20, 30);

// apply 이용 호출 (context, 함수에 필요한 인자 기술: 배열)
// 함수의 호출에 인자값을 외부로부터 공급받아서 유연하게 동작
sum.apply(null, [10, 20, 30]);

const arr = [10, 20, 30, 40];
sum.apply(null, arr);