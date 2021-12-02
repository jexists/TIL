
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

// 화살표 함수
// 이름이 기본적으로 없고 익명함수가 기본값 -> 반드시 변수에 넣어줘야한다.
// 한줄 함수
const sumV2 = (a, b, ...args) => {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
}

const ten = () => {
  return 100;
}
// 생략가능 (코드블록이 한줄인 경우 == 리턴값이면 브레이스 & 리턴 생략 가능)
const ten = () => 100;

const ten = (x) => 100 + x;
// 생략가능 (인자가 하나일 경우 괄호 생략 가능)
const ten = x => 100 + x;
ten(10); // 110

// 생략 불가능
const ten = (x, y) => {
  console.log(x);
  return 100 + y;
}

// 생성기 함수 (generator function)
// -> 최소에 호출하면 함수가 실행되지않고 실행 준비상태로 만들고 객체 하나 반환 (함수를 실행할 도구를 담은 객체 반환)
// 반환한 객체로 실행 했다가 멈췄다가 함
// 실행을 일시 중시 시키고 바깥쪽으로 나갔다가 다시 next 함수로 안쪽으로 들어와서 실행 재개 (왔다갔다)
function* gen() {
  // yield == return
  yield 10;
  yield 20;
  return 30;
}

const g = gen(); // undefined
// 호출
g.next(); // 10
g.next(); // 20
g.next(); // 30


// 비동기 함수
async function myTask() {

}

// promise / callback 함수 