const ProfileModel = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "profile",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        auto_increment: true,
      },
      position: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        alllowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Profile;
};

module.exports = ProfileModel;
