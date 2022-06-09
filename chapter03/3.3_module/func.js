const { odd, even } = require("./var");
//! 구조분해 할당으로 쉽게 !

//console.log(value); // { odd: '나는 홀수', even: '나는 짝수' }

//const odd = value.odd;
//const even = value.even;

//console.log(odd, even); // '나는 홀수 나는 짝수'

const checkOddOrEven = (number) => {
  if (number % 2) return odd;
  else return even;
};

checkOddOrEven(3);
checkOddOrEven(2);

// ! 이런 식으로 또 다른 파일로 내보내기 할 수 있다. (모듈화로 파일간의 중복 방지)
module.exports = checkOddOrEven;
