const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`<h1>Hello Node1</h1>`);
  res.end(`<p>Hello Server!</p>`);
});

server.listen(8080);

server.on("listening", () => {
  console.log(`http://localhost:8080에서 서버가 실행됩니다`);
});

server.on("error", (error) => {
  console.error(error);
});

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`<h1>Hello Node2</h1>`);
  res.end(`<p>Hello Server!</p>`);
});

server2.listen(8081);

server2.on("listening", () => {
  console.log(`http://localhost:8081에서 서버가 실행됩니다`);
});

server2.on("error", (error) => {
  console.error(error);
});

// 한번에 여러 서버를 실행할 수 있다
