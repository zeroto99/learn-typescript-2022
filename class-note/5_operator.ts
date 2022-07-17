// 연산자를 이용한 타입 정의 - Union Type

function strMsg(value: string) {
  console.log(value);
}

strMsg('hello');
// 에러 발생
// strMsg(100);
// strMsg(false);

function anyMsg(value: any) {
  console.log(value);
}

// 에러가 발생하지 않지만 타입을 정의하는 장점이 사라짐 
anyMsg('hello');
anyMsg(100);
anyMsg(false);

// or 연산자 사용 => ts에서는 유니온 타입이라고 부르며 | 으로 표현함 
function orMsg(value: string | number) {
  console.log(value);
}

orMsg('hello');
orMsg(100);

// 유니온 타입의 장점
// 유니온 타입은 특정 변수나 파라미터에 한가지 이상의 타입을 지정하고 싶을 때 사용한다. 
let lee: string | number | boolean;

function logMsg(value: string | number) {
  if(typeof value == 'number') {
    value.toLocaleString();
  } 
  if(typeof value == 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

// 유니온 타입의 특징
interface Dev {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입은 인터페이스 2개를 연결했을 때는 공통된 속성만 접근할 수 있다. 
function askSomeone(someone: Dev | Person) {
  someone.name;

  // 에러 발생
  // someone.skill;
  // someone.age;
}

// 인터섹션 타입 소개 
let park: string | number | boolean;
let jung: string & number & boolean;

function chkInter(someone: Dev & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

// 유니온 타입과 인터섹션 타입의 차이점

function unionType(someone: Dev | Person) {

}

unionType({ name: '디벨로퍼', skill: '웹개발' });
unionType({ name: '캡틴', age: 100 });

function intersectionType(someone: Dev & Person) {

}

// 에러 발생
// intersectionType({ name: '디벨로퍼', skill: '웹개발' });
intersectionType({ name: '디벨로퍼', skill: '웹개발', age: 20 });