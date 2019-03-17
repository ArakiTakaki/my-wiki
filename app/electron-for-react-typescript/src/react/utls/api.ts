import Axios from 'axios';

type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';
const timeout: number = 1000;

export default class {
  public static async request(
    method: API_METHOD,
    endpoint: string,
    options?: { headers?: object; params?: object }
  ) {
    let res;
    switch (method) {
      case 'GET':
        res = await Axios.get(endpoint, { timeout, ...options });
        break;
      default:
        res = await Axios.get(endpoint, { timeout, ...options });
        break;
    }

    return res;
  }
}

// const alpha: { id: string; value: string } = { id: 'sadjfk;lkljaf', value: '' };

// function myFilter(arr: any[], predicate: { (value: any): boolean }) {
//   const result: any[] = [];
//   for (const elm of arr) {
//     if (predicate(elm)) {
//       result.push(elm);
//     }
//   }

//   return result;
// }

// // 使用例
// const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
// const res2 = myFilter(['foo', 'hoge', 'bar'], (str) => str.length >= 4);

// // エラー例
// myFilter([1, 2, 3, 4, 5], (str) => str.length >= 4);

// type Speed = 'slow' | 'medium' | 'fast';

// function getSpeed(speed: Speed): number {
//   switch (speed) {
//     case 'slow':
//       return 10;
//     case 'medium':
//       return 50;
//     case 'fast':
//       return 200;
//   }
// }

// // 使用例
// const slowSpeed = getSpeed('slow');
// const mediumSpeed = getSpeed('medium');
// const fastSpeed = getSpeed('fast');

// // 使用例
// declare function addEventListener(
//   arg: string,
//   event: any,
//   event2?: { capture: boolean; once: boolean }
// ): any;

// declare const sample: string;

// addEventListener('foobar', () => {});
// addEventListener('event', () => {}, true);
// addEventListener('event2', () => {}, {});
// addEventListener('event3', () => {}, {
//   capture: true,
//   once: false
// });

// interface Iobj {
//   id?: never;
//   object;
// }
// function giveId<T>(obj: T): T & { id: string } {
//   const id = '本当はランダムがいいけどここではただの文字列';
//   return {
//     ...obj,
//     id
//   };
// }

// // 使用例
// const obj1: { id: string; foo: number } = giveId({ foo: 123 });
// const obj2: { id: string; num: number; hoge: boolean } = giveId({
//   num: 0,
//   hoge: true
// });

// // エラー例
// const obj3: {
//   id: string;
//   piyo: string;
// } = giveId({
//   foo: 'bar'
// });
