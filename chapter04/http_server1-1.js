const http = require("http");
const port = 8080 || process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`<h1>Hello Node!</h1>`);
  res.end(`<p>Hello Server!</p>`);
});

server.listen(port);

server.on("listening", () => {
  console.log(`http://localhost:${port}에서 서버가 실행됩니다`);
});

server.on("error", (error) => {
  console.error(error);
});
