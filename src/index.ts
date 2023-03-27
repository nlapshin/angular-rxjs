// const data = [
//   1,
//   5,
//   20,
//   100
// ]; // массив

// const dataIter = data[Symbol.iterator]();

// const resultArr: number[] = [];

// console.log('step 1', dataIter.next().value)
// console.log(dataIter.next().value)
// console.log(dataIter.next().value)
// console.log(dataIter.next().value)
// console.log(dataIter.next().value)
// console.log(dataIter.next().value)

// resultArr.push(doubleHandler(dataIter.next().value))
// resultArr.push(doubleHandler(dataIter.next().value))
// resultArr.push(doubleHandler(dataIter.next().value))
// resultArr.push(doubleHandler(dataIter.next().value))

// Observable, Observe, Subscription, Subject, Pipe - 5 основных концепций RxJS
// Observable - что мы можем наблюдать.
// Observe - наблюдатель.
// Subscription - это способ наблюдать за данными.

// Subject - Observable + Observer. EventEmitter.
// Pipe - это трубка, концепция которая преобразовывает данные

// console.log(resultArr);

// function doubleHandler(val: number) {
//   return val * 2;
// }

// push - это когда нам данные прокидывают
// pull - это когда мы сами забираем данные

// console.log(doubleMap(data));

// function doubleMap(data: number[]) {
//   return data.map(val => val * 2);
// }

// for (let v of data) {
//   console.log(v);
// }

// Observable - это обертка над чем-то
// Паттерн наблюдатель. Паттерн publisher/subscriber

// Пуш уведомление, о расписании матчей Спартака.
// Ставлю приложение и там настраиваю пуш-уведомление на расписание матчей.
// Я - подписчик на конкретные события.
// Есть публикатор событий, который их будет публиковать и когда он публикует
// Пользователи получают оповещение


// class Subject {
//   private listeners: { event: string, listener: any }[] = [];

//   public subscribe(event: string, listener: any) {
//     this.listeners.push({ event, listener });

//     // Надо возвращать id нашего листенера
//   }

//   public unsubscribe(event: string, listener: any) {
//     // мы можем отписаться
//   }

//   public publish(event: string, data: any) {
//     // оповещать наших подписчиков

//     for (const listener of this.listeners) {
//       if (event === listener.event) {
//         listener.listener(event, data);
//       }
//     }
//   }
// }

// const subscriber = new Subject();

// subscriber.subscribe('schedule', (event: string, data: any) => { console.log('subscribe', event, data) })

// subscriber.publish('schedule', { key: 'value' })

















// rxjs
import { Observable } from 'rxjs';

// Observable
const observable = new Observable((publisher) => {
  console.log('test');
  // Не выполнится без подписки
  publisher.next(1); 
  publisher.next(2);
  publisher.next(3);
  setTimeout(() => {
    publisher.next(4);
    publisher.complete();
  }, 1000);
});

console.log('just before subscribe');

// Observer
observable.subscribe({
  // next обработчик событий
  next(x) {
    console.log('got value ' + x);
  },
  // next обработчик для ошибок
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  // next обработчик завершение
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');

// 1. Callback hell
// 2. underscore или lodash - функциональный подход.

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


// import { Observable } from 'rxjs';

// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
// });

// const observer = {
//   next: value => console.log(value),
//   error: error => console.error(error),
//   complete: () => console.log('completed')
// };

// observable.subscribe(observer);


// import { Subject } from 'rxjs';

// const subject = new Subject<number>();

// subject.subscribe({
//   next: value => console.log(`observerA: ${value}`)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: value => console.log(`observerB: ${value}`)
// });

// subject.next(3);
