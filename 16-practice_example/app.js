const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user.js");
app.use("/user", userRouter); // user가 기본 경로

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`${PORT} PORT OPEN! `);
});
