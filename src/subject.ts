// Рассылка данных всем подписчикам:

// const str = 'string' // не реактивная переменная

// import { Subject } from 'rxjs';

// const subject = new Subject<string>();

// subject.subscribe(data => console.log(data));

// subject.next('Data for subscribers!');

// Отслеживание изменений на нескольких элементах:

// import { Subject } from 'rxjs';

// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');

// const subject = new Subject<string>();

// subject.subscribe(data => console.log(data));

// input1.addEventListener('input', event => {
//   const value = event.target.value;
//   subject.next(`Input 1: ${value}`);
// });

// input2.addEventListener('input', event => {
//   const value = event.target.value;
//   subject.next(`Input 2: ${value}`);
// });

// Отправка ошибки всем подписчикам:

// import { Subject } from 'rxjs';

// const subject = new Subject<string>();

// subject.subscribe(
//   data => console.log(data),
//   error => console.error(error)
// );

// subject.error('Error message!');

// Объединение нескольких потоков данных:

// import { Subject } from 'rxjs';
// import { combineLatest } from 'rxjs/operators';

// const letters$ = new Subject<string>();
// const numbers$ = new Subject<number>();

// const combined$ = combineLatest([letters$, numbers$]);

// combined$.subscribe(data => console.log(data));

// letters$.next('A');
// numbers$.next(1);

// // Передача данных между компонентами Angular:

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable()
// export class DataService {
//   private dataSubject = new Subject<string>();

//   data$ = this.dataSubject.asObservable();

//   updateData(data: string) {
//     this.dataSubject.next(data);
//   }
// }

// // Отмена выполнения задачи:

// import { Subject } from 'rxjs';

// const task$ = new Subject<void>();

// task$.subscribe(() => {
//   // Выполнение задачи
// });

// setTimeout(() => task$.next(), 5000);

// setTimeout(() => task$.complete(), 10000);

// Отправка сообщения об ошибке, если задача не выполнена вовремя:

// import { Subject } from 'rxjs';

// const task$ = new Subject<void>();

// task$.subscribe(() => {
//   // Выполнение задачи
// });

// setTimeout(() => task$.next(), 5000);

// setTimeout(() => task$.error('Task not completed in time!'), 10000);

// // Сброс значений элементов формы:

// import { Subject } from 'rxjs';

// const reset$ = new Subject<void>();

// reset$.subscribe(() => {
//   const inputs = document.querySelectorAll('input');
//   inputs.forEach(input => (input.value = ''));
// });

// const resetButton = document.querySelector('#reset');
// resetButton.addEventListener('click', () => reset$.next());

// // Отмена запроса к серверу:

// import { Subject } from 'rxjs';
// import { ajax } from 'rxjs/ajax';

// const cancel$ = new Subject<void>();

// const url = 'https://jsonplaceholder.typicode.com/users';
// const request$ = ajax.getJSON(url);

// request$.subscribe(data => console.log(data));

// cancel$.subscribe(() => request$.unsubscribe());

// setTimeout(() => cancel$.next(), 5000);

// Behavior subject запоминает последнее значение

// import { BehaviorSubject } from 'rxjs';

// const subject = new BehaviorSubject<number>(0);

// // Когда мы подписываемся, мы получаем последнее значение
// subject.subscribe({
//   next: value => console.log(`observerA: ${value}`)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: value => console.log(`observerB: ${value}`)
// });

// subject.next(3);


// Replay subject запоминает все значения

// import { ReplaySubject } from 'rxjs';

// const subject = new ReplaySubject<number>(2);

// subject.subscribe({
//   next: value => console.log(`observerA: ${value}`)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe({
//   next: value => console.log(`observerB: ${value}`)
// });

// subject.next(4);


// // Replay subject запоминает все значения

// import { ReplaySubject } from 'rxjs';

// const subject = new ReplaySubject<number>(2);

// subject.subscribe({
//   next: value => console.log(`observerA: ${value}`)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe({
//   next: value => console.log(`observerB: ${value}`)
// });

// subject.next(4);

// AsyncSubject запоминаетм все и отправляет когда завершены

import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();

subject.subscribe({
  next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe({
  next: value => console.log(`observerB: ${value}`)
});

subject.next(4);
subject.complete();
