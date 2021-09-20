import { from, fromEvent, interval, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck, flatMap, mergeMap, switchMap, concatMap } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
];

// from(products).pipe(
//   map(v => `${v.price}원`)
// ).subscribe(console.log);

// from(products).pipe(
//   pluck("price"),
//   map(v => `${v}원`)
// ).subscribe(console.log);

// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     pluck("target", "innerText"),
//     map(v => {
//       // return v
//       // return ajax.getJSON("/data/products.json")
//       return ajax.getJSON("/data/products.json").subscribe()
//     })
//   ).subscribe(console.log)

// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     pluck("target", "innerText"),
//     flatMap(v => {
//       return ajax.getJSON("/data/product.json")
//     })
//   ).subscribe(console.log)


// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     pluck("target", "innerText"),
//     // flatMap(v => {
//     mergeMap(v => {
//       return ajax.getJSON("/data/product.json")
//     })
//   ).subscribe(console.log)

// mergeMap == flatMap
// [[1, 2, 3], [4, 5]] => [1, 2, 3, 4, 5]
const flat = [1, 2, 3].flatMap(v => ["!", v]) //["!",1,"!",2,"!",3]
// console.log(flat);


// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     pluck("target", "innerText"),
//     switchMap(v => {
//       return ajax.getJSON("/data/product.json")
//     })
//   ).subscribe(console.log)

// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     flatMap(v=> interval(1000))
//   ).subscribe(console.log)

// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     switchMap(v=> interval(1000))
//   ).subscribe(console.log)

// fromEvent(document.getElementById('click-me'), 'click')
//   .pipe(
//     // 이전 observer이 complete되기전까지 새로운것이 안만들어진다.
//     concatMap(v=> interval(1000))
//   ).subscribe(console.log)

fromEvent(document.getElementById('click-me'), 'click')
  .pipe(
    pluck("targe", "innerText"),
    concatMap(v => {
      return ajax.getJSON("data/product.json")
    })
  ).subscribe(console.log)