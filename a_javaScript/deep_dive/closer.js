
// const x = 1;
// function outer() {
//   const x = 10; 
//   const inner = function() {
//     console.log(x);
//   }
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();


// console.log('-----------');

//  const x = 1;
//  function foo() {
//    const x = 10;
//    console.log(x);
//    bar();
//  }
//  function bar() {
//    console.log(x);
//  }
//  foo(); 
//  bar();


// console.log('-----------');



// let one;
// one = 1;
// function addOne(num) {
//   console.log(one + num);;
// }
// addOne(5);
// //전역 렉시컬 환경  
// //one 초기화x (사용불가)
// //addOne: function (사용가능)
// //one 1
// //addOne() 실행 내부 렉시컬 환경 실행
// //내부 렉시컬 환경 -> 전역 렉시컬 환경 참조
// //변수 찾기 내부에서 먼저 찾고 없으면 외부 없으면 전역

console.log('-----------');

function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}
const add3 = makeAdder(3);
console.log(add3(2));

// // 전역 렉시컬
// // makeAddr 함수
// // add3  초기화 (사용불가)
// //makeAdder 사용 (레시컬 환경 실행)
// // x = 3
// // add3  함수 변경
// // add3 실행 익명함수 렉시컬 환경 실행
// // y=2
// console.log('-----------');



// var d = 'x';
// function outer() {
//   var a = 1;
//   var b = 'B';
//   function inner() {
//     var a = 2;
//     console.log(a);
//     console.log(b);
//     console.log(d);
//   }
//   inner();
//   console.log(a);
// }

// outer();
// // var someFun = outer();
// // someFun();

// // 자바스크립트는 함수단위로 스코프가 생성
// // 생성된 곳에도 확인
// // 
// console.log('-----------');