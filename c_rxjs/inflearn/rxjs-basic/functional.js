const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

//  짝수 선택 -> 처음 5개 선택 -> 제곱

// 값이 변경 가능한 변수 사용 (예: count, result, i)
let count = 0;
let result = '';

for (let i = 0; i < numbers.length - 1 && count < 5; i++) {
  if (numbers[i] % 2 === 0) {
    result += (result === '' ? '' : ', ') + Math.pow(numbers[i], 2);
    count++;
  }
}

// 함수형 프로그래밍 변경 (선언형 프로그래밍 특성)
// 변수 사용x 순수함수 (외부데이터 변경x)
// 받은 값들을 내부에서 처리해서 밖으로 반환
console.log(
  numbers
    .filter(n => n % 2 === 0)
    .slice(0, 5)
    .map(n => Math.pow(n, 2))
    .join(', ')
);

// RxJS
const { range } = rxjs
const { filter, take, map, toArray } = rxjs.operators
range(1, 20) // observable
  .pipe(
    filter(n => n % 2 === 0),
    take(5),
    map(n => Math.pow(n, 2)),
    toArray(), // 통과하는 값들을 배열로 모아 내보냄
    map(arr => arr.join(', '))
  )