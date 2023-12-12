const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const PORT = 8000;

const server = http.createServer(app);

const io = socketIO(server);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료 >", socket.id);

  // 같은 채팅방이니까 한족이 다른 유저로 접속을 해도 다른 브라우저 탭에도 나와야함
  // 실시간 동기화
  // 유저 1 입장 -> 유저 2페이지에 1입장 표시 and 유저 2입장 -> 유저 1페이지에 2입장 표시
  // emit() from server
  // socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
  // io.to(socket.id).emit(event_name, data): 소켓아이디에 해당하는 클라이언트에게만 전송

  // 전체 클라이언트에게 입장 안내
  io.emit("notice", `${socket.id} 님이 입장하셨습니다.`);
  io.to(socket.id).emit();

  //   io.emit("newChat");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
