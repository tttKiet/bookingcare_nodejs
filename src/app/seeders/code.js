"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Codes",
      [
        {
          name: "Time",
          key: "T1",
          value: "7h - 7h30",
        },
        {
          name: "Time",
          key: "T2",
          value: "7h30 - 8h",
        },
        {
          name: "Time",
          key: "T3",
          value: "8h - 8h30",
        },
        {
          name: "Time",
          key: "T4",
          value: "8h30 - 9h",
        },
        {
          name: "Time",
          key: "T5",
          value: "9h - 9h30",
        },
        {
          name: "Time",
          key: "T6",
          value: "9h30 - 10h",
        },
        {
          name: "Time",
          key: "T7",
          value: "10h30 - 11h",
        },
        {
          name: "Time",
          key: "T8",
          value: "1h30 - 2h",
        },
        {
          name: "Time",
          key: "T9",
          value: "2h30 - 3h",
        },
        {
          name: "Time",
          key: "T10",
          value: "3h - 3h30",
        },
        {
          name: "Time",
          key: "T11",
          value: "3h30 - 4h",
        },
        {
          name: "Time",
          key: "T12",
          value: "4h - 5h",
        },
        {
          name: "Status",
          key: "S1",
          value: "Chưa khám",
        },
        {
          name: "Status",
          key: "S2",
          value: "Đã khám",
        },
        {
          name: "Status",
          key: "S3",
          value: "Đã hủy",
        },
        {
          name: "CheckUp",
          key: "CU1",
          value: "Đã đặt, chờ thanh toán",
        },
        {
          name: "CheckUp",
          key: "CU2",
          value: "Đã thanh toán",
        },
        {
          name: "CheckUp",
          key: "CU3",
          value: "Quá hạn",
        },
        {
          name: "HealthRecord",
          key: "HR1",
          value: "Chờ khám",
        },
        {
          name: "HealthRecord",
          key: "HR2",
          value: "Chờ kết quả dịch vụ",
        },
        {
          name: "HealthRecord",
          key: "HR3",
          value: "Đang khám",
        },
        {
          name: "HealthRecord",
          key: "HR4",
          value: "Đã khám",
        },
        {
          name: "HealthRecord",
          key: "HR5",
          value: "Đã hủy",
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
