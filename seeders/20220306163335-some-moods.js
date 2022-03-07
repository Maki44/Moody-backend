"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "moods",
      [
        {
          name: "walk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "drinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "clubbing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bolling",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cinema",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "climbing",
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
