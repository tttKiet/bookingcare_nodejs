"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "HealthRecords",
      [
        {
          id: "981fa3b9-61d5-4ed2-a7ab-d4e588090f7f",
          bookingId: "39ae9244-397e-4428-b877-7069c1f02fd6",
          patientId: "17347ae5-c6aa-4fd6-aa08-dfb9a207d790",
          statusCode: "HR4",
          diagnosis: "Tim đập hơi nhanh, máu đông cấp độ 1",
          note: "Cần chú ý ăn uống và ngủ đều độ",
          createdAt: "2024-05-04T14:19:01.955Z",
          updatedAt: "2024-05-04T15:18:49.650Z",
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
