"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Staffs",
      [
        {
          id: uuidv4(),
          fullName: "Admin root website",
          email: "admin@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688851",
          gender: 1,
          address: "Can thor",
          roleId: "3becac30-81cc-491e-ad6b-c4c5fa0c6039",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          fullName: "Doctor 1",
          email: "doctor@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688850",
          gender: 1,
          address: "Can thor",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          createdAt: new Date(),
          updatedAt: new Date(),
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
