import { from, fromEvent, interval, of, Subject } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck, reduce, tap } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
];

class TotalCountWidget {
  constructor(productObservable) {
    const el = document.querySelector('[data-value="total_count_widget"]');
    productObservable.pipe(
      pluck("length"), // = map(v => v.length)
      map(v => `${v}개`)
    ).subscribe(v => {
      el.innerHTML = v;
      console.log(v);
    });
  }
}

class TotalPriceWidget {
  constructor(productObservable) {
    const el = document.querySelector('[data-value="total_price_widget"]');
    productObservable.pipe(
      map(v => v.map(p => p.price).reduce((acc, val) => acc + val, 0)),
      map(v => `${v}원`),
    ).subscribe(v => el.innerHTML = v);
  }
}

class App {
  constructor() {
    // const products$ = of(products);

    const productSubject = new Subject();
    const products$ = productSubject.asObservable();
    
    new TotalCountWidget(products$);
    new TotalPriceWidget(products$);
    // productSubject.next(products)

    // fromEvent(document.querySelector('.btn'),click)
    //   .pipe(
    //     map(_ => products)
    //   )
    //   .subscribe(productSubject);
    document.querySelector('.btn').addEventListener('click', e => {
      productSubject.next(products);
    })
  }
}

new App();