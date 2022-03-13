"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "accessories",
      [
        {
          name: "Blank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kurt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Prescription01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Prescription02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Round",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sunglasses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wayfarers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "hairColors",
      [
        {
          name: "Auburn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blonde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BlondeGolden",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BrownDark",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastelPink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Platinum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SilverGray",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "hatColors",
      [
        {
          name: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gray01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gray02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heather",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastelBlue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastelGreen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastleOrange",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastelRed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PastelYellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "facialHairs",
      [
        {
          name: "Blank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BearedMedium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BearedLight",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BearedMajestic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MoustacheFancy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MoustacheMagnum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("accessories", null, {});
    await queryInterface.bulkDelete("hairColors", null, {});
    await queryInterface.bulkDelete("hatColors", null, {});
    await queryInterface.bulkDelete("facialHairs", null, {});
  },
};
