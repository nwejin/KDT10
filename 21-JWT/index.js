const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;

const SECRET = "9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqVdfjfsahf";

const userInfo = { id: "jin", pw: "1234", name: "최진", age: 28 };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 토큰을 통해 있어야지 로그인한 사람이 그 사람이 맞는지 비교 검증 진행
// 프론트는 토큰을 어디에다 저장할지 고민해야한다.

// 로그인 요청
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;

    if (id === realId && pw === realPw) {
      // 토큰 생성
      // jwt.sign(payload, secretOrPrivateKey, [options, callback])
      const token = jwt.sign({ id: id }, SECRET);
      res.send({ isLogin: true, token });
    } else {
      res.send({ isLogin: false, msg: "로그인 정보가 올바르지 않습니다!" });
    }
  } catch (err) {
    console.error(err);
  }
});

// 토큰 검증 요청
app.post("/token", (req, res) => {
  console.log("token >", req.headers.authorization);
  if (req.headers.authorization) {
    // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTcwMjA5MjE5MX0.milsslqif5QmIlIpESUXBVwRHgDtI9Ta8JPNcFFQgUo'
    const authorization = req.headers.authorization.split(" ");
    console.log(authorization); // ['Bearer', 'token_string']
    const token = authorization[1];

    try {
      // 토큰 검증 : jwt.verify(token, secretkey)
      const result = jwt.verify(token, SECRET);
      console.log("result >", result);

      if (result.id === userInfo.id) {
        res.send({ isVerify: true, name: userInfo.name });
      } else {
        res.send({ isVerify: false, msg: "잘못된 접근입니다!" });
      }
    } catch (err) {
      console.log("verify err >", err);
      req.send({ isVerify: false, msg: "인증된 회원이 아닙니다!" });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
