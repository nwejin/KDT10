const TeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        auto_increment: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Team;
};

module.exports = TeamModel;
