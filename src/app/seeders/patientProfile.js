"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PatientProfiles",
      [
        {
          id: "17347ae5-c6aa-4fd6-aa08-dfb9a207d790",
          fullName: "Nguyễn Văn A",
          phone: "0967688798",
          profession: "Cán bộ xã hội",
          email: "kietB2014754@student.ctu.edu.vn",
          birthDay: "1975-10-10T00:00:00.000Z",
          gender: "female",
          cccd: "1987763739",
          nation: "Kinh",
          addressCode: ["00577", "018", "01"],
          healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          createdAt: "2024-05-04T14:18:50.889Z",
          updatedAt: "2024-05-04T14:18:50.889Z",
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
