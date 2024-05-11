"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ChatMessages", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      chatRoomId: {
        type: Sequelize.UUID,
      },
      role: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },
      isReadUser: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      isReadStaff: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("ChatMessages");
  },
};
