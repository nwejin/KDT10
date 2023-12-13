const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("vews", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("formprac2");
});

const userId = "1";
const userPw = "1";

app.post("/axiosForm", (req, res) => {
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
  console.log(`http://localhost:${PORT}`);
});
