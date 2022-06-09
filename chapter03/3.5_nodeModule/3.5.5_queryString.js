const url = require("url");
const queryString = require("querystring");
const log = console.log;

const pasedUrl = url.parse(
  `http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript`
);

const query = queryString.parse(pasedUrl.query);

log(`queryString.parse: url의 쿼리 부분을 자바스크립트 객체로 분해한다`, query);
// queryString.parse: [Object: null prototype] {
//     page: '3',
//     limit: '10',
//     category: [ 'nodejs', 'javascript' ]
//   }

log(
  `queryString.stringify: 분해된 쿼리 객체를 문자열로 다시 조립한다 `,
  queryString.stringify(query)
);
// queryString.stringify: page=3&limit=10&category=nodejs&category=javascript
