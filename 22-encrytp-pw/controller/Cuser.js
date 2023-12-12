const { User } = require("../models/index");

const bcrypt = require("bcrypt");

exports.main = (req, res) => {
  res.render("index");
};

exports.getRegister = (req, res) => {
  res.render("register");
};
exports.postRegister = async (req, res) => {
  try {
    const { pw, name, userid } = req.body;
    const hash = await bcrypt.hash(pw, saltRounds); //비밀번호 암호화
    await User.create({ userid, name, pw: hash });
    res.send({ result: true });
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const user = await User.findOne({
      where: { userid },
    });

    if (user) {
      const result = await bcrypt.compare(pw, user.pw);

      if (result) {
        res.send({ result: true, data: user });
      } else {
        res.send({ result: false, message: "비밀번호가 틀렸습니다." });
      }
    } else {
      res.send({ result: false, message: "존재하는 사용자가 없습니다." });
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};
const saltRounds = 11;
