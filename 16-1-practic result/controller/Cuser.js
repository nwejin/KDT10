// const User = require("../models/User");

const models = require("../models/index");
const User = models.User;

exports.main = (req, res) => {
  res.render("index");
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.get_signin = (req, res) => {
  res.render("signin");
};

// 회원가입 요청
exports.post_signup = (req, res) => {
  // 뷰 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰 (응답)
  console.log("post_signup >", req.body); // [1,1,1]

  //
  const { userid, name, pw } = req.body;

  //   User.post_signup(req.body, (result) => {
  //     // result: rows
  //     res.send(result);
  //   });

  // "INSERT INTO user (userid, name, pw) VALUES ( ?, ?, ?)"
  User.create({
    userid: userid,
    name: name,
    pw: pw,
  }).then((result) => {
    console.log("create > ", result);
    res.send(result);
  });
};

// 로그인 요청
exports.post_signin = (req, res) => {
  const { userid, name, pw } = req.body;
  console.log(req.body);
  //   User.post_signin(req.body, (result) => {
  //     // result: rows [{}]
  //     if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
  //     else res.send({ isLogin: false });
  //   });

  console.log("userid:", req.body.userid);
  console.log("pw:", req.params.pw);

  // "SELECT * FROM user WHERE userid = ? and pw = ?"
  User.findOne({
    where: { userid: userid, pw: pw },
  }).then((result) => {
    console.log("findOne >", result);
    if (result) {
      res.send({ isLogin: true, userInfo: result[0] });
    } else res.send({ isLogin: false });
  });
};

// 회원정보 수정 페이지 요청
//"SELECT * FROM user WHERE userid = ?"
exports.post_profile = (req, res) => {
  console.log(req.body); // {userid: ~}
  //   User.post_profile(req.body.userid, (result) => {
  //     // result: rows [{}]

  User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("findeone >", result);
    if (result) {
      res.render("profile", { data: result });
    }
  });
};

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log(req.body);
  //   User.edit_profile(req.body, (result) => {
  //     res.send("회원정보 수정 성공!");
  //   });

  //update user set name =?, pw=? where id =?
  User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.send("회원 정보 수정 성공!");
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log(req.body); // {id: ~}

  //   User.delete_profile(req.body.id, (result) => {
  //     res.send({ deletedId: req.body.id });
  //   });

  // DELETE from user where id = ?
  User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.send({ deleteId: req.body.id });
  });
};
