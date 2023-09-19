"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "HealthFacilities",
      [
        {
          id: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1694845023813"],
          name: "Bệnh viện thành phố  1",
          address: "TP Hcm",
          phone: "0123456788",
          email: "hcm@gmail.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-09-16T06:17:07.573Z",
          updatedAt: "2023-09-16T06:17:07.573Z",
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
