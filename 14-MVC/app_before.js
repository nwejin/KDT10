const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로 부터 받아온 데이터 댓글 목록
const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요~",
  },
  {
    id: 2,
    userid: "hello",
    date: "2022-11-31",
    comment: "안녕하세요~",
  },
  {
    id: 3,
    userid: "lastday",
    date: "2022-11-30",
    comment: "오늘은 11월 마지막",
  },
  {
    id: 4,
    userid: "coffee",
    date: "2023-11-30",
    comment: "이제 12월이네~",
  },
];

const userInfo = {
  realId: "helloworld",
  realPw: "1234",
  name: "홍길동",
  age: 20,
};
// [before] MVC 적용 전 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어지기에 유지보수성 하락

// GET /
app.get("/", (req, res) => {
  res.render("index");
});

// GET / comments
app.get("/comments", (req, res) => {
  console.log(comments); // [{}, {}, {},{}]
  res.render("comments", { commentInfos: comments });
  // res.render(ejs파일명, {전달 데이터 (객체 형태)})
  // comentInfos라는 이름으로 배열 전송
});

// GET / comment/:id -> 변하는 값을 쓰기 위해 :(콜론) + 변수이름
app.get("/comment/:id", (req, res) => {
  // req.query : /comment?id = 1
  // req.params : /comment:id
  console.log(req.params); // {id: '1'} : 라우트 매개변수에 대한 정보가 담겨 있다.
  console.log("id >", req.params.id);

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments[commentId - 1]);

  //존재하지 않는 댓글 id 접속 시 404 페이지 이동
  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  console.log(typeof commentId); // string

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지 이동
  if (isNaN(commentId)) {
    return res.render("404");
  }

  // 배열 번호로 전달하여 객체 하나하나 접근이 가능하도록 [commentId - 1]
  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// GET /user
app.get("/user", (req, res) => {
  res.render("user", { userInfo });
});

// 404 error 처리 : 맨 마지막에 라우트로 선언해야한다!, 위에다 하게 되면 아래 코드들이 무시되기에 아래 필수
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
