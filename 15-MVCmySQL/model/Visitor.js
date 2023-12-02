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
  // query('SQL문',valuse(선택), 콜백함수)
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // DB 데이터 가져온 후 실행
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    cb(rows); // 컨트롤러로 결과값을 넘겨줌
  });
};

exports.postVisitor = (data, cb) => {
  // data : req.body
  // cd : 콜백함수
  console.log("postVisitor > ", data);

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

    cb(rows.insertId); // 다 끝나면 콜백함수 호출, 매개변수로 rows.insertId 값을 넘겨줌
  });
};

exports.getVisitor = (id, cb) => {
  const sql = "SELECT * FROM visitor WHERE id = ?";
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;

    console.log("getVisitor Visitor.js >", rows);
    // [ { id: 1, name: '홍길동', comment: '내가 왔다.' } ]
    cb(rows[0]);
  });
};

exports.patchVisitor = (data, cb) => {
  const sql = "UPDATE visitor SET name = ?, comment = ? WHERE id = ?";
  const values = [data.name, data.commet, data.id];

  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("patchVisitor Visitor.js >", rows);

    cb(rows);
  });
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  const sql = "DELETE FROM visitor WHERE id = ?";
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;
    console.log("deleteVisitor Visitor.js >", rows);

    cb(rows);
  });
};
