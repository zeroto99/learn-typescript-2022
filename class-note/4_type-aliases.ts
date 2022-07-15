
// 인터페이스와 타입 별칭의 차이 
interface intPerson {
  name: string;
  age: number;
}

type tyPerson = {
  name: string;
  age: number;
}

let kim: intPerson = {
  name: '킴',
  age: 30
}

let kim2: tyPerson = {
  name: '킴',
  age: 30
}

// 타입을 정할 수 있는 모든 것에는 별칭을 붙일 수 있다
type MyString = string;
let testStr: MyString = 'hello';

// 별칭을 활용해서 쉽게 타입을 정의할 수 있고 코드 가독성도 높일 수 있다 
type Todo = { id: string; title: string; done: boolean };

function getTodo(todo: Todo) {}

// 타입 별칭과 인터페이스의 차이점 