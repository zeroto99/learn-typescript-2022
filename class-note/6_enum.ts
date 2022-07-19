
// 숫자형 이넘
enum Shoes {
  Nike,
  Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Shoes2 {
  Nike = 10,
  Adidas // 11이 됨 
}


// 문자형 이넘 
enum Brands {
  Nike = '나이키',
  Adidas = '아디다스'
}

let myBrand = Brands.Nike;
console.log(myBrand); // '나이키'


// 이넘 활용 사례
function askQuestion(answer: string) {
  if(answer == 'yes') {
    console.log('정답입니다');
  }
  if(answer == 'no') {
    console.log('오답입니다');
  }
}

askQuestion('yes');
// 에러가 떠야할 케이스인데 에러가 안뜨는 문제 발생! 
askQuestion('y');
askQuestion('Yes');
askQuestion('예스');

// askQuestion의 파라미터 타입을 문자열로 정의했기 때문에 문자열이면 뭐든 조건을 통과할 수 있다. 
// => 이념을 통해 제약하기 
enum Answer {
  Yes = 'Yes',
  No = 'N',
}

function enumAskQuestion(answer: Answer) { // answer 파라미터를 이넘으로 지정 
  // 들어올 파라미터의 값을 단순한 문자열 비교가 아니라 이넘에서 지정한 데이터 중에 하나인지를 비교한다
  if(answer == Answer.Yes) { 
    console.log('정답입니다');
  }
  if(answer == Answer.No) {
    console.log('오답입니다');
  }
}

enumAskQuestion(Answer.Yes);
// enumAskQuestion('Yes'); // 에러가 뜨는 이유 -> 이넘을 통해 타입을 정의했기 때문에 이넘에서 제공하는 데이터만 넣을 수 있다. 