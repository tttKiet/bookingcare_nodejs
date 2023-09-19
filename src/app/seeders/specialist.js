"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Specialists",
      [
        {
          id: "53706c2c-eeef-4d2c-8c1a-580c0f05153f",
          name: "Cơ Xương Khớp",
          descriptionDisease:
            "Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:\n\nCác chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm\nCác giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...",
          descriptionDoctor:
            "Gout\nThoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ\nViêm khớp dạng thấp, Viêm đa khớp, Viêm gân\nTràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai\nLoãng xương, đau nhức xương\nViêm xương, gai xương\nViêm cơ, Teo cơ, chứng đau mỏi cơ\nYếu cơ, Loạn dưỡng cơ\nCác chấn thương về cơ, xương, khớp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "75f475d9-f57c-4973-914e-3c9727b6e355",
          name: "Thần kinh",
          descriptionDisease:
            "Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:\n\nCác chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm\nCác giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...",
          descriptionDoctor:
            "Gout\nThoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ\nViêm khớp dạng thấp, Viêm đa khớp, Viêm gân\nTràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai\nLoãng xương, đau nhức xương\nViêm xương, gai xương\nViêm cơ, Teo cơ, chứng đau mỏi cơ\nYếu cơ, Loạn dưỡng cơ\nCác chấn thương về cơ, xương, khớp",
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
