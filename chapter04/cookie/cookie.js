const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.headers.cookie);
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Set-Cookie": "cookie=mycookie",
    });
    res.end("쿠키~~!");
  })

  .listen(4000, () => {
    console.log("http://localhost:4000번 포트에서 서버가 실행됩니다.");
  });
