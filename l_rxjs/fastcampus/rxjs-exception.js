import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.error(new Error("ERROR")); // throw new Error("ERROR"); 동일한 에러
//   // throw new Error("ERROR");
//   observer.next(3);
//   observer.next(4);
// }).subscribe(console.log)

new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.error(new Error("ERROR")); // throw new Error("ERROR"); 동일한 에러
  // throw new Error("ERROR");
  observer.next(3);
  observer.next(4);
}).subscribe(console.log, console.error)

