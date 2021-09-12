import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

// from(products).pipe(
//   filter(p => p.price > 2500)
// ).subscribe(console.log)

// from(products).pipe(
//   skip(2)
// ).subscribe(console.log)

//condition false가 반환될때까지 skip
// from(products).pipe(
//   skipWhile(v => v.price < 3000)
// ).subscribe(console.log)

// from(products).pipe(
//   take(3)
// ).subscribe(console.log)

// from(products).pipe(
//   takeWhile(v => v.price < 4000)
// ).subscribe(console.log)

// from(products).pipe(
//   takeLast(2)
// ).subscribe(console.log)

// from(products).pipe(
//   distinct()
// ).subscribe(console.log)

from(products).pipe(
  distinct(v => v.id)
).subscribe(console.log)

// from([1, 2, 3, 4, 4, 5]).pipe(
//   distinct()
// ).subscribe(console.log)
