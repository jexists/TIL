import { from, fromEvent, interval, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
];

class TotalCountWidget {
  constructor(productObservable) {
    const el = document.querySelector('[data-value="total_count_widget"]');
  }
}

class TotalPriceWidget {
  constructor(productObservable) {
    const el = document.querySelector('[data-value="total_price_widge"]');
  }
}