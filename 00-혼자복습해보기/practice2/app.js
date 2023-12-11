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

app.get("/getForm", (req, res) => {
  res.send("get 요청 성공!");
});

app.post("/postForm", (req, res) => {
  res.send("post 요청 성공!");
});

app.listen(PORT, () => {
  console.log(`${PORT} OPEN`);
});
