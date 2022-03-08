"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "moods",
      [
        {
          name: "Drink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eating in a resturant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Club",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bowling",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cinema",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Walk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("moods", null, {});
  },
};
