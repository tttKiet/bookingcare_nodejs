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
          fullName: "Trịnh Tuấn",
          email: "hospital_manager@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0974688851",
          gender: 1,
          address: "HA NOI",
          roleId: "fad3735b-c6b6-4e52-8e35-d965291eba93",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "418bc007-b26a-489e-9a17-e9ab207750cf",
          fullName: "Lại Thế Văn",
          email: "doctor7@gmail.com",
          password:
            "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
          phone: "09676888563",
          address: "Hà Tỉnh",
          gender: "female",
          experience: "Hai năm React",
          certificate: "B1",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaafcf",
          specialistId: "b096d05b-4ef0-41ee-9c07-c5496773fe16",
          createdAt: "2023-11-11T04:36:01.800Z",
          updatedAt: "2023-11-11T04:36:01.800Z",
        },
        {
          id: "0ca970bb-0a81-44e6-aac5-b410ae11f6c3",
          fullName: "Lê Văn Tèo",
          email: "doctor6@gmail.com",
          password:
            "$2b$10$I0svM/o956w58i6H3rmurO7HknjAeyBDRcsyiopkHVd4Qm02hbepq",
          phone: "0967688909",
          address: "Đồng Tháp",
          gender: "male",
          experience: "2 Năm DHYD",
          certificate: "C1",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaafcf",
          specialistId: "b310fa03-5697-419b-8c13-8f9d32a59384",
          createdAt: "2023-11-11T04:35:13.590Z",
          updatedAt: "2023-11-11T04:35:13.590Z",
        },
        {
          id: "1ed3616c-acd7-498c-89e5-ba5b20a2f095",
          fullName: "Phan Thị Như Bình",
          email: "doctor5@gmail.com",
          password:
            "$2b$10$u8HSp8ueUmWNG.mLb1mB0uolMJf1KUVMaI7fARMSkskrMImrpMaoK",
          phone: "09676888787",
          address: "Phú Thọ",
          gender: "male",
          experience: "2 Năm trong bệnh viện Đa Khoa Trung Ương HN",
          certificate: "C1",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaaf2d",
          specialistId: "fd3ff0c3-212e-4076-8ca5-9a665671131d",
          createdAt: "2023-11-11T04:34:27.385Z",
          updatedAt: "2023-11-11T04:34:27.385Z",
        },
        {
          id: "05a33de4-fa82-4d75-8561-a1563c379598",
          fullName: "Cao Văn Nguyên",
          email: "doctor4@gmail.com",
          password:
            "$2b$10$dD0oaY.lX8vssw14qQX50ea/92yFbFWZFX1nHWjW3SkvKz58WOer6",
          phone: "09123424909",
          address: "An Giang",
          gender: "male",
          experience: "2 Năm cho DHYD",
          certificate: "C1",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaafcf",
          specialistId: "6c8c4087-6bf8-4818-8aea-1e19444a1f5f",
          createdAt: "2023-11-11T04:29:24.467Z",
          updatedAt: "2023-11-11T04:29:24.467Z",
        },
        {
          id: "e5c70acb-4133-40db-8f2b-ffec7ae64c94",
          fullName: "Nguyễn Văn Để",
          email: "doctor3@gmail.com",
          password:
            "$2b$10$DmKq/fLaEyQV7D63O4k5ouOVlPPL4jHIWzWlF2zKkX2sMs2bgcR/W",
          phone: "0967688648",
          address: "Can tho",
          gender: "male",
          experience: "3 năm kinh nghiệm DHYD",
          certificate: "C1",
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaaf2d",
          specialistId: "b096d05b-4ef0-41ee-9c07-c5496773fe16",
          createdAt: "2023-11-11T04:26:00.378Z",
          updatedAt: "2023-11-11T04:26:00.378Z",
        },
        {
          id: "fad3735b-c6b6-4e52-8e35-d965291eba92",
          fullName: "Doctor 1",
          email: "doctor@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688850",
          address: "Can thor",
          gender: "female",
          experience: "2 year fro Miscrosoft",
          certificate: null,
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "480f5c52-abbd-4d28-9c9c-99c41feaafcf",
          specialistId: "ff01f2da-068e-4357-9eb5-12c4281a77df",
          createdAt: "2023-11-10T15:23:38.172Z",
          updatedAt: "2023-11-10T15:23:38.172Z",
        },
        {
          id: "fad3735b-c6b6-4e52-8e35-d965291eba95",
          fullName: "Doctor 2",
          email: "doctor2@gmail.com",
          password:
            "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
          phone: "0967688851",
          address: "Can thor",
          gender: "female",
          experience: "4 Năm kinh nghiệm",
          certificate: null,
          roleId: "f1e9f129-da8d-4db0-93ee-46bb422fdebd",
          academicDegreeId: "5e065f83-3dc9-471b-88a7-9e0bc22b2fbc",
          specialistId: "8ca0a91b-ad7e-4331-93ca-7c82cf2f36e6",
          createdAt: "2023-11-10T15:23:38.172Z",
          updatedAt: "2023-11-10T15:23:38.172Z",
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
