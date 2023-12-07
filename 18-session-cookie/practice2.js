const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 미들웨어 등록
app.use(
  session({
    secret: "secrectKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

// 유저 정보
const userInfo = { id: "banana", pw: "1234" };

app.get("/", (req, res) => {
  // req.session.user 값이 있는지 검사를 해서 isLogin변수로 로그인 여부 보내기
  const user = req.session.user;
  console.log("req.session.user > ", user); // 값이 없을때는 undefined

  if (user !== undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
app.post("/login", (req, res) => {
  const { id, pw } = req.body;

  if (id === userInfo.id && pw === userInfo.pw) {
    req.session.user = id;
    res.redirect("/");
  } else {
    res.send("로그인 실패!");
  }
});

//로그아웃 요청
app.get("/logout", (req, res) => {
  const user = req.session.user;
  if (user !== undefined) {
    req.session.destroy((err) => {
      res.redirect("/");
    });
  } else {
    res.send("잘못된 접근입니다!");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
