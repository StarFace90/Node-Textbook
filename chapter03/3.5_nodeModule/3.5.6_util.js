const util = require("util");
const crypto = require("crypto");

const log = console.log;

// deprecate : 더이상 사용되지 않고 사라질 것 (기능은 있으나 곧 없앨 예정)
const dontUseMe = util.deprecate((x, y) => {
  log(x + y);
}, `[NOTICE] - dontUseMe 함수는 곧 없어질 예정이니 더 이상 사용하지 마세요 !`);

dontUseMe(1, 2);

/**
 * util.promisify : 콜백 패턴을 프로미스 패턴으로
 * util.callbackify: 프로미스패턴을 콜백 패턴으로
 */
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    log(buf.toString("base64"));
  })
  .catch((err) => {
    console.error(err);
  });
