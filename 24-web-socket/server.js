const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// express 서버와 web socket 서버를 연결 (같은 포트 공유)
const wsServer = new ws.Server({ server: server });

const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on("connection", (socket) => {
  console.log("[클라이언트 연결 완료]");
  sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

  // 클라이언트의 메세지 수신
  socket.on("message", (message) => {
    console.log("클라이언트로 부터 받은 메세지 >", message);

    // 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
    // = 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)
    // 여러창을 켜서 입력하면 동시에 반영
    sockets.forEach((socket) => {
      // forEach를 주석처리하면 브로드캐스팅이 안되고 하나의 창에서만 보여짐
      socket.send(`${message}`);
    });
  });

  socket.on("error", (error) => {
    console.log("에러 발생 > ", error);
  });

  socket.on("close", () => {
    console.log("[클라이언트 연결 종료]");
  });
});
