"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Bookings",
      [
        {
          id: "39ae9244-397e-4428-b877-7069c1f02fd6",
          descriptionDisease: "Bị đau đầu nhẹ, hơi nhói ở ngực.",
          healthExaminationScheduleId: "8279ea2e-a2a6-4b7b-94a0-2ae9a7db7934",
          patientProfileId: "0c65605c-97aa-4e4a-a66a-54835a28c7cf",
          doctorPrice: 100000,
          status: "CU2",
          paymentType: "hospital",
          createdAt: "2024-05-04T13:55:20.270Z",
          updatedAt: "2024-05-04T15:28:36.692Z",
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
