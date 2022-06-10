const crypto = require("crypto");
const log = console.log;

/**
 * ? 양방향 대칭형 암호화 : 암호화된 문자열을 복호화 할 수 있으며, 키(열쇠)라는 것이 필요하다
 * ? 대칭형 암호화에서 암호를 복호화하려면 암호화할때, 사용한 키와 같은 키를 사용해야한다
 */

const algorithm = "aes-256-cbc";
// ? key는 32바이트여야하고
// ? iv는 16바이트여야한다

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update(
  "암호화할 문장을 여기다 적어주세요",
  "utf8",
  "base64"
);
result += cipher.final("base64");
log("암호화:", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
log("복호화:", result2);

//! 책 대로 따라하면 아래와 같은 에러가 발생한다
//? 아래의 링크를 참조하여 문제를 해결하였다.
//? https://www.geeksforgeeks.org/node-js-crypto-createcipheriv-method/
// [error] node:internal/crypto/cipher:116
//     this[kHandle].initiv(cipher, credential, iv, authTagLength);
//                   ^

// TypeError: Invalid initialization vector
