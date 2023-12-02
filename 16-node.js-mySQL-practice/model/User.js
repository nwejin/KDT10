// -- mySQL 연결

const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "user1234",
  database: "kdt2",
});
