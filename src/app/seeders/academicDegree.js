"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "AcademicDegrees",
      [
        {
          id: "5e065f83-3dc9-471b-88a7-9e0bc22b2fbc",
          name: "Giáo sư, tiến sỉ",
          createdAt: "2023-09-16T04:01:51.326Z",
          updatedAt: "2023-09-16T04:01:51.326Z",
        },
        {
          id: "480f5c52-abbd-4d28-9c9c-99c41feaafcf",
          name: "Bác sỉ",
          createdAt: "2023-09-16T04:36:05.114Z",
          updatedAt: "2023-09-16T04:36:05.114Z",
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
