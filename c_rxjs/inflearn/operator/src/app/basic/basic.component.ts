import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, pluck, range } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { filter, map, take, mergeMap, retry, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 시간의 흐름
    interval(500).pipe(
      filter(n => n % 2 === 0),
      take(5),
      map(n => Math.pow(n, 1))
    )

    // 사용자의 행동
    fromEvent(document, 'click').pipe(
      map((e: any) => e.x),
      filter(x => x < 400),
      take(5)
    )

    // 비동기 AJAX요청
    ajax('http://127.0.0.1:3000').pipe(
      map(res => res.response)
    ).subscribe(console.log)



    range(1, 20).pipe(
      mergeMap(index => ajax(
        `http://127.0.0.1:3000/people/quarter-error/${index}`
      ).pipe(
        pluck('response', 'first_name'),
        retry(3)
      )
        , 4),
      toArray()
    ).subscribe(console.log)

    const keypress$ = fromEvent(document, 'keydown').pipe(
      pluck('key'),
      filter((k: any) => k.includes('Arrow')),
      map(k => {
        // return {
        //   ArrowDown: 1,
        //   ArrowUp: -1,
        //   ArrowLeft: -1,
        //   ArrowRight: 1,
        // }[k]
      })
    )
  }



}
