"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ServiceDetails",
      [
        {
          id: "7380e7b7-f93a-4df4-aa50-b758bf2e67c2",
          hospitalServiceId: "358c727f-d061-4e1a-8fb2-3f63ef6ee661",
          healthRecordId: "981fa3b9-61d5-4ed2-a7ab-d4e588090f7f",
          descriptionResult: "Binh thuong",
          createdAt: "2024-05-04T14:25:14.927Z",
          updatedAt: "2024-05-04T14:28:37.777Z",
        },
        {
          id: "81d2460e-114b-41a8-a297-cf94b6b109d6",
          hospitalServiceId: "3f28999f-659e-4d14-8584-38782ac44850",
          healthRecordId: "981fa3b9-61d5-4ed2-a7ab-d4e588090f7f",
          descriptionResult: "Tim không đập quá nhanh",
          createdAt: "2024-05-04T14:28:56.539Z",
          updatedAt: "2024-05-04T14:29:07.136Z",
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
