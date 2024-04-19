"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WorkRooms",
      [
        {
          id: "2e1fd632-5793-43a1-8d7c-1774ba1623d4",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          workingId: "2847183f-c6b1-4be6-9892-9b3e6c468b5b",
          checkUpPrice: 100000,
          applyDate: "2024-04-15T05:42:42.943Z",
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
