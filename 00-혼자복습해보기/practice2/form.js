const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("vews", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("form01");
});

app.get("/getForm", (req, res) => {
  console.log(req.query); // { ID: '1', PW: '1' }
  res.render("result01", {
    title: "GET",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body); // { ID: '1', PW: '1' }
  res.render("result01", {
    // result01 페이지를 랜더링 하고, title, userInfo 정보를 보냄
    title: "POST",
    userInfo: req.body,
  });
});

app.get("/1", (req, res) => {
  res.render("formprac1");
});

app.post("/1/postForm1", (req, res) => {
  console.log("userInfo1 > ", req.body);
  res.render("result01", {
    userInfo1: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
