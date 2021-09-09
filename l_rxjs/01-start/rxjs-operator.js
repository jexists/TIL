import { Observable, from } from "rxjs";

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
const newObservable = myMap(v => v + 1)(myObservable)
newObservable.subscribe(console.log)
// chaining
myMap(v => v + 1)(newObservable).subscribe(console.log)

myMap(v => v + 1)(
  myMap(v => v + 1)(
    myMap(v => v + 1)(myObservable)
  )
).subscribe(console.log)