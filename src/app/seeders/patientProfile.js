"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PatientProfiles",
      [
        {
          id: "ba3d3373-71d6-455b-ae5b-b576f6a9abcd",
          fullName: "bui tuan kiet2",
          phone: "0967682834",
          profession: "user1212",
          email: "can thor",
          birthDay: "2023-10-10T15:53:05.418Z",
          gender: "male",
          cccd: "111111112",
          nation: "kinh",
          addressCode: ["1", "1", "1"],
          userId: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9502",
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
