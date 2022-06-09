const { log } = require("./3.4.2_console");

const timeout = setTimeout(() => {
  log("1.5초 후에 실행");
}, 1500);

const interval = setInterval(() => {
  log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  log("실행되지 않는다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  log("즉시실행");
});

const immediate2 = setImmediate(() => {
  log("실행되지 않습니다");
});

clearImmediate(immediate2);

//mdn에서의 window.setImmediate는 비표준 -> node 에서는 사용은 가능하다 메서드에 대한 설명 없이 any로
