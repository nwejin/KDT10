const User = require("../model/User");

// 메인페이지
exports.main = (req, res) => {
  res.render("index");
};

// 회원가입 페이지
exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  //뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
  console.log("post_signup >", req.body);

  User.post_signup(req.body, (result) => {
    res.send(result);
  });

  // result: Rows
  // const { id, pw, name } = req.body;

  //   console.log(result);
  //   res.send({ userId, userPw, userName });
  // });
};

// 로그인 페이지
exports.get_signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  console.log(req.body);
  User.post_signin(req.body, (result) => {
    // result: rows[{}]
    if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
    else res.send({ isLogin: false });
  });
};

// 회원정보 수정 페이지
exports.post_profile = (req, res) => {
  console.log(req.body);
  User.post_profile(req.body.userid, (result) => {
    if (result.length > 0) res.render("profile", { data: result[0] });
  });
};

// 회원 정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, (result) => {
    res.send("회원 정보 수정 완료!");
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log(req.body);

  User.delete_profile(req.body.id, (result) => {
    res.send({ deleteId: req.body.id });
  });
};
