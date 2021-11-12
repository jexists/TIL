console.log('-----------');
console.log('closer');

// cnt 변수를 접근 못하게 만들어야한다. 
// 전역변수 -> 지역변수로 변경
function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function print() {
    console.log(cnt);
  }
  return {
    cntPlus,
    print
  }
}

const cntClosure = closure();
console.log(cntClosure); //함수 담겨있음

cntClosure.print(); 
cntClosure.cntPlus(); // 실행하면 1증가
cntClosure.print(); 

// console.log(cnt); //ERROR