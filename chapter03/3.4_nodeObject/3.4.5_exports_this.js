const odd = "나는 홀수 ";
const even = "나는 짝수";

console.log(module.exports === exports); // true;

// 한가지만 모듈로 빼고 싶으면, module.exports = 1가지

/**
 * node 에서의  최상위 스코프에 존재하는 this는 module.exports 나 exports 객체를 가리킨다
 * 함수 선언문 내부의 this는 global 객체를 가리킨다
 */
console.log(`===================this========================`);
console.log(this); // {}
console.log(this === module.exports); // true
console.log(this === exports); // true

function whatIsThis() {
  console.log(`function`, this === exports, this === global); // false, true
}
whatIsThis();

console.log(`==============================================`);
console.log(`==============================================`);
console.log(`===================require=====================`);

/**
 * ? require 는 함수이고, 함수는 객체이므로 require는 객체로서 몇가지 속성을 가지고 있다
 */

console.log("require가 가장 위에 오지 않아도 된다");

module.exports = "찾아라!";

require("../3.3_module/var");

console.log("require cache입니다");
//console.log(require.cache); // * 한번 require한 파일은 require.cache에 저장 -> 다음번에는 여기서 재사용된다
console.log("require main입니다");
console.log(require.main === module);
console.log(require.main.filename);

// fs, require 및 cache 등은 주의해서 사용할 것
// 스크립트를 잘 못 실행시 파일 및 개인정보 등 유출 우려
