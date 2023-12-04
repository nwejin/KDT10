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
  console.log(req.body);
  const { id, pw, name } = req.body;

  User.postSignup(req.body, (result) => {
    console.log(result);
    res.send({ userId, userPw, userName });
  });
};

// 로그인 페이지
exports.get_signin = (req, res) => {
  res.render("signin");
};

exports.profile = (req, res) => {
  res.render("profile");
};
