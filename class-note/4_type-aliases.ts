
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
// 인터페이스로 정의를 하면 인터페이스명을 ctrl 누른 채로 클릭하면 링크가 되서 해당 타입의 내용을 확인할 수 있다.
// 타입의 경우, 타입에 대한 별칭을 부여하거긴 때문에 호버를 통해 타입 내용을 알 수 있다. 
// 타입은 확장이 되지 않는다 
// 인터페이스는 확장이 가능하다. 
// 좋은 소프트웨어는 언제나 확장에 용이해야 한다는 점에서 인터페이스로 선언하는게 좋다.