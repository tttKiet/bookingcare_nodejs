"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuidv4(),
          fullName: "Bui Tuan Kiet",
          email: "admin@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688854",
          gender: 1,
          address: "Can thor",
          roleId: "3becac30-81cc-491e-ad6b-c4c5fa0c6039",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          fullName: "Bui Tuan Kiet",
          email: "k@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688854",
          gender: 1,
          address: "Can thor",
          roleId: "063421b1-1366-4af2-9838-5642badf3845",
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
