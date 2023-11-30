// 데이터 연결
const users = require("../model/User");

// GET / user
exports.user = (req, res) => {
  res.render("user", { userInfo: users.userInfos() });
};
