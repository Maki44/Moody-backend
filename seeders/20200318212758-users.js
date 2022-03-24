"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Nahom",
          email: "test@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          lat: 52.0767,
          lng: 4.2986,
          address: "The Hague",
          avatar: "https://source.boringavatars.com/beam/80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Able",
          email: "a@a.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          lat: 52.0767,
          lng: 4.2986,
          address: "The Hague",
          avatar: "https://source.boringavatars.com/beam/80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
