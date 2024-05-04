"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9502",
        fullName: "Bui Tuan Kiet",
        email: "user@gmail.com",
        password:
          "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
        phone: "0967688854",
        gender: "male",
        address: "444 Phan Châu Trinh, Quận Hải Châu, Đà Nẵng",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "bee0dcde-a6a4-494e-bc3f-89c9540de2e1",
        fullName: "Nguyễn Văn Anh",
        email: "user0@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688528",
        address: "123 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "c258d3e6-874d-4669-b7ad-34443fd09c98",
        fullName: "Trần Thị Bảo Châu",
        email: "user1@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688811",
        address: "45 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "01d44525-e87b-4299-8930-c7fd76dbfda8",
        fullName: "Lê Hoàng Duy",
        email: "user2@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688137",
        address: "789 Lê Duẩn, Quận Hai Bà Trưng, Hà Nội",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "4679826c-908d-4e9f-a2c6-76ba5fe3c21d",
        fullName: "Phạm Quỳnh Hương",
        email: "user3@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688460",
        address: "21 Nguyễn Thị Minh Khai, Quận 3, TP. Hồ Chí Minh",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "c7471af8-b372-4281-be50-45ea73a6b1d5",
        fullName: "Võ Thanh Kiều",
        email: "user4@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688615",
        address: "56 Lý Thường Kiệt, Quận Tân Bình, TP. Hồ Chí Minh",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "742b6ec0-4367-4da8-b6ed-73395681ac66",
        fullName: "Huỳnh Văn Linh",
        email: "user5@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688144",
        address: "112 Trần Phú, Quận Hải Châu, Đà Nẵng",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "ce24165d-cb49-4deb-be71-5f8ff32d0e9a",
        fullName: "Đặng Thị Mai",
        email: "user6@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688525",
        address: "67 Lê Lợi, Quận Ngô Quyền, Hải Phòng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "37ff83ce-6c24-4826-a915-fa7d95e6abd5",
        fullName: "Lâm Văn Nghĩa",
        email: "user7@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688460",
        address: "34 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "02c84af6-1f9a-4b2e-8740-656ca2107673",
        fullName: "Bùi Thị Oanh",
        email: "user8@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688761",
        address: "89 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "715681ec-ef9c-4084-ad5e-42bdef2b856a",
        fullName: "Nguyễn Văn Phúc",
        email: "user9@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688589",
        address: "145 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "5298be53-8166-4551-8e09-128201d6800b",
        fullName: "Trần Thị Quỳnh",
        email: "user10@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688291",
        address: "234 Cao Thắng, Quận 10, TP. Hồ Chí Minh",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "41f1b269-9b4d-4c85-8323-37ebad14f475",
        fullName: "Lê Thanh Sơn",
        email: "user11@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688165",
        address: "456 Bà Triệu, Quận Hai Bà Trưng, Hà Nội",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "00c629d9-6963-4eaa-843f-953e7fcfeb0b",
        fullName: "Phạm Văn Tài",
        email: "user12@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688657",
        address: "678 Lê Lợi, Quận Hải Châu, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "1b3a6427-3316-4ba5-9c6e-81d0685d948f",
        fullName: "Vũ Thị Uyên",
        email: "user13@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688370",
        address: "789 Điện Biên Phủ, Quận Thanh Khê, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "8c642e9e-62ea-4547-962c-4153ff2b9100",
        fullName: "Nguyễn Văn Việt",
        email: "user14@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688972",
        address: "890 Nguyễn Văn Linh, Quận An Hải Bắc, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "3f510e31-c39b-4fa6-98d8-cbce92629f34",
        fullName: "Trần Thị Xuân",
        email: "user15@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688538",
        address: "111 Trần Phú, Quận Hải Châu, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "fb76d8d8-fec1-4e55-a101-a5d2a60b402e",
        fullName: "Lê Văn Yên",
        email: "user16@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688124",
        address: "222 Lê Duẩn, Quận Hải Châu, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "f07b1975-16a3-4f30-ac34-38cf38aa1028",
        fullName: "Phạm Thị Lan",
        email: "user17@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688255",
        address: "333 Lê Lai, Quận Hải Châu, Đà Nẵng",
        gender: "male",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "8b672563-285a-4fbc-a73b-2e4d8d35ea33",
        fullName: "Võ Hoàng Long",
        email: "user18@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688635",
        address: "444 Phan Châu Trinh, Quận Hải Châu, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
      {
        id: "1fee4712-69c4-4647-a9e1-2116ab09e978",
        fullName: "Nguyễn Thị Hương",
        email: "user19@gmail.com",
        password:
          "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
        phone: "0967688865",
        address: "555 Nguyễn Văn Linh, Quận An Hải Bắc, Đà Nẵng",
        gender: "female",
        createdAt: "2024-05-03T10:45:37.826110Z",
        updatedAt: "2024-05-03T10:45:37.826110Z",
      },
    ]);
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
