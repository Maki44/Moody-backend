"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cloths",
      [
        {
          name: "BlazerShirt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BlazerSweater",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CollarSweater",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GraphicShirt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hoodie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Overall",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShirtCrewNeck",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShirtScoopNeck",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShirtVNeck",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "eyes",
      [
        {
          name: "Close",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Default",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dizzy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "EyeRoll",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Happy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hearts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Side",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Squint",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Surprised",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinkWacky",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "eyebrows",
      [
        {
          name: "Angry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AngryNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Default",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DefaultNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "FlatNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RaiseExcited",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RaiseExcitedNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SadConcerned",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SadConcernedNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UnibrowNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpDown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpDownNatural",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "mouths",
      [
        {
          name: "Concerned",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Default",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Disbelief",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eating",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grimace",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ScreamOpen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Serious",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tongue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Twinkle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "skins",
      [
        {
          name: "Tanned",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Light",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DarkBrown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cloths", null, {});
    await queryInterface.bulkDelete("eyes", null, {});
    await queryInterface.bulkDelete("eyebrows", null, {});
    await queryInterface.bulkDelete("mouths", null, {});
    await queryInterface.bulkDelete("skins", null, {});
  },
};
