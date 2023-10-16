"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WorkRooms",
      [
        {
          id: "6da5e69f-7ec5-45fb-99a3-d7a024bfca4d",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          checkUpPrice: 200000,
          applyDate: "2023-06-20T17:10:00.420Z",
          workingId: "f245cec7-d733-45d4-be2f-2d2dd3536aea",
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
