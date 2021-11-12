import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.scss']
})
export class RxjsBasicComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // let button = document.querySelector('button');
    // button.addEventListener('click', (e) => console.log(e));

    // fromEvent(button, 'click').subscribe((e) => console.log(e))
    //(alias) fromEvent<Event>(target: FromEventTarget<Event>, eventName: string): Observable<Event> (+3 overloads)

    // let count: number = 0;
    // let rate: number = 1000;
    // let lastClick: number = Date.now() - rate;
    // let button = document.querySelector('button');
    // button.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(count++);
    //     lastClick = Date.now();
    //   }
    // });

    let button = document.querySelector('button');
    fromEvent(button, 'click')
      .pipe(throttleTime(1000))
      .subscribe((e) => console.log(e));
    //(alias) throttleTime<Event>(duration: number, scheduler?: SchedulerLike, config?: ThrottleConfig): MonoTypeOperatorFunction<Event>
    
    //////////////////////////////////////////////////////////////

    //Observer : Object 버전  
    let Observer = {
      next: function(value) {
        console.log(value);
      },
      error: function(error) {
        console.log((error));
      },
      complete: function() {
        console.log('finished');
      }
    }
    let button1 = document.querySelector('button');
    fromEvent(button, 'click')
      .subscribe(
        Observer
      )

    let button2 = document.querySelector('button');
    //Observable
    fromEvent(button, 'click')
    .subscribe(
      //Observer: function or Object
        (event) => console.log('clicked')
      )
      
      
    
  //////////////////////////////////////////////////////////////
  //"functional declaration" define Observable type, not instantiation
  //옛날버젼
  // Observable.create(function(obs) {
  //   //automation execution (자동실행)
  //   //asynchronous
  //   obs.next('some value');
  //   obs.error('some error');
  //   obs.complete('finished');
  // });

  // const observer = {
  //   next: x => console.log('Observer got a next value: ' + x),
  //   error: err => console.error('Observer got an error: ' + err),
  //   complete: () => console.log('Observer got a complete notification'),
  // };

  // observable.create(function(obs){
  //   obs.next(console.log('hello'));
  //   obs.error(console.log('some Error'));
  //   obs.complete(console.log('finished'));
  // }).subscribe(
  //   value => 
  // )
  }
  
}
