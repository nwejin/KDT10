// [After] Model 연결
const comments = require("../model/Comment");

// [Before] Model 연결 전
// (임시) DB로 부터 받아온 데이터 댓글 목록
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

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET / comments
exports.comments = (req, res) => {
  console.log(comments.commentInfos()); // [{}, {}, {},{}]
  res.render("comments", { commentInfos: comments.commentInfos() });
  // res.render(ejs파일명, {전달 데이터 (객체 형태)})
  // comentInfos라는 이름으로 배열 전송
};

// GET / comment/:id
exports.comment = (req, res) => {
  // req.query : /comment?id = 1
  // req.params : /comment:id
  console.log(req.params); // {id: '1'} : 라우트 매개변수에 대한 정보가 담겨 있다.
  console.log("id >", req.params.id);

  const comments1 = comments.commentInfos(); // model 연결 후 추가

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments1[commentId - 1]);

  //존재하지 않는 댓글 id 접속 시 404 페이지 이동
  if (commentId < 1 || commentId > comments1.length) {
    return res.render("404");
  }

  console.log(typeof commentId); // string

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지 이동
  if (isNaN(commentId)) {
    return res.render("404");
  }

  // 배열 번호로 전달하여 객체 하나하나 접근이 가능하도록 [commentId - 1]
  res.render("comment", { commentInfo: comments1[commentId - 1] });
};
