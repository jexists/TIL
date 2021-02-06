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


import { from, Observable, of } from 'rxjs';

const observable = of([10, 20, 30])
const subscription = observable.subscribe((x)=>console.log(x));
subscription.unsubscribe();