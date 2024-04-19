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
          fullName: "Nguyen Van A",
          phone: "0967682834",
          profession: "Làm ruộng",
          email: "kietB2014754@student.ctu.edu.vn",
          birthDay: "1975-10-10T15:53:05.418Z",
          gender: "male",
          cccd: "0123453543",
          nation: "kinh",
          addressCode: ["00577", "018", "01"],
          userId: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9502",
        },
        {
          id: "ba3d3373-71d6-455b-ae5b-b576f6a9abce",
          fullName: "Nguyen Van B",
          phone: "0967682834",
          profession: "Nội Trợ",
          email: "kietB2014754@student.ctu.edu.vn",
          birthDay: "1975-10-10T15:53:05.418Z",
          gender: "male",
          cccd: "0123453543",
          nation: "kinh",
          addressCode: ["00577", "018", "01"],
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
