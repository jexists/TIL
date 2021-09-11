import { Observable, from } from "rxjs";
import { map, filter, tap, scan, reduce } from "rxjs/operators";

// [1, 2, 3].map(v => v + 1)

// const operator = (observable) =>
//   new Observable(observer => {
//     observable.subscribe({
//       next(value) {
//         observer.next(value)
//       }
//     })
//   });

const myMap = (mapFn) => (observable) =>
  new Observable(observer => {
    observable.subscribe({
      next(value) {
        observer.next(mapFn(value))
      },
      error(error) {
        observer.error(error)
      },
      complete() {
        observer.complete()
      }
    })
  });

const myObservable = from([1, 2, 3, 4])
// const newObservable = myMap(v => v + 1)(myObservable)
// newObservable.subscribe(console.log)
// chaining
// myMap(v => v + 1)(newObservable).subscribe(console.log)

// myMap(v => v + 1)(
//   myMap(v => v + 1)(
//     myMap(v => v + 1)(myObservable)
//   )
// ).subscribe(console.log)

// -> 안깔끔해서 rxjs에서는 pipe를 제공

// from([1, 2, 3, 4])
//   .pipe(
//     myMap(v => v + 1),
//     myMap(v => v + 1),
//     myMap(v => v + 1)
//   ).subscribe(console.log)

from([1, 2, 3, 4])
  .pipe(
    map(v => v + 1),
    tap(v => console.log("TAP", v)),
    filter(v => v % 2 === 0),
    tap(v => console.log("filter", v)),
    // scan((x, y) => x + y, 0),
    reduce((x, y) => x + y, 0)
  ).subscribe(console.log)