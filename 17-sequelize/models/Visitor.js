// TODO: visitor 모델 정의
// 테이블 구조를 정의한다고 생각
// 시퀄라이즈 모델이랑 mysql 테이블 연결
const Visitor = (Sequelize, DataTypes) => {
  // Sequelize는 models/index.js에서의 sequelize
  // DataTypes는 models/index.js에서의 Sequelize

  const model = Sequelize.define(
    "visitor", //param1: 모델 이름 설정
    {
      // id INT not null PRIMARY KEY auto_increment
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) nou null
        type: DataTypes.STRING(10),
        allownull: false,
      },
      Comment: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
      },
    }, // param2: 컬럼 정의
    {
      tableNmae: "visitor2", // 실제 db의 테이블 이름 명시
      freezeTableName: true, // 첫번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
      // 시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 가져옴
      // charset, collate 값이 있는데, db정의 시 한글 인코딩이 가능하도록 설정하였기에 따로 설정 필요 X
      timestamps: false,
      // 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록 (timestaps)
    } //   param3: 모델 옵션 정의
  );
  return model;
};

module.exports = Visitor;
