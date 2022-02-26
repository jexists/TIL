import { Component, OnInit } from '@angular/core';
import { delay, fromEvent, interval, map, pluck, scan, take, tap, timeInterval, timeout, timeoutWith, timestamp } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    // delay: 주어진 시간만큼 지연 발생 ======
    interval(1000).pipe(
      take(5),
      tap(x => console.warn(x + ' 시작')),
      delay(1500)
      // delay(5000)
    ).subscribe(x => console.log(x + ' 완료'))

    // 클릭한 후 지연
    fromEvent(document, 'click').pipe(
      tap((e: any) => console.warn(e.x + '클릭한 시점')),
      delay(1500)
    ).subscribe((e: any) => console.log(e.x + '클릭한 후'))
    */

    /*
    // timestamp: 타임스탬프
    // 발생 일어나는 시점 기록
    fromEvent(document, 'click').pipe(
      pluck('x'),
      timestamp(), // 현재 시간을 정수로 표기 출력
      map((x: any) => {
        x.timestamp = new Date(x.timestamp).toString();
        return x;
      }),
      pluck('timestamp'),
    ).subscribe(console.log)
    */

    // timeinterval: 이전 발행물과의 시간차
    // interval 이전클릭한거랑 시간차 (빨리누르면 숫자작음)
    /*
    fromEvent(document, 'click').pipe(
      pluck('x'),
      timeInterval()
    ).subscribe(console.log)
    */

    /*
    // interval 시간차 알아보기 (1000과 근접)
    interval(1000).pipe(
      timeInterval()
    ).subscribe(console.log)
    */

    //timeout: 주어진 시간 내 값 미발행시 경우 오류
    fromEvent(document, 'click').pipe(
      timeout(3000)
    ).subscribe(
      _ => console.log('ok'),
      err => console.error(err)
    )

    // 예) ajax로 서버 요청 보낼때 없을경우 사용
    // ajax('http://127.0.0.1:3000').pipe(
    //   pluck('response'),
    //   timeout(500)
    // ).subscribe(console.log, console.error)

    // 주어진 시간 내 값 미발행시 경우 다른 observable 개시
    fromEvent(document, 'click').pipe(
        timeoutWith(3000, interval(1000)),
        scan((acc, x) => { return acc + 1 }, 0)
    ).subscribe(console.log)
  }

}