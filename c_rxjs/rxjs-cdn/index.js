//RxJS - Introduction

const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('click');
// });

// rxjs.fromEvent(button, 'click').subscribe(() => {
//   return console.log('click');
// });

// let count = 0;
// button.addEventListener('click', () => {
//   console.log(('click', ++count));
// });

// rxjs.fromEvent(button, 'click')
//   .pipe(
//     rxjs.operators.scan((count) => count + 1, 0)
//   ).subscribe((count) => {
//     return console.log('click', count);
//   });


rxjs
  .fromEvent(button, 'click')
  .pipe(
    rxjs.operators.throttleTime(1000),
    rxjs.operators.map((event) => event.clientX),
    rxjs.operators.scan((count, clientX) => count + clientX, 0)
  ).subscribe((count) => {
    console.log('click', count);
  });

