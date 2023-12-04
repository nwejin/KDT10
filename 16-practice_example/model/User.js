// -- mySQL 연결

const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "user1234",
  database: "kdt2",
});

// 회원 가입

// req.body를 data라는 변수명으로 받음
// data = req.body = { userId: '1', pw: '1', name: '1' }
exports.post_signup = (data, cb) => {
  // cb: () => {}
  const sql = "INSERT INTO user (userid, name, pw) VALUES ( ? , ? , ? )";

  const values = [data.userId, data.name, data.pw];

  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js post_signup >", rows);
    //    {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 4,
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0,
    //   changedRows: 0
    // }
    cb(rows);
  });
};

exports.post_signin = (data, cb) => {
  // data: req.body
  // cb () => {}
  const sql = "SELECT * FROM user WHERE userid = ? and pw = ?";
  const values = [data.userid, data.pw];

  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log("User.js post_signin >", rows);
    cb(rows);
  });
};

//회원정보 수정
exports.post_profile = (userid, cb) => {
  const sql = "select * from user where userid = ?";

  conn.query(sql, [userid], (err, rows) => {
    if (err) throw err;
    console.log("User.js post_profile >", rows);
    cb(rows);
  });
};

// 회원정보 수정 요청
exports.edit_profile = (data, cb) => {
  const sql = "UPDATE user SET name = ?, pw = ? where id = ?";
  const values = [data.name, data.pw, data.id];

  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log("user.js edit_profile >", rows);

    cb(rows);
  });
};

// 회원 탈퇴
exports.delete_profile = (id, cb) => {
  const sql = "DELETE FROM user WHERE id = ?";
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;
    console.log("User.js edit profile >", rows);

    cb(rows);
  });
};
