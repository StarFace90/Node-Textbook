//  쿠키가 나인지 식별!!

const http = require("http");
//const fs = require("fs").promises;
const url = require("url");

const parseCookies = (cookie = "") => {
  // [ 'myCookies=today' ] -> [ [ 'myCookies','today' ] ]
  // -> [ 'myCookies', 'today' ] ->{ myCookies: 'today' } ->
  return cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v); //? 암호화된 Uniform Resource Identifier(URI) 컴포넌트 해독!
      return acc;
    }, {});
  //console.log(cookie); // myCookies=today
};
http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log("cookies", cookies);

    //! 주소가 /login으로 시작하는 경우

    if (req.url.startsWith("/login")) {
      //!!! queryString -> 레거시 코드 => URLSearchParmas로 대체
      const myURL = new URL(req.url, "https://localhost:4000");
      console.log(myURL);
      //   searchParams: URLSearchParams { 'name' => 'name1' },
      //   search: '?name=name1',
      //   href: 'https://localhost:4000/login?name=name1',
      const name = myURL.searchParams.get("name");

      //   const name = url.searchParams.get("name");
      //   const { query } = url.parse(req.url); //! { query: "name=?" }
      //   console.log("query", { query }); //? query { query: 'name=name' }
      //   const { name } = params.get("name"); //!name { name: undefined }

      console.log("name", name);

      //? 쿠키 유효시간을 현재 시간 + 5분으로 설정
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toUTCString()}; HttpOnly; Path=/`,
      });
      res.end();

      // ! name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end(`${cookies.name}님 안녕하세요!`);
    } else {
      try {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("haha");
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err.massage);
      }
    }
  })
  .listen(4000, () => {
    console.log("http://localhost:4000 에서 서버가 실행됩니다");
  });
