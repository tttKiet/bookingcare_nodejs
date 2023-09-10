"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Specialists", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descriptionDisease: {
        allowNull: false,
        type: Sequelize.STRING(1000),
        validate: {
          len: {
            args: [0, 1000],
            msg: "Mô tả căn bệnh từ 0 - 1000 kí tự.",
          },
        },
      },
      descriptionDoctor: {
        type: Sequelize.STRING(1000),
        validate: {
          len: {
            args: [0, 1000],
            msg: "Mô tả bác sỉ chửa trị từ 0 - 1000 kí tự.",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Specialists");
  },
};
