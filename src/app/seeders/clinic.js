"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ClinicRooms",
      [
        {
          roomNumber: 101,
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          capacity: 2,
          createdAt: "2023-11-10T13:47:21.356Z",
          updatedAt: "2023-11-10T13:47:21.356Z",
        },
        {
          roomNumber: 102,
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          capacity: 1,
          createdAt: "2023-11-10T13:47:56.411Z",
          updatedAt: "2023-11-10T13:47:56.411Z",
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
