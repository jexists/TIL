
function sum1To100_1() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum1To100_1());
// 명령형 (상태 변함, 복잡해서 실수 쉬움 -> 합성 어려움)



function sum1To100_2() {
  function go(sum, i) {
    if (1 > 100) { // 종료
      return sum;
    }
    return go(sum + i, i + 1);
  }
  return go(0, 1);
}
console.log(sum1To100_2());
// 재귀함수 사용 (순수한 함수 -> 복잡)



function loop(fn, acc, list) {
  if (list.length === 0) return acc;
  const [head, ...tail] = list;
  return loop(fn, fn(acc, head), tail);
}
const range = (start, end) => Array.from(
  { length: end - start + 1 },
  (_, index) => index + start
);
const plus = (a, b) => a + b;
console.log(loop(plus, 0, range(1, 100)));
// 반복 가능한 자료구조 (추상화된 함수 활용)