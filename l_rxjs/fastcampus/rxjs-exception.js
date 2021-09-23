import { interval, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.error(new Error("ERROR")); // throw new Error("ERROR"); 동일한 에러
//   // throw new Error("ERROR");
//   observer.next(3);
//   observer.next(4);
// }).subscribe(console.log)

// new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.error(new Error("ERROR")); // throw new Error("ERROR"); 동일한 에러
//   // throw new Error("ERROR");
//   observer.next(3);
//   observer.next(4);
// }).subscribe(console.log, console.error)

// interval(100)
//   .pipe(map(x => {
//     if(x===1) {
//       throw new Error('ERROR');
//     }
//     return x;
//   })).subscribe(
//     console.log, 
//     e => {
//       console.error('error', e);
//   },
//     _ => console.log('complete') //호출 안됨
//   )

interval(100)
  .pipe(map(x => {
    if (x === 1) {
      throw new Error('ERROR');
    }
    return x;
  }),
    catchError(e => of(1))
    ).subscribe(
      console.log,
      e => {
        console.error('error', e);
      },
      _ => console.log('complete') //호출 안됨
    )
