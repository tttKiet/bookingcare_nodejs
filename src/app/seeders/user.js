"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9502",
          fullName: "Bui Tuan Kiet",
          email: "user1@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688854",
          gender: 1,
          address: "Can thor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9522",
          fullName: "Nguyen Van A",
          email: "user2@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688852",
          gender: 1,
          address: "Can thor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f481c6ec-5692-4d3c-b3c3-4fa6c07c9522",
          fullName: "Nguyen Thi B",
          email: "user3@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688852",
          gender: 1,
          address: "Can thor",
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
