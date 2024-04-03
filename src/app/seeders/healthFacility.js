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
          name: "Bệnh viện thành phố Hcm",
          address: "TP Hcm",
          phone: "0123456788",
          email: "hcm@gmail.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-09-16T06:17:07.573Z",
          updatedAt: "2023-09-16T06:17:07.573Z",
        },
        {
          id: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699622474677"],
          name: "Bệnh viện Trưng Vương",
          address: "Bến Tre",
          phone: "0901161786",
          email: "bt@gmail.com",
          typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
          createdAt: "2023-11-10T13:21:20.134Z",
          updatedAt: "2023-11-10T13:21:20.134Z",
        },
        {
          id: "54f834f6-c064-497d-bf68-94752d5e64e8",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699621603168"],
          name: "Bệnh viện chợ Rẩy",
          address: "Cà Mau",
          phone: "0967688859",
          email: "cm@gmail.com",
          typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
          createdAt: "2023-11-10T13:06:46.925Z",
          updatedAt: "2023-11-10T13:06:46.925Z",
        },
        {
          id: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699620651311"],
          name: "Bệnh viện An Giang",
          address: "An Giang",
          phone: "0901161450",
          email: "ag@gmail.com",
          typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
          createdAt: "2023-11-10T12:50:54.657Z",
          updatedAt: "2023-11-10T12:50:54.657Z",
        },
        {
          id: "187628dd-8362-44a9-aa30-63050a3bce19",
          images: [
            "https://bookingcare-clound.s3.amazonaws.com/1699622572228",
            "https://bookingcare-clound.s3.amazonaws.com/1699622572233",
          ],
          name: " Bệnh viện Nhi Đồng Thành Phố",
          address: "TP. Hồ Chí Minh",
          phone: "0967688822",
          email: "TP.k@gmail.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-11-10T13:18:37.686Z",
          updatedAt: "2023-11-10T13:22:59.927Z",
        },
        {
          id: "242fd0e5-7985-4194-8b98-470543b0f2fc",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699621361305"],
          name: "Phòng khám Đa Khoa",
          address: "Đồng Tháp",
          phone: "0967688850",
          email: "dt@gmail.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-11-10T13:02:45.614Z",
          updatedAt: "2023-11-10T13:02:45.614Z",
        },
        {
          id: "b772c549-13de-4fed-a5ef-f39a193e265f",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699620896434"],
          name: "Bệnh viện mắt",
          address: "Đồng Nai",
          phone: "0901161454",
          email: "dn@gmai.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-11-10T12:55:01.415Z",
          updatedAt: "2023-11-10T12:55:01.415Z",
        },
        {
          id: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
          images: ["https://bookingcare-clound.s3.amazonaws.com/1699620711554"],
          name: "Bệnh viện Y dược Cần Thơ",
          address: "Can Tho",
          phone: "0901161453",
          email: "ct@gmail.com",
          typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
          createdAt: "2023-11-10T12:51:55.289Z",
          updatedAt: "2023-11-10T12:51:55.289Z",
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
