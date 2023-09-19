"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TypeHealthFacilities",
      [
        {
          id: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
          name: "Bệnh viện tư",
          createdAt: "2023-09-16T03:58:44.739Z",
          updatedAt: "2023-09-16T03:58:44.739Z",
        },
        {
          id: "0892100d-ff1c-4478-9e63-c07983c3f24e",
          name: "Bệnh viện cá nhân",
          createdAt: "2023-09-16T03:58:32.688Z",
          updatedAt: "2023-09-16T03:58:32.688Z",
        },
        {
          id: "555f7809-f220-4f96-910c-bf23788815b9",
          name: "Bệnh viện công",
          createdAt: "2023-09-16T06:16:47.428Z",
          updatedAt: "2023-09-16T06:16:47.428Z",
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
