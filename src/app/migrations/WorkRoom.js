"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkRooms", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      checkUpPrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      applyDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      workingId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      ClinicRoomHealthFacilityId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      ClinicRoomRoomNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("WorkRooms");
  },
};
