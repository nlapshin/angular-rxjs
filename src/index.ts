// import { Observable } from 'rxjs';

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');


// import { Observable } from 'rxjs';
 
// const source = new Observable<number>((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
// });
 
// // Usage
// console.log('start');
// source.subscribe({
//   next: console.log,
//   complete: () => console.log('done'),
// });
// console.log('stop');


import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

const observer = {
  next: value => console.log(value),
  error: error => console.error(error),
  complete: () => console.log('completed')
};

observable.subscribe(observer);


import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: value => console.log(`observerB: ${value}`)
});

subject.next(3);
