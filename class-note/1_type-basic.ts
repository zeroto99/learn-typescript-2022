let str = 'hello';

const strTs: string = 'hello';
const num: number = 12;
const arr: Array<number> = [1,3];
const heroes: Array<string> = ['capt', 'thor', 'hulk'];
const items: number[] = [1,2];

// 튜플 : 배열의 
const address: [string, number] = ['apple', 100];

// 객체
const obj: object = {};

// const person: object = {
//   name: 'lee',
//   age: 100
// };

const person: { name: string, age: number} = {
  name: 'lee',
  age: 20
};

// 진위값
const show: boolean = true;