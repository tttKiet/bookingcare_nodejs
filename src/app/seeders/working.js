"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Workings",
      [
        {
          id: "f245cec7-d733-45d4-be2f-2d2dd3536aea",
          staffId: "fad3735b-c6b6-4e52-8e35-d965291eba92",
          healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          startDate: "2023-09-24T12:29:08.810Z",
          endDate: null,
          updatedAt: "2023-10-15T05:01:24.012Z",
          createdAt: "2023-10-15T05:01:24.012Z",
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
