import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map,
  pluck,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // RxJS: OPERATORS

    //Creation Operator = of
    // const observable = of ([1,2,3]);

    // observable.subscribe((x) => {
    //   console.log(x);
    // })

    // const obs = from([1, 2, 3])
    // obs.subscribe((x) => {
    //   console.log(x);
    // });

    // const obs = interval(1000);
    // obs.subscribe((x) => {
    //   console.log(x);
    // });

    // const button = document.querySelector('button');

    // fromEvent(button, 'click').subscribe((e: MouseEvent) => {
    //   console.log(e);
    // });

    // 2. Pipeable Operators

    // const obs = of(1, 2, 3);
    // obs.pipe(
    //   map(((x) => 2 * x))
    // ).subscribe((val) => {
    //   console.log(val);
    // });

    // obs.pipe(first()
    //   ).subscribe((val) => {
    //     console.log(val);
    //   });

    // const obs = interval(1000);
    // obs.subscribe((x) => console.log(x));

    // const obs = interval(1000)
    //   .pipe(
    //     filter((val) => {
    //       return val % 2 == 0;
    //     })
    //   )
    //   .subscribe((x) => console.log(x));

    // const button = document.querySelector('button');

    // fromEvent(button, 'click')
    //   .subscribe((e: MouseEvent) => {
    //     console.log(e);
    // });
    // fromEvent(button, 'click')
    //   .pipe(throttleTime(1000))
    //   .subscribe((e: MouseEvent) => {
    //     console.log(e);
    // });

    const input = document.querySelector('input');

    // fromEvent(input, 'input')
    //   .pipe(throttleTime(1000))
    //   .subscribe((e: InputEvent) => {
    //     console.log(e);
    //   });
    // fromEvent(input, 'input')
    //   .pipe(throttleTime(1000))
    //   .subscribe((e: InputEvent) => {
    //     console.log((<HTMLInputElement>e.target).value);
    //   });

    // fromEvent(input, 'input')
    //   .pipe(
    //     map((e: InputEvent) =>
    //       (<HTMLInputElement>e.target).value),
    //     debounceTime(1000),
    //     distinctUntilChanged()
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });

    fromEvent(input, 'input')
      .pipe(
        pluck('target', 'value'),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
}


