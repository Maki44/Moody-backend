"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mood.hasMany(models.activity);
    }
  }
  mood.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mood",
    }
  );
  return mood;
};
