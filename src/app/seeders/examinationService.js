"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ExaminationServices",
      [
        {
          id: "56921431-a116-4125-bf3d-d51880c56c5d",
          name: "Xét nghiệm máu đồng hồ (CBC)",
          description:
            "Xét nghiệm máu đồng hồ (CBC) là một bước quan trọng trong chuẩn đoán bệnh lý và theo dõi sức khỏe tổng quát, bao gồm việc đánh giá các yếu tố như đếm tế bào máu, hemoglobin, và cân bằng tế bào máu.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "e4b2aa61-993a-41e5-8b3e-9d581fa8a7b1",
          name: "Siêu âm bụng",
          description:
            "Siêu âm bụng là một kỹ thuật hình ảnh không xâm lấn được sử dụng để hình dung các cơ quan bên trong bụng như gan, túi mật, tụy, và ruột để phát hiện bất kỳ vấn đề sức khỏe nào.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "bdc36bc7-320d-4006-b87a-de49aadf9fa7",
          name: "Xét nghiệm nhanh HIV/AIDS",
          description:
            "Xét nghiệm nhanh HIV/AIDS là một phương pháp đơn giản và nhanh chóng để phát hiện kháng nguyên hoặc kháng thể HIV trong máu, giúp xác định liệu một người có nhiễm HIV hay không.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "73900570-e42c-4ea3-afdd-d1e81050bad8",
          name: "Chụp cắt lớp MRI não",
          description:
            "Chụp cắt lớp MRI não là một kỹ thuật hình ảnh chính xác cao được sử dụng để tạo ra hình ảnh chi tiết của não, giúp chẩn đoán các bệnh lý não bộ như động kinh, đột quỵ, hoặc khối u.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
          name: "Xét nghiệm nước tiểu",
          description:
            "Xét nghiệm nước tiểu là một phương pháp đơn giản để kiểm tra sức khỏe của bàng quang và các cơ quan tiết niệu, bao gồm việc đánh giá mức độ đường huyết, protein, và các tế bào bất thường trong nước tiểu.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "025c94df-1698-4786-b965-0bcdf0c4a262",
          name: "Siêu âm tim",
          description:
            "Siêu âm tim là một kỹ thuật không xâm lấn được sử dụng để hình ảnh và đánh giá cấu trúc và chức năng của trái tim, giúp phát hiện và theo dõi các vấn đề tim mạch như van tim bất thường hay tăng huyết áp.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "72bd2f8f-8c3d-4764-b0b5-db36fa9bebbb",
          name: "Xét nghiệm chức năng gan",
          description:
            "Xét nghiệm chức năng gan là một bộ xét nghiệm máu đặc biệt được sử dụng để đánh giá hoạt động của gan và xác định các vấn đề sức khỏe liên quan đến gan như viêm gan, xơ gan, hoặc chức năng gan suy giảm.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "2a297db6-745d-4b5c-88e1-5fbc1c7da66c",
          name: "Xét nghiệm đường huyết",
          description:
            "Xét nghiệm đường huyết là một phương pháp quan trọng để đánh giá mức độ đường huyết trong máu, giúp chẩn đoán và theo dõi các vấn đề sức khỏe liên quan đến đái tháo đường và chất lượng điều trị.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "8424a07f-90f1-4572-9d1c-ebef3e027472",
          name: "Siêu âm phổi",
          description:
            "Siêu âm phổi là một kỹ thuật hình ảnh không xâm lấn được sử dụng để đánh giá cấu trúc và chức năng của phổi, giúp phát hiện và theo dõi các vấn đề sức khỏe phổi như viêm phổi, nước trong phổi, hay khối u.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
        },
        {
          id: "019b4a22-64cc-4d73-9bba-5346bc9dac28",
          name: "Xét nghiệm chức năng thận",
          description:
            "Xét nghiệm chức năng thận là một loạt các xét nghiệm máu và nước tiểu được sử dụng để đánh giá hoạt động của thận và xác định các vấn đề sức khỏe liên quan đến thận như suy thận, viêm thận, hay độ acid uric cao.",
          createdAt: "2024-05-03T23:37:46.675054Z",
          updatedAt: "2024-05-03T23:37:46.675054Z",
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
