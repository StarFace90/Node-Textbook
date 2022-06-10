/**
 * 다양한 방식의 암호화를 도와주는 모듈 , 익혀두면 실제 서비스에도 적용할 수 있어서 좋다
 *
 * ? 1. 단방향 암호화 : 비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화 한다 => 복호화 할 수 없는 암호화 방식
 *     ? 복호화 : 암호화된 문자열을 원래 문자열로 되돌려 놓는 것을 의미한다
 * ?  => 즉, 단방향 암호화는 한번 암호화 하면 원래 문자열을 찾을 수 없다. 복호화 할 수 없으므로 암호화 보다는 해시 함수라고 부르기도 한다
 *
 * * 단방향 암호화 알고리즘은 주로 해시 기법을 사용한다 : 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔 버리는 방식이다
 */

const crypto = require("crypto");
const log = console.log;

log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호486").digest("base64")
);

log("hex:", crypto.createHash("sha512").update("비밀번호486").digest("hex"));

log(
  "base64: ",
  crypto.createHash("sha512").update("20220609").digest("base64")
);

// ? createHash(알고리즘) sha512가 보편적,  md5, sha1은 취약점 발견
// ? 더 강화된 알고리즘 들 찾아! sha3 등

// ? digest(인코딩) : 인코딩할 알고리즘 넣는다 : base64, hex, latin1등 이 있고, base64가 결과 문자열이 가장 짧아 애용된다
