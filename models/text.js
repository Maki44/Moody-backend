"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  text.init(
    {
      text: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      activityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "text",
    }
  );
  return text;
};
