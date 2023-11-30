const Login = require("../model/Login");

// GET / login
exports.login = (req, res) => {
  res.render("login");
};

exports.userData = (req, res) => {
  const Id = Login.loginInfos().userId;
  const Pw = Login.loginInfos().userPw;

  //   res.render("login", { logininfo: Login.loginInfos() });
  if (req.body.userId === Id && req.body.userPw === Pw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};
