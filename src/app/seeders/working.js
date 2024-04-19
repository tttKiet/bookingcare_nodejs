"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Workings",
      [
        {
          id: "2847183f-c6b1-4be6-9892-9b3e6c468b5b",
          staffId: "fad3735b-c6b6-4e52-8e35-d965291eba92",
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          startDate: "2024-04-15T05:40:20.134Z",
          endDate: null,
          createdAt: "2024-04-15T05:41:30.768Z",
          updatedAt: "2024-04-15T05:41:30.768Z",
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
