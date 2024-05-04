"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "Bookings",
    //   [
    //     {
    //       id: "4b2a8979-e395-49b1-af81-25982b1448ef",
    //       descriptionDisease: "Tiêu chảy 7 lần",
    //       healthExaminationScheduleId: "c94f0f06-33be-4405-b7df-f067bdc56d8e",
    //       patientProfileId: "ba3d3373-71d6-455b-ae5b-b576f6a9abcd",
    //       doctorPrice: 100000,
    //       status: "CU2",
    //       paymentType: "card",
    //       createdAt: "2024-04-15T16:41:00.501Z",
    //       updatedAt: "2024-04-15T16:56:23.744Z",
    //     },
    //   ],
    //   {}
    // );
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
