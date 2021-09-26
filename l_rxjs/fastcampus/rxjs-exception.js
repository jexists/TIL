import { interval, Observable, of, throwError, timer, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap, takeUntil, throwIfEmpty, retry } from 'rxjs/operators';

// new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   // observer.error(new Error("에러")); // throw new Error("ERROR"); 동일한 에러
//   throw new Error("throw 에러");
//   observer.next(3);
//   observer.next(4);
// }).subscribe(console.log)

// new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.error(new Error("에러"));
//   observer.next(3);
//   observer.next(4);
// }).subscribe(console.log, console.error)

// interval(1000)
//   .pipe(map(x => {
//     if (x === 1) {
//       throw new Error('에러');
//     }
//     return x;
//   })).subscribe(
//     console.log,
//     e => {
//       console.error('에러', e);
//     },
//     _ => console.log('complete') //호출 안됨
//   )

// interval(100)
//   .pipe(map(x => {
//     if (x === 1) {
//       throw new Error('ERROR');
//     }
//     return x;
//   }),
//     catchError(e => of(1))
//   ).subscribe(
//     console.log,
//     e => {
//       console.error('error', e);
//     },
//     _ => console.log('complete')
//   )

// interval(1000)
//   .pipe(
//     switchMap(x => {
//       if (x === 1) {
//         return throwError(new Error('에러')).pipe(
//           catchError(e => {
//             console.error('에러', e);
//             return of(1)
//           })
//         )
//       }
//       return of(x);
//     })
//   ).subscribe(
//     console.log,
//     e => {
//       console.error('error', e);
//     },
//     _ => console.log('complete')
//   )


// ajax("https://api.github.com/users?per_page=5")
//   .pipe(
//     takeUntil(timer(100)),
//     throwIfEmpty()
//   ).subscribe(
//     console.log,
//     console.error
//   )

// ajax("https://api.github.com/users?per_page=5")
//   .pipe(
//     takeUntil(timer(1)),
//     throwIfEmpty(),
//     retry(3)
//   ).subscribe(
//     console.log,
//     console.error
//   )

// interval(1000).pipe(
//   map(x => {
//     if (x === 2) throw new Error('에러')
//     else return x;
//   }),
//   retry(3)
// ).subscribe(
//   console.log,
//   console.error
// )

from([0, 1, 2, 3, 4]).pipe(
  map(x => {
    if (x === 4) throw new Error('에러')
    else return x;
  }),
  retry(3)
).subscribe(
  console.log,
  console.error
)