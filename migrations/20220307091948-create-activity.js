"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      maxPersons: {
        type: Sequelize.INTEGER,
      },
      minAge: {
        type: Sequelize.INTEGER,
      },
      maxAge: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      placeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expirationDate: {
        type: Sequelize.DATE,
        defaultValue: Date.now() + 8.64e7,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("activities");
  },
};
