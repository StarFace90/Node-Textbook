/**
 * ? 어떤 문자열은 서로 다르지만 암호화 되도 똑같은 출력 문자열로 바뀌어서 '충돌'이 발생하는 일이 생긴다
 * ? 그래서 더 강력한 알고리즘이 필요하다
 *
 * * 현재는 주로 pbkdf2나 bcrypt, scrypt 등의 알고리즘으로 비밀번호를 암호화 하고 있다.
 * * 노드에서는 pbkdf2를 지원하고  salt를 사용하고, 해시 알고리즘을 반복해서 적용하는 방식이다
 */

const crypto = require("crypto");
const log = console.log;

//! randomBytes이므로 매번 실행할 때 마다 결과가 달라진다.
//! 따라서 salt를 잘 보관하고 있어야 비밀번호를 찾을 수 있다.
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  log("salt:", salt);
  // 서비스 개발시 비밀번호는 직접 적지 않는다
  crypto.pbkdf2("비밀번호486", salt, 100000, 64, "sha512", (err, key) => {
    log(`password:`, key.toString("base64"));
  });
});

// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하다
