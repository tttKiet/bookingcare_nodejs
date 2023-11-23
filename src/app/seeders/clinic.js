"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ClinicRooms",
      [
        {
          roomNumber: 101,
          healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          capacity: 2,
          createdAt: "2023-11-10T13:47:21.356Z",
          updatedAt: "2023-11-10T13:47:21.356Z",
        },
        {
          roomNumber: 101,
          healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
          capacity: 1,
          createdAt: "2023-11-10T13:47:56.411Z",
          updatedAt: "2023-11-10T13:47:56.411Z",
        },
        {
          roomNumber: 102,
          healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          capacity: 2,
          createdAt: "2023-11-10T13:47:26.223Z",
          updatedAt: "2023-11-10T13:47:26.223Z",
        },
        {
          roomNumber: 102,
          healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
          capacity: 2,
          createdAt: "2023-11-10T13:48:01.053Z",
          updatedAt: "2023-11-10T13:48:01.053Z",
        },
        {
          roomNumber: 103,
          healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          capacity: 1,
          createdAt: "2023-11-10T13:47:31.398Z",
          updatedAt: "2023-11-10T13:47:31.398Z",
        },
        {
          roomNumber: 104,
          healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          capacity: 5,
          createdAt: "2023-11-10T13:47:40.109Z",
          updatedAt: "2023-11-10T13:47:40.109Z",
        },
        {
          roomNumber: 201,
          healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          capacity: 1,
          createdAt: "2023-11-10T13:47:45.173Z",
          updatedAt: "2023-11-10T13:47:45.173Z",
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
