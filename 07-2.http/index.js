// http 모듈로 웹 서버 생성

const http = require("http");
const fs = require("fs"); // 파일 관련 내장 모듈

const server = http.createServer(function (req, res) {
  // req : request 객체 (클라이언트에서 서버로 들어온 요청)
  // res : response 객체 (서버에서 클라이언트로 보내는 응답)

  // 응답 head, 본문, end 지정
  //   res.writeHead(200, { "content-type": "text/html; charset=utf8" }); // 응답 헤더
  //   res.write("<h1> Hello, Node.js! </h1>"); // 응답 본문
  //   res.end("<p> My First node Server! </p>"); // 응답 종료
  // 위 코드는 localhost:8000 접속시 일어나는 코드

  // 예외처리 -> try - catch문 (예외처리를 해야 서버가 죽지 않음)
  try {
    const data = fs.readFileSync("./inde.html");
    res.writeHead(200, { "content-type": "text/html; charset=utf8" });
    res.write(data);
    res.end();
  } catch (error) {
    const data = fs.readFileSync("./404.html");
    res.writeHead(200, { "content-type": "text/html; charset=utf8" });
    res.write(data);
    res.end();
  }
});

// 코드에 수정 사항이 있으면 터미널에서 새로고침 필수

const PORT = 8000;

//request 이벤트
server.on("request", function (req, res) {
  console.log("request 이벤트 발생!", req.url);
});

//connection 이벤트: 클라이언트가 접속(클라이언트-서버가 연결되었을때) 발생
server.on("connection", function (req, res) {
  console.log("connection 이벤트 발생!");
});

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log("10초가 지나서 서버 종료");
//   server.close(); //서버 종료 메서드
// }, 10000);
