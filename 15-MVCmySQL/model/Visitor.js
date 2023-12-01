// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

// ----mysql 연결
const mysql = require("mysql2");

// DB 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "user1234",
  database: "kdt2",
});

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    cb(rows);
  });
};

exports.postVisitors = (data, cb) => {
  console.log("postVisitors > ", data);

  // prepared statements
  // sql 쿼리에서 사용자 입력을 안전하게 처리하고 sql 인젝션 공격을 방직하기 위한 방법
  // 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신, 플레이스 홀더를 사용하여 쿼리 작성
  // mysql 에서는 ?(물음표) 사용

  const sql = "INSERT INTO visitor (name, comment) VALUES ( ? , ? )";

  // 배열 값으로 감싸서 저장
  const values = [data.name, data.comment];

  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("Visitor >", rows);

    cb(rows.insertId);
  });
};
