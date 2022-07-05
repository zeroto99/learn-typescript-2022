interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스 
let lee: User = {
  age: 22,
  name: 'lee'
}


// 함수에 활용한 인터페이스 
function getUser(user: User) {
  console.log(user)
}

const newUser = {
  name: 'kim',
  age: 33
}

getUser(newUser);


// 함수의 스펙(구조)에 인터페이스를 활용 
interface SumFunction {
  (a: number, b: number): number
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}


// 인덱싱 
interface StringArray {
  [index: number]: string
}

let arr2: StringArray = ['a', 'b', 'c'];
arr2[0]; // 'a'
// arr[0] = 10;


// 딕셔너리 패턴 
interface StringRegexDictionary {
  [key: string] : RegExp;
}

let obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj2['cssFile'] = 'a'

Object.keys(obj2).forEach(function(value) {

})


// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let Lee: Developer = {
  name: 'Lee',
  age: 100,
  language: 'ts'
}