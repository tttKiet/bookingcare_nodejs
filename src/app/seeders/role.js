"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: "063421b1-1366-4af2-9838-5642badf3845",
          keyType: "user",
        },
        {
          id: "3becac30-81cc-491e-ad6b-c4c5fa0c6039",
          keyType: "admin",
        },
        {
          id: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          keyType: "doctor",
        },
        {
          id: "fad3735b-c6b6-4e52-8e35-d965291eba93",
          keyType: "hospital_manager",
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
