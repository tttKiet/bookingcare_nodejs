"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ClinicRooms",
      [
        {
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          roomNumber: 101,
          capacity: 3,
          updatedAt: "2023-10-15T11:03:00.559Z",
          createdAt: "2023-10-15T11:03:00.559Z",
        },
        {
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          roomNumber: 102,
          capacity: 3,
          updatedAt: "2023-10-15T11:03:00.559Z",
          createdAt: "2023-10-15T11:03:00.559Z",
        },
        {
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          roomNumber: 201,
          capacity: 2,
          updatedAt: "2023-10-15T11:03:00.559Z",
          createdAt: "2023-10-15T11:03:00.559Z",
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
