const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    // force: false => 테이블이 없는 경우 생성
    // force; true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod에서 사용 불가)
    app.listen(PORT, () => {
      console.log(`${PORT} is open`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
