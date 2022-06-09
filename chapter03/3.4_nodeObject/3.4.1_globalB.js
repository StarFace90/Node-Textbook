const A = require("./3.4.1_globalA");

global.message = "안녕하세요!";

console.log(A());

// * 권장하지는 않는다
// * 파일이 많아지게 되면 관리가 안된다 -> 모듈로 할 것
