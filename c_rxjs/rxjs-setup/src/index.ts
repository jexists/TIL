// console.log('rxjs');

// import { Observable } from 'rxjs';

// const observable = new Observable((observer) => {
//   //observer
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   // observer.complete();
//   setTimeout(()=>{
//     observer.next(4);
//     observer.complete();
//     observer.next(5); //X
//   },1000)
// });

// const observer = {
//   next(x: number) {
//     console.log('got value ' + x);
//   },
//   error(err: string) {
//     console.log('error' + err);
//   },
//   complete() {
//     console.log('done');
//   }
// }

// observable.subscribe(observer);

// Create Observable
// import { Observable } from "rxjs";

// const observable = new Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);
// });

//subscribing to observables

// observable.subscribe((x:string) => console.log(x));
// observable.subscribe((x:string) => console.log(x + '!'));

// Executing observables (discussed)


// import { Observable } from 'rxjs';

// const observable = new Observable((observer) => {
//   try {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.next(4);
//     observer.complete();
//   } catch(err) {
//     observer.error(err);
//   }
//   setTimeout(()=>{
//   },1000)
// });

// const observer = {
//   next(x: number) {
//     console.log('got value ' + x);
//   },
//   error(err: string) {
//     console.log('error' + err);
//   },
//   complete() {
//     console.log('done');
//   }
// }

// observable.subscribe(observer);


// disposing Observable Executions


// import { from, Observable, of } from 'rxjs';

// const observable = of([10, 20, 30])
// const subscription = observable.subscribe((x)=>console.log(x));
// subscription.unsubscribe();

/////////////////////////////////
// RxJS - mergeMap and switchMap

// import { of, fromEvent } from 'rxjs';
// import { debounceTime, map, mergeMap, switchMap } from 'rxjs/operators';

// const title$ = of('joy', 'sadness', 'anger');
// title$.subscribe(console.log);

// const numbers$ = of(1, 2, 3);
// numbers$.pipe(map((num: number) => num * num)).subscribe(console.log)

// const inputEl = document.querySelector('input');

// const input$ = fromEvent(inputEl, 'input');

// input$.subscribe((e: InputEvent) => {
//   console.log((<HTMLInputElement>e.target).value);
// });

// const result$ = title$.pipe(
//   mergeMap((title) => {
//     return input$.pipe(
//       debounceTime(1000),
//       map((e: InputEvent) => title + ' ' + (<HTMLInputElement>e.target).value)
//     );
//   })
// );

// result$.subscribe(console.log);

// const numbers$ = of(1, 2, 3).pipe(
//   switchMap((x: number) => of(x, 2 * x, 3 * x))
// )

// numbers$.subscribe(console.log);

//RxJS Subject and BehaviorSubject

// Unicast
// import { of } from 'rxjs';

// const numbers$ = of(1, 2, 3);

// numbers$.subscribe(console.log);
// numbers$.subscribe((num) => console.log(2 * num));

// Multicast

import { BehaviorSubject, Subject } from 'rxjs';

const subject = new Subject<string>();
// const subject = new BehaviorSubject<string>('User');

subject.subscribe({
  next: (value) => console.log(`welcome ${value}`)
});

subject.subscribe({
  next: (value) => console.log(value),
});

subject.next('Joy');
subject.next('Sadness');