import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { filter, map, take } from 'rxjs/operators';

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
  }

}
