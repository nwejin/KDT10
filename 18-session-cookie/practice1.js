const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());

// 쿠키 옵션
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 60 * 1000, // 1시간
};

app.get("/", (req, res) => {
  //   res.cookie("popup", "hide", cookieConfig);
  // *다음과 같이 기능 구현하였는데, 굳이 이렇게 하지 않아도 됩니다.
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  // console.log('req.cookies.popup >> ', req.cookies.popup);

  // TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기]
  console.log(req.cookies.popup);
  res.render("practice1", { popup: req.cookies.popup });
});

// popup: req.cookies.popup;
// app.get("/example", (req, res) => {
//   res.cookie("popup", "hide", cookieConfig);
//   req.body(req.cookies);
//   console.log(req.body);
// });

app.post("/setcookie", (req, res) => {
  res.cookie("popup", "hide", cookieConfig);
  // TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
  //   console.log(req.body);
  res.send("쿠키 설정 성공!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
