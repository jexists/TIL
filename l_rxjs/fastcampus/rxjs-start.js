import { Observable } from 'rxjs';

console.log(Observable);
new Promise((resolve, reject) => {
  console.log('start promise');
  resolve('promise 1')
}).then(console.log)

//promise => 바로 실행
//observable => subscribe 함과 동시에 실행
// const observable = new Observable(observer => {
//   console.log('start subscriber...');
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   // setTimeout(()=>{
//   //   observer.next(1)
//   // },1000)
//   setInterval(() => {
//     observer.next(i++)
//   },1000)
// }).subscribe({
//   next(value){
//     console.log(value);
//   },
//   complete() {

//   },
//   error(error) {

//   }
// })



const intervalObsvr = new Observable(observer => {
  console.log('start subscriber...');
  let i = 0;
  setInterval(() => {
    observer.next(i++)
  }, 1000)
})
intervalObsvr.subscribe({
  next(value) {
    console.log("1", value);
  },
  complete() {

  },
  error(error) {

  }
})

intervalObsvr.subscribe({
  next(value) {
    console.log("2", value);
  },
  complete() {

  },
  error(error) {

  }
})

const setTimeObsvr = Observable.create(observer => {
  console.log('start observer...');
  setTimeout(() => {
    observer.next(0)
    observer.next(1)
    observer.next(2)
    observer.error(new Error('got error'))
    observer.complete()
  }, 1000)
})

setTimeObsvr.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('it`s complete');
    console.log(value);
  },
  error(error) {

  }
})
setTimeObsvr.subscribe(
  value => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }, () => {
    console.log('it`s done');
  }
)