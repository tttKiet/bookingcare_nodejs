"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cedicines",
      [
        {
          id: "59ec1c59-ce6c-42ae-9d36-928bfb4c07ab",
          name: "Paracetamol",
          desc: "Paracetamol là một loại thuốc giảm đau và hạ sốt phổ biến được sử dụng để điều trị đau nhức và sốt.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "d2d2427f-a0fc-4ea5-8673-51d2e80e3b8f",
          name: "Ibuprofen",
          desc: "Ibuprofen là một loại thuốc giảm đau, chống viêm và hạ sốt thường được sử dụng để giảm đau và viêm.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "1801c790-ef11-4799-9d9f-6c80b57810d9",
          name: "Aspirin",
          desc: "Aspirin là một loại thuốc giảm đau, chống viêm và có tác dụng ức chế đông máu, thường được sử dụng để giảm đau và hạ sốt.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "3e266b3d-d919-42e0-a0d9-d31dc9f81fd7",
          name: "Cetirizine",
          desc: "Cetirizine là một loại thuốc chống dị ứng (antihistamine) được sử dụng để giảm triệu chứng dị ứng như sổ mũi, ngứa và nước mắt.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "18049b80-4e64-4e7f-b18c-06929a56b629",
          name: "Loratadine",
          desc: "Loratadine là một loại thuốc chống dị ứng (antihistamine) được sử dụng để giảm triệu chứng dị ứng như sổ mũi, ngứa và nước mắt.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "5564b7af-a651-4364-a76d-c6f5ba9ff9db",
          name: "Omeprazole",
          desc: "Omeprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị bệnh loét dạ dày và dạ dày.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "4cc71f0f-21f5-492d-b2f5-c5bd352e801c",
          name: "Lansoprazole",
          desc: "Lansoprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị bệnh loét dạ dày và dạ dày.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "d9672f8e-e0f8-4fcf-96d3-de19c7895468",
          name: "Amoxicillin",
          desc: "Amoxicillin là một loại thuốc kháng sinh penicillin thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như viêm họng và viêm phổi.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "85b33509-b728-4b3c-b6aa-ecaf12343ee8",
          name: "Azithromycin",
          desc: "Azithromycin là một loại thuốc kháng sinh macrolide thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như viêm họng, viêm phổi và bệnh truyền nhiễm.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "f55edb72-01bf-4765-83f3-70d632f6103c",
          name: "Ciprofloxacin",
          desc: "Ciprofloxacin là một loại thuốc kháng sinh fluoroquinolone thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như tiêu chảy và nhiễm trùng tiểu đường.",
          createdAt: "2024-05-04T00:27:50.091609Z",
          updatedAt: "2024-05-04T00:27:50.091609Z",
        },
        {
          id: "887edcb8-1c8b-4d4e-85b6-f5f13687e7c8",
          name: "Naproxen",
          desc: "Naproxen là một loại thuốc chống viêm không steroid (NSAID) thường được sử dụng để giảm đau và viêm.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "457c97f4-4801-4f77-b49d-3eb722c0c110",
          name: "Diphenhydramine",
          desc: "Diphenhydramine là một loại thuốc chống dị ứng (antihistamine) thường được sử dụng để giảm triệu chứng dị ứng và ngủ.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "7f0195e2-7b47-4c13-b9b0-aa08f7278c10",
          name: "Cimetidine",
          desc: "Cimetidine là một loại thuốc ức chế H2 được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "a23a8521-b9c6-4fe8-9849-65e3f523a8b8",
          name: "Ranitidine",
          desc: "Ranitidine là một loại thuốc ức chế H2 được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "94c7f7cd-e35e-4317-95e0-34d256f9bfde",
          name: "Simvastatin",
          desc: "Simvastatin là một loại thuốc giảm cholesterol được sử dụng để điều trị tăng cholesterol máu.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "0d560ae2-26e5-485c-a074-e3c3133a83e7",
          name: "Atorvastatin",
          desc: "Atorvastatin là một loại thuốc giảm cholesterol được sử dụng để điều trị tăng cholesterol máu.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "3b2f4237-4ad5-4020-866d-48965f813e2d",
          name: "Furosemide",
          desc: "Furosemide là một loại thuốc lợi tiểu (diuretic) thường được sử dụng để điều trị cao huyết áp và suy tim.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "77ddb0b3-654a-4338-9526-039df4006693",
          name: "Metformin",
          desc: "Metformin là một loại thuốc giảm đường huyết thường được sử dụng để điều trị tiểu đường.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "e0dd6fed-e319-4f2f-8e98-fce9eb3b2b72",
          name: "Prednisone",
          desc: "Prednisone là một loại thuốc corticosteroid thường được sử dụng để điều trị viêm nhiễm và rối loạn miễn dịch.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "297f7ef4-582a-4e96-bf3c-1ac41f07f586",
          name: "Cephalexin",
          desc: "Cephalexin là một loại thuốc kháng sinh cephalosporin thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "f06ed813-d57e-427a-a2d2-93c6bccd0a29",
          name: "Levofloxacin",
          desc: "Levofloxacin là một loại thuốc kháng sinh fluoroquinolone thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "71db4c73-9950-4e02-ac58-07e5ec7223c5",
          name: "Doxycycline",
          desc: "Doxycycline là một loại thuốc kháng sinh tetracycline thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "b50f111f-b340-4a0b-a7ae-e811c7a9b966",
          name: "Fluconazole",
          desc: "Fluconazole là một loại thuốc kháng nấm thường được sử dụng để điều trị nhiễm nấm.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "10e0d635-ef61-41e4-80e5-33fb7d2c8207",
          name: "Pantoprazole",
          desc: "Pantoprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "ffc9b1ec-3471-4728-9b86-a1e1a1b0e31e",
          name: "Metronidazole",
          desc: "Metronidazole là một loại thuốc kháng sinh nitroimidazole thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "911e3f91-10b6-47ea-bfd0-dd3982cb0d48",
          name: "Amitriptyline",
          desc: "Amitriptyline là một loại thuốc chống trầm cảm và cũng được sử dụng để điều trị đau thần kinh.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "3adf73b4-5396-4f8f-9f34-fcc82a751d62",
          name: "Bupropion",
          desc: "Bupropion là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và hỗ trợ ngừng hút thuốc lá.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "6efb2476-275d-4d9f-9d0e-71b5be251b30",
          name: "Venlafaxine",
          desc: "Venlafaxine là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và rối loạn lo âu.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "ef61077c-bbe4-46da-b8ad-7b0ce5d119c4",
          name: "Sertraline",
          desc: "Sertraline là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm, rối loạn lo âu và rối loạn ám ảnh.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "e75b9af6-f8c9-4977-9d7e-72c95a3232f1",
          name: "Trazodone",
          desc: "Trazodone là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và rối loạn ngủ.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "9c556f07-1998-409a-b3ec-88f8677a863a",
          name: "Olanzapine",
          desc: "Olanzapine là một loại thuốc chống loạn thần thường được sử dụng để điều trị rối loạn tâm thần.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "deaa365e-e50d-43ae-ba84-bd42c9c35f3a",
          name: "Lorazepam",
          desc: "Lorazepam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để giảm lo âu và căng thẳng.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "677fd20e-74bb-4904-889d-b4045c0d722d",
          name: "Clonazepam",
          desc: "Clonazepam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để điều trị lo âu và co giật.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "b97aa0bb-5c37-4f87-8018-a21640289621",
          name: "Alprazolam",
          desc: "Alprazolam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để giảm lo âu và căng thẳng.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
        },
        {
          id: "6b823d2d-be50-4600-9fc6-84678b98e73c",
          name: "Zolpidem",
          desc: "Zolpidem là một loại thuốc an thần giảm căng thẳng thường được sử dụng để điều trị rối loạn ngủ.",
          createdAt: "2024-05-04T00:30:15.631342Z",
          updatedAt: "2024-05-04T00:30:15.631342Z",
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
