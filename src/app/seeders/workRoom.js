"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WorkRooms",
      [
        {
          id: "a0fdb62e-32a5-46cb-9031-52ce52a66e0d",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "d6f4d58e-f7a9-496c-98c4-41b58e04541f",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "7ac29cdb-4773-425c-a073-aa409281610a",
          ClinicRoomRoomNumber: 102,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "9186a501-0ab4-4e3a-94c6-d167af8af32c",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "f464715b-f329-4b6c-8661-fbf618b887d3",
          ClinicRoomRoomNumber: 102,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "9e65668e-3708-4fd5-9f20-115c44dd65c2",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "2a1097e2-249d-4c6b-ae5b-98741c17962b",
          ClinicRoomRoomNumber: 201,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "50d23b65-c8e3-48b7-ba7b-a2cf8a0cb255",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "08b0182a-c539-4344-b258-8924eabf3da1",
          ClinicRoomRoomNumber: 300,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "2ec2cf94-63cd-4d9c-9fad-ca8a9e418a8d",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "e8a14aae-5750-4c50-a59d-31eee16dc6d8",
          ClinicRoomRoomNumber: 300,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "dd771cc0-8425-4505-b536-95898128a77a",
          checkUpPrice: 4,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "8abc9bf8-7ee6-4a57-964c-072d24ab2357",
          ClinicRoomRoomNumber: 301,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "62f6cbfb-4078-4cbe-a377-28b74766185e",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "38add3eb-9707-4502-9678-622f386c8f38",
          ClinicRoomRoomNumber: 301,
          ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
          workingId: "f00fb219-5bfc-46a3-aaf3-02ee015556fb",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "1e57d07c-a116-4f2b-a0ed-f82406822529",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
          workingId: "8bb1df38-1810-4933-817e-2f035033bf8a",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "3c98d31e-505f-496a-bfe5-cfb9405a3ab4",
          ClinicRoomRoomNumber: 102,
          ClinicRoomHealthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
          workingId: "0df6b262-bcad-4564-a2e0-829dee5050f1",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "3b5b2001-7c8d-4a5f-bf1c-ac828baa6ca5",
          ClinicRoomRoomNumber: 100,
          ClinicRoomHealthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
          workingId: "1bdf27e3-5093-4908-8d82-25f246350289",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "561710bc-cc30-4314-acdd-90eb3c16c685",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
          workingId: "a8a6de91-f050-4d16-8584-dd277e9cd8f2",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "efb6904a-920e-497b-9100-1674830d8fbd",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
          workingId: "46c85f27-70ea-441a-8345-a2d46df6ce88",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "84414d41-7342-47be-9e6c-6f86c8980665",
          ClinicRoomRoomNumber: 201,
          ClinicRoomHealthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
          workingId: "ca06933e-5cfc-4ed2-a526-a7cefd60ac14",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "b07767aa-96ce-4758-aca5-56c97993929f",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
          workingId: "481f855b-847f-4452-987b-51cbe33dee69",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "28298030-ae43-4cf2-93bf-65da232b55fc",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
          workingId: "3e7908ea-d41b-4694-bb18-2720049f931a",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "2a5ce14f-659d-4072-8e6a-da302daafff3",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
          workingId: "f8f55815-c777-4c74-9a04-3ae7b780f947",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "498c39b3-469b-4076-9e97-7b8b2eae18f2",
          ClinicRoomRoomNumber: 100,
          ClinicRoomHealthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
          workingId: "90837230-cd7a-4c7b-8bd5-31994acc1a25",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "a62d3864-0b5f-41dc-a061-cfcc6519219b",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
          workingId: "078d43cc-5c45-4f9e-baee-677a4349676f",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "68f0d955-139d-4058-8ec1-ddf54ca9864b",
          ClinicRoomRoomNumber: 99,
          ClinicRoomHealthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
          workingId: "be771412-c286-497d-9d8a-0414cdd57423",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "81720102-7471-4d48-b36a-2ea3fb0186db",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          workingId: "5d1378c1-4c22-4571-877c-3509715146c6",
          checkUpPrice: 200000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "3d10c0b5-0f60-47a4-9c6e-fc80be7dcaed",
          ClinicRoomRoomNumber: 102,
          ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          workingId: "8341cc0c-cb4c-41cf-ae93-c6712af8145a",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "ae1edcfd-0934-42ad-bbef-09b92e2e1867",
          ClinicRoomRoomNumber: 103,
          ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
          workingId: "743c19d1-45bd-46bd-a5bf-68d4d3de4812",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "351437e5-eb7b-4f41-918f-7ce576fb3de7",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
          workingId: "aba019f9-30d1-42b5-b588-6c9595ae7e95",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "e3f5e387-b391-4a6e-b2e9-f458f05940b6",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
          workingId: "107699da-e94c-4ad9-a418-d5d26d3e56d0",
          checkUpPrice: 500000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "1c847161-f2e1-4711-bdbb-cec5cd862f9c",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
          workingId: "6758330f-f2ee-47bb-8487-bce6b45bb20a",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "e4253eb7-1f9e-4bac-bd34-c4953fec6c33",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
          workingId: "fe1e2b0a-4c2f-4b15-aa1e-56724b33b38e",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
        },
        {
          id: "d049c16a-e1ad-4ee6-bfa6-fd2f5c3144ed",
          ClinicRoomRoomNumber: 101,
          ClinicRoomHealthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
          workingId: "2a1d9020-2e9b-4889-b7c3-648f6a1ef0c5",
          checkUpPrice: 100000,
          applyDate: "2024-05-04T00:00:00.000Z",
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
