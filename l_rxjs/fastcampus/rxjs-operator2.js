import { from, fromEvent, interval, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
];

from(products).pipe(
  pluck("price"),
  map(v => `${v}원`)
).subscribe(console.log);

fromEvent(document.getElementById('click-me'), 'click')
  .pipe(
    pluck("target", "innerText"),
    map(v => {
      // return v
      return ajax.getJSON("/data/products.json")
    })
  ).subscribe(console.log)