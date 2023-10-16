"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "HealthExaminationSchedules",
      [
        {
          id: "547fdc9c-bb25-4ea9-b69e-57f45434f96d",
          date: "11/30/2023",
          timeCode: "T1",
          workingId: "f245cec7-d733-45d4-be2f-2d2dd3536aea",
          maxNumber: 2,
        },
        {
          id: "8ad135ef-3c2e-4281-9939-52e5d8c8b2cb",
          date: "11/30/2023",
          timeCode: "T2",
          workingId: "f245cec7-d733-45d4-be2f-2d2dd3536aea",
          maxNumber: 2,
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
