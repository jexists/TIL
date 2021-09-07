import { Observable, of, range, interval, timer, from } from 'rxjs';

// range → 시작과 끝을 적어 연속적인 숫자를 생성하는 observer 생성 가능
// range(0, 4).subscribe(console.log)

// of → 인자 전달하면 하나씩 만들어짐 (배열 하나가 통으로 들어옴)
// of([1, 2, 3]).subscribe(console.log)

// of(...[1, 2, 3]).subscribe(console.log) // 1 // 2 // 3
// of(1, 2, 3).subscribe(console.log) // 1 // 2 // 3

// interval → 시간마다 값 생성
// interval(1000).subscribe(console.log)

// timer → interval 과 비슷 delay값 전달 가능
// timer → 시작되는 initial delay값 지정 가능 (interval)
// timer(5000, 500).subscribe(console.log)

// from → 배열, 이터러블, 프로미스를 observer로 변경
// from([1, 2, 3, 4]).subscribe(console.log)
// from([1, 2, 3, 4]).subscribe(
//   console.log, 
//   () => {},
//   () => console.log('finished')
// )

// from(new Map([
//   [{key:1}, {name: "xxx001"}],
//   [{key:2}, {name: "xxx002"}],
// ])).subscribe(console.log)

const promise1 = new Promise((resolve, reject) => {
  console.log("start promise...");
  resolve('promise 1')
})

from(promise1).subscribe(console.log)