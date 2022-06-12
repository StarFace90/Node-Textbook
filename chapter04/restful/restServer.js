const http = require("http");
const fs = require("fs").promises;
const log = console.log;

const port = 8080 || process.env.PORT;

const users = {}; // 데이터 저장용

http
  .createServer(async (req, res) => {
    try {
      log(req.method, req.url);

      //? GET요청
      if (req.method === "GET") {
        // 주소가 '/'
        if (req.url === "/") {
          const data = await fs.readFile("./views/restFront.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data); // 함수를 종료시키고 다음 코드ㄹ로 이어지기 위해 return을 앞에 붙인다

          // 주소가 '/about'
        } else if (req.url === "/about") {
          const data = await fs.readFile("./views/about.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data);

          // 주소가 '/users'
        } else if (req.url === "/users") {
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(JSON.stringify(users));
        }
        // 주소가 '/'도 '/about'도 아니라면
        try {
          const data = await fs.readFile(`.${req.url}`);
          return res.end(data);
        } catch (err) {
          // 404 Not Found
        }
      }
      //? POST 요청이 들어올시!
      else if (req.method === "POST") {
        if (req.url === "/user") {
          let body = "";

          req.on("data", (data) => {
            body = body + data;
            log("body", body);
          });
          // 요청의 body를 다 받은 후에 실행
          return req.on("end", () => {
            log("POST-body", body);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201);
            res.end("등록 성공");
          });
        }
        // ? PUT 요청일 시 !
      } else if (req.method === "PUT") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          let body = "";
          req.on("data", (data) => {
            body = body + data;
            log("body", body);
          });
          return req.on("end", () => {
            log("PUT - body", body);
            users[key] = JSON.parse(body).name;
            return res.end(JSON.stringify(users));
          });
        }
        // ? DELETE 요청일 시 !
      } else if (req.method === "DELETE") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          delete users[key];
          return res.end(JSON.stringify(users));
        }
      }
      res.writeHead(404);
      return res.end("NOT Found");
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}/에서 서버가 실행됩니다`);
  });
