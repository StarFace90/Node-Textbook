const http = require("http");
const port = 8080 || process.env.PORT;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 응답에 대한 정보 기록 [헤더]
    res.write(`<h1>Hello Node!</h1>`); // [body]
    res.end(`<p>Hello Server!</p>`); // 응답 종료
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}에서 서버가 실행됩니다`);
  });
