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

// 사용자 id 모음 객체
const userObjs = {};

// io.on(): socket 관련한 통신 작업 처리
io.on("connection", (socket) => {
  console.log("서버 연결 완료 >", socket.id);

  // 같은 채팅방이니까 한족이 다른 유저로 접속을 해도 다른 브라우저 탭에도 나와야함
  // 실시간 동기화
  // 유저 1 입장 -> 유저 2페이지에 1입장 표시 and 유저 2입장 -> 유저 1페이지에 2입장 표시
  // emit() from server
  // socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
  // io.to(socket.id).emit(event_name, data): 소켓아이디에 해당하는 클라이언트에게만 전송

  // [실습3]
  // 전체 클라이언트에게 입장 안내
  //   io.emit("notice", `${socket.id} 님이 입장하셨습니다.`);

  // [실습4]
  socket.on("send", (data) => {
    console.log("send이벤트로 받은 data > ", data);

    // [실습 5] DM인지 아닌지 구분
    // dm: io.to(socket.id).emit() -> 소켓아이디에 해당하는 클라이언트에게만 전송

    if (data.dm === "all") {
      // 전체 발송
      io.emit("newMessage", { id: data.id, msg: data.msg });
    } else {
      const dmSocketId = data.dm;
      const sendData = {
        id: data.id,
        msg: data.msg,
        dm: "(DM) ",
      };

      // dm을 받는 사람한테 메세지 전송
      io.to(dmSocketId).emit("newMessage", sendData);
      //  dm 보낸 사람한테도 메세지 띄우기
      socket.emit("newMessage", sendData);
    }
  });

  // [실습 5] DM step1
  socket.on("setUserList", (data) => {
    console.log(`유저 입장 : ${data.id}`);
    // 입장 전체 공지
    io.emit("notice", `${data.id} 님이 입장하셨습니다.`);

    // 전체 사용자 아이디 모음 객체 전달
    // 새로운 유저 추가
    // {data.id : data.id}
    userObjs[data.id] = data.id;
    socket.emit("enrtySuccess", socket.id); // 현재 입장한 사람에게 입장완료
    io.emit("updateUsers", userObjs); // 전체 사용자에게 사용자 업데이트
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
