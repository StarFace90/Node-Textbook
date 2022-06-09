const { URL } = require("url");
const log = console.log;

const myURL = new URL(
  `http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript`
);

log("searchParams: ", myURL.searchParams);
// 'page' => '3',
// 'limit' => '10',
// 'category' => 'nodejs',
// 'category' => 'javascript'

log(
  `searchParams.getAll : 키에 해당하는 모든 값을 가져온다 `,
  myURL.searchParams.getAll("category")
); // ['nodejs', 'javascript']
log(
  `searchParams.get: 키에 해당하는 첫 번째 값만 가져온다`,
  myURL.searchParams.get("limit")
); //10
log(
  `searchParams.has: 해당 키가 있는지 없는지 검사한다`,
  myURL.searchParams.has("page")
); // true

log(
  `searchParams.keys: 모든키를 이터레이터 객체로 가져온다 `,
  myURL.searchParams.keys()
); // Iterator { 'page', 'limit', 'category', 'category' }
log(
  `searchParams.value: 모든 값을 이터레이터 객체로 가져온다`,
  myURL.searchParams.values()
); // Iterator { '3', '10', 'nodejs', 'javascript' }

// * append(키, 값) : 해당 키를 추가한다 , 같은 키의 값이 있다면 유지하고 하나 더 추가한다
myURL.searchParams.append("filter", "es5");
myURL.searchParams.append("filter", "es6");
log(myURL.searchParams.getAll("filter")); // ['es5', 'es6']

// * set(키, 값): append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가한다
myURL.searchParams.set("filter", "es6");
log(myURL.searchParams.getAll("filter")); //['es6']

myURL.searchParams.delete("filter", "es5");
log(myURL.searchParams.getAll("filter")); // []

//* toString() : 조작한 searchParams 객체를 다시 문자열로 만든다 이 문자열을 search에 대입하면 주소 객체에 반영된다
log(`seachParams.toString:`, myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
//seachParams.toString: page=3&limit=10&category=nodejs&category=javascript

//? query 보다 searchParams가 유용한 이유는 query의 경우 querystring 모듈을 한번 더 사용해야 하기 때문이다 !
