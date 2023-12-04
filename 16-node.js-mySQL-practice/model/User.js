// -- mySQL 연결

const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "user1234",
  database: "kdt2",
});

// 회원 가입

exports.postSignup = (data) => {
  console.log("postSignup >", data);

  const sql = "INSERT INTO user (userid, name, pw) VALUES ( ? , ? , ? )";

  const values = [data.userid, data.name, data.pw];
};
