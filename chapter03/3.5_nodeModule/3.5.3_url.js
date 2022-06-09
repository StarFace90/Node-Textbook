// 인터넷 주소를 쉽게 조작하도록 도와주는 모듈

/**
 *  * url 처리방식
 * ?  WHATWG 방식 : node 7버전에서 추가
 * ? 기존 node 방식
 *
 */

const url = require("url");
const log = console.log;
const { URL } = url;

const myURL1 = new URL(`http://www.yes24.com/Product/Goods/91213376`);
const myURL2 = new URL(
  `http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor`
);
log(`-------------------WHATWG 방식---------------------------------`);
log(`new URL:`, myURL2);
log(
  `url.format: 분해되었던 url객체를 다시 원래 상태로 조립: 레거시코드-> WHATWG URL API를 대신 사용`,
  url.format(myURL2)
);

log(`---------------------기존 Node 방식-----------------------------------`);

const parsedUrl = url.parse(
  `http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor`
);

log(`url.parse:`, parsedUrl);
log(`url.format`, url.format(parsedUrl));
