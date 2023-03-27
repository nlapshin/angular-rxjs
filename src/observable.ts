// Создание Observable из массива данных:

// import { Observable } from 'rxjs';

// const numbers = [1, 2, 3, 4, 5]; // Массив данные
// const numbers$ = new Observable(subscriber => {
//   numbers.forEach(number => subscriber.next(number));
//   subscriber.complete();
// });

// // next, error, complite
// numbers$.subscribe(number => console.log(number));

// // Создание Observable из события DOM:

// import { fromEvent } from 'rxjs';

// const button = document.querySelector('button');
// const buttonClick$ = fromEvent(button, 'click');

// buttonClick$.subscribe(event => console.log('Button clicked!'));

// // Создание Observable из таймера:

// import { timer } from 'rxjs';

// const timer$ = timer(2000);

// timer$.subscribe(() => console.log('2 seconds have passed!'));

// Комбинирование нескольких Observable:

// import { Observable, fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';

// // number observable
// const numbers$ = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
// });

// const button = document.querySelector('button');

// // button observable
// const buttonClick$ = fromEvent(button, 'click');

// const combined$ = numbers$.pipe(
//   map(number => number * 2),
//   map(number => `Result: ${number}`)
// );

// buttonClick$.subscribe(() => {
//   combined$.subscribe(result => console.log(result));
// });

// Отслеживание изменений в форме:

// import { fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';

// const input = document.querySelector('input');
// const input$ = fromEvent(input, 'input').pipe(
//   map(event => event.target.value)
// );

// input$.subscribe(value => console.log(value));

// // Запрос данных с сервера:

// import { Observable } from 'rxjs';
// import { ajax } from 'rxjs/ajax';

// const url = 'https://jsonplaceholder.typicode.com/users';
// const users$ = ajax.getJSON(url);

// users$.subscribe(users => console.log(users));

// // Отслеживание кликов на кнопке:

// import { fromEvent } from 'rxjs';

// const button = document.querySelector('button');
// const buttonClick$ = fromEvent(button, 'click');

// buttonClick$.subscribe(() => console.log('Button clicked!'));

// // Отслеживание нажатия клавиш:

// import { fromEvent } from 'rxjs';
// import { filter } from 'rxjs/operators';

// const input = document.querySelector('input');
// const input$ = fromEvent(input, 'keydown').pipe(
//   filter(event => event.key === 'Enter')
// );

// input$.subscribe(() => console.log('Enter key pressed!'));

// Отложенная отправка запроса:

// import { Observable } from 'rxjs';

// const delay$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.next('Data after delay!');
//     subscriber.complete();
//   }, 2000);
// });

// delay$.subscribe(data => console.log(data));

// // Создание потока счетчика:

// import { Observable, interval } from 'rxjs';

// const counter$ = interval(1000);

// counter$.subscribe(count => console.log(count));

// Объединение нескольких потоков данных:

// import { Observable, combineLatest } from 'rxjs';

// const letters$ = new Observable(subscriber => {
//   subscriber.next('A');
//   setTimeout(() => subscriber.next('B'), 2000);
//   setTimeout(() => subscriber.next('C'), 4000);
// });

// const numbers$ = new Observable(subscriber => {
//   subscriber.next(1);
//   setTimeout(() => subscriber.next(2), 1000);
//   setTimeout(() => subscriber.next(3), 3000);
// });

// // [ 'A', 1 ]
// // [ 'A', 2 ]
// // [ 'B', 2 ]
// // [ 'B', 3 ]
// // [ 'C', 3 ]

// const combined$ = combineLatest([letters$, numbers$]);

// combined$.subscribe(data => console.log(data));

// Фильтрация потока данных:

// import { Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';

// const numbers$ = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.next(5);
// });

// const evenNumbers$ = numbers$.pipe(
//   filter((number: any) => number % 2 === 0)
// );

// evenNumbers$.subscribe(number => console.log(number));

// // Преобразование данных в потоке:

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// const numbers$ = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.next(5);
// });

// const squaredNumbers$ = numbers$.pipe(
//   map(number => number * number)
