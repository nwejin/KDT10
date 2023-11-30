const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [before] MVC 적용 전 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어지기에 유지보수성 하락

// [After] MVC 적용 후 => Router 객체로 라우터 분리
const indexRouter = require("./routes/index.js"); // 파일이름이 index면 생략가능
app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

const userRouter = require("./routes/user.js");
app.use("/user", userRouter);

// 11/30 실습
const loginRouter = require("./routes/login.js");
app.use("/login", loginRouter);

// 404 error 처리 : 맨 마지막에 라우트로 선언해야한다!, 위에다 하게 되면 아래 코드들이 무시되기에 아래 필수
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
