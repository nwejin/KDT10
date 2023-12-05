const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database, // 데이터베이스명
  config.username, // 사용자
  config.password, // 비밀번호
  config //정보 전체
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
