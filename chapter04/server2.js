const http = require("http");
const fs = require("fs").promises;
const port = 8080 || process.env.PORT;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./server2.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" }); // 500: 내부 서버 오류
      res.end(err.message);
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}에서 서버가 실행됩니다`);
  });
