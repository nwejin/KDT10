const PlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        auto_increment: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        alllowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Player;
};

module.exports = PlayerModel;
