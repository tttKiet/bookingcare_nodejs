"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PrescriptionDetails",
      [
        {
          id: "95144735-8575-4599-87a9-2bd75b2e76ca",
          cedicineId: "b97aa0bb-5c37-4f87-8018-a21640289621",
          healthRecordId: "981fa3b9-61d5-4ed2-a7ab-d4e588090f7f",
          unit: "v",
          morning: 1,
          noon: 1,
          afterNoon: 1,
          evening: 1,
          quantity: 10,
          usage: "trước khi ngủ",
          createdAt: "2024-05-04T14:49:03.676Z",
          updatedAt: "2024-05-04T14:49:03.676Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
