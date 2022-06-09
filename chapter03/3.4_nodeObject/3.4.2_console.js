/**
 * console 객체는 보통 디버깅을 위해 사용한다
 */

let log = console.log;
const time = console.time;
const timeEnd = console.timeEnd;
const error = console.error;
const dir = console.dir;
const trace = console.trace;
const table = console.table;

log("A");

const string = "안녕하세요";
const number = 1;
const boolean = true;

const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

//? time과 timeEnd는 같은 레이블을 갖고 있어야 시간 측정이 가능하다 ()안에 들어갈 이름이 같아야 한다는 뜻!

time("전체시간");
log(string, number, boolean);
error("에러메시지 출력");

table([
  { name: "우디", job: "카우보이" },
  { name: "버즈", job: "우주비행사" },
]);

dir(obj, { colors: false, depth: 2 });
dir(obj, { colors: true, depth: 1 });

time("시간측정");
for (let i = 0; i < 100000; i++) {}
timeEnd("시간측정");

let codeB = () => {
  trace("에러위치");
};

let codeA = () => {
  codeB();
};

codeA();

timeEnd("전체시간");

module.exports = {
  log,
  time,
  timeEnd,
  error,
};

//exports.log = log;
