const express = require("express");
const router = express.Router();
// controller 파일
const controller = require("../controller/Cmain");
// const user = require("../controller/Cuser");

// index.js => localhost:PORT/

// const comments = [
//   {
//     id: 1,
//     userid: "helloworld",
//     date: "2022-10-31",
//     comment: "안녕하세요~",
//   },
//   {
//     id: 2,
//     userid: "hello",
//     date: "2022-11-31",
//     comment: "안녕하세요~",
//   },
//   {
//     id: 3,
//     userid: "lastday",
//     date: "2022-11-30",
//     comment: "오늘은 11월 마지막",
//   },
//   {
//     id: 4,
//     userid: "coffee",
//     date: "2023-11-30",
//     comment: "이제 12월이네~",
//   },
// ];

/*
// GET /
router.get("/", (req, res) => {
  res.render("index");
});

// GET / comments
router.get("/comments", (req, res) => {
  console.log(comments); // [{}, {}, {},{}]
  res.render("comments", { commentInfos: comments });
  // res.render(ejs파일명, {전달 데이터 (객체 형태)})
  // comentInfos라는 이름으로 배열 전송
});

// GET / comment/:id -> 변하는 값을 쓰기 위해 :(콜론) + 변수이름
router.get("/comment/:id", (req, res) => {
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
*/

// Controller 연결
// 경로를 컨트롤러와 연결지어 사용 가능
router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

// router.get("/user", user.user);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용이 가능하다.
module.exports = router;
