"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userMood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userMood.belongsTo(models.user, { foreignKey: "userId" });
      userMood.belongsTo(models.mood, { foreignKey: "moodId" });
    }
  }
  userMood.init(
    {
      userId: DataTypes.INTEGER,
      moodId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userMood",
    }
  );
  return userMood;
};
