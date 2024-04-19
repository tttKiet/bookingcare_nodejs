"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "HealthExaminationSchedules",
      [
        {
          id: "c94f0f06-33be-4405-b7df-f067bdc56d8e",
          date: "04/30/2024",
          timeCode: "T1",
          workingId: "2847183f-c6b1-4be6-9892-9b3e6c468b5b",
          maxNumber: 1,
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
