const Cuser = require("../model/User");

// 메인페이지
exports.main = (req, res) => {
  res.render("index");
};

// 회원가입 페이지
exports.signUp = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  console.log(req.body);
  const { id, pw, name } = req.body;
};

// 로그인 페이지
exports.signIn = (req, res) => {
  res.render("signin");
};

exports.profile = (req, res) => {
  res.render("profile");
};
