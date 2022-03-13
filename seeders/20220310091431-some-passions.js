"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "passions",
      [
        {
          name: "Foodie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "travle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Walking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Climbing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Running",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Movies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fashion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gamer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dancing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reading",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cooking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Writer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gardening",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Art",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shopping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Surfing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dog lover",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cat lover",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Board Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("passions", null, {});
  },
};
