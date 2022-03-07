"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userActivity.belongsTo(models.user, { foreignKey: "userId" });
      userActivity.belongsTo(models.activity, { foreignKey: "activityId" });
    }
  }
  userActivity.init(
    {
      activityId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userActivity",
    }
  );
  return userActivity;
};
