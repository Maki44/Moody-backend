"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hairStyles",
      [
        {
          name: "NoHair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eyepatch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hijab",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Turban",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinterHat1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinterHat2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinterHat3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinterHat4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairBigHair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairBob",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairBun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairCurly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairCurvy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairDreads",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairFrida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairFro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairFroBand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairNotTooLong",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairShavedSlides",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairMiaWallace",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairStraight",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairStraight2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LongHairStraightStrand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairDreads01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairDreads02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairFrizzle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairShaggyMullet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairShortCurly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairShortFlat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairShortRound",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairShortWaved",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairSides",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairTheCaesar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ShortHairTheCaesarSidePart",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hairStyles", null, {});
  },
};
