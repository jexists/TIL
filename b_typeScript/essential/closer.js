let saveNumber = 1;
// 어디에서든 접근 가능하다.

function increment() {
  return saveNumber++;
}

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

saveNumber = 200;
// saveNumber를 보호하고있지 않음
console.log(increment()); // 200


// -------------------------

function increment2() {
  let saveNumber2 = 1;
  return saveNumber2++;
}

console.log(increment2()); // 1
console.log(increment2()); // 1
console.log(increment2()); // 1

saveNumber2 = 200;
// 동작하지않음
console.log(increment2()); // 1

// -------------------------

function increment3() {
  let saveNumber3 = 1;
  return function () {
    saveNumber3++;
  }
}

const inc3 = increment3();
console.log(inc3()); // undefined
console.log(inc3()); // undefined
console.log(inc3()); // undefined

saveNumber3 = 300;
// 동작하지않음
console.log(inc3()); // undefined

// -------------------------
// 클로저
// -> 함수 안쪽에서 함수가 만들어지는 상황에서 함수 안쪽에 있는 코드 중에 바깥 함수에 있는 변수에 접근하게 되면 이 접근한 변수를 클로저라고 하는 특별한 공간에 저장
// 지역변수는 사라지고 클로저 공간이 생김
// 특수한 공간 안에 바깥쪽에 있는 변수 가둬놓을는 곳 클로저라는 공간
// 클로저 장점: 함수가 리턴돼도 특정 값을 보호하면서 그 값을 계속 사용할 수 있는 장점
// 변수 보호해서 어떤 방법으로 접근할 길 없음 
// 클로저 공간은 코드상에서 접근 불가
// 클로저를 만든 함수 안의 코드에서만 클로저 접근 가능 -> 런타임 상황에서는 변경 불가 (완벽하게 보호됨)
function increment4() {
  let saveNumber4 = 1;
  return function () {
    return saveNumber4++;
  }
}

const inc4 = increment4();
console.log(inc4()); // 1
console.log(inc4()); // 2
console.log(inc4()); // 3

saveNumber4 = 400;
// 동작하지않음
console.log(inc4()); // 4

// class MyObj {
//   private saveNumber: Number;
// }