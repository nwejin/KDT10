const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  //   res.status(400).send("Error MSG!"); // 오류 만들기
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//fetch
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send({
    name: req.body.name,
    gender: req.body.gender,
    msg: "fetch 성공!",
  });
});

// 실습 1 페이지 띄우기 데이터 보내기 하나씩
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/axiosGet", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 실습 2
const userId = "최진";
const userPw = "1234";

// 데이터 띄우기
app.get("/practice2", (req, res) => {
  res.render("practice2");
});

// 데이터 보내기
app.post("/axios2", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  //아이디, 패스워드를 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사, 결과 값 반환

  if (userId === req.body.userId && userPw === req.body.userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is open`);
});
