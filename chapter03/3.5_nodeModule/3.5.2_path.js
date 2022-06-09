// 폴더와 파일의 경로를 쉽게 조작할 수 있도록 돕는 모듈

const log = console.log;
const path = require("path");
const name = __filename;

log(`path.sep: 경로의 구분자 `, path.sep);
log(`path.delimiter: 환경 변수의 구분자`, path.delimiter);
log(`--------------------------------`);
log(`path.dirname : 파일이 위치한 폴더 경로 `, path.dirname(name));
log(`path.extname : 파일의 확장자`, path.extname(name));
log(`path.basename: 파일의 이름(확장자포함)`, path.basename(name));
log(
  `path.basename: 파일의 이름(확장자없음)`,
  path.basename(name, path.extname(name))
);

log(`------------------------------`);
log(`path.parse: 파일 경로를 분리한다 root, dir, base..등`, path.parse(name));
// log(
//   `path.format: parse한 객체를 합친다`,
//   path.format({
//     dir: "",
//     name: "",
//     ext: "js",
//   })
// );

//* log(`path.normalize: 경로를 정상적인 경로로 변환`, path.normalize());

log(
  `path.isAbsolut: 파일의 경로가 절대경로(true)인지 상대경로(false)인지 파악`,
  path.isAbsolute("./path.js") // false
);

log(`------------------------------`);
log(
  `path.relative : 경로를 두개 넣으면 첫번째 -> 두번째 경로로 가는 법을 알려준다`,
  path.relative(`./path.js`, "../3.3_module/es5.js")
);

log(
  `path.join: 여러 인수를 넣으면 하나의 경로로 알아서 합친다`,
  path.join("/a", "/b", "c") //*   /a/b/c
);
log(
  `path.resolve: 여러 인수를 넣으면 하나의 경로로 알아서 합친다`,
  path.resolve("/a", "/b", "c") //*  /b/c
);

/**
 * ? join-resolve 차이 : /를 만나면 path.resolve는 절대경로로 인식
 * ? path.join은 상대경로로 처리한다
 */
