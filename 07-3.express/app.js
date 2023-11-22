// app.js = 서버 - index.ejs = 클라이언트(프론트) 로 인식

const express = require("express");

const app = express(); // app에 express 변수 선언
const PORT = 8000; // port번호 생성

// view engine을 ejs로 등록하겠다 (express에 사용할 템플릿 엔진 종류를 ejs로 등록)
app.set("view engine", "ejs");

// 템플릿 엔진 파일(.ejs)을 저장할 위치 등록(.views로 하겠다)
app.set("views", "./views");

// static 메소드로 정적 파일 사용을 위해 미들웨어 ..
// 프론트 - 미들웨어 - 서버
// static 미들웨어 등록 (정적 파일 로드 ex. css, js)
// static(뒤) 이라는 실제 폴더를 static(앞) 이름으로 접근하겠다.
// 뒤에는 실제 폴더 경로, 앞에는 index.ejs
app.use("/public", express.static(__dirname + "/static")); //현재 있는 폴더까지의 경로 __dirname
console.log(__dirname);

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// localhost:8000/ 경로로 접속했을 때
app.get("/", function (req, res) {
  // index라는 파일명을 찾아서 해당 파일 랜더
  res.render("index", {
    btns: ["사과", "오렌지", "키위"],
    isLogin: true,
    me: {
      name: "jin",
      msg: "안녕~",
    },
  });
  // 값 보내기 , {} - 객체 형태
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(PORT, function () {
  console.log(`server listen on ${PORT}`);
}); // 포트 열기
