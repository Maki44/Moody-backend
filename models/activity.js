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
      address: { type: DataTypes.STRING, allowNull: false },
      placeName: { type: DataTypes.STRING, allowNull: false },
      maxPersons: DataTypes.INTEGER,
      minAge: DataTypes.INTEGER,
      maxAge: DataTypes.INTEGER,
      expirationDate: {
        type: DataTypes.DATE,
        defaultValue: Date.now() + 8.64e7,
      },
      photo: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "activity",
    }
  );
  return activity;
};
