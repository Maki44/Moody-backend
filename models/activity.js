"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity.belongsToMany(models.user, {
        through: "userActivity",
        foreignKey: "activityId",
        as: "users",
      });
      activity.belongsTo(models.mood, {
        foreignKey: "moodId",
      });
    }
  }
  activity.init(
    {
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lng: { type: DataTypes.FLOAT, allowNull: false },
      description: DataTypes.TEXT,
      maxPersons: DataTypes.INTEGER,
      minAge: DataTypes.INTEGER,
      maxAge: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "activity",
    }
  );
  return activity;
};
