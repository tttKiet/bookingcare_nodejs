"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ClinicRooms", {
      roomNumber: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      healthFacilityId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      capacity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("ClinicRooms");
  },
};
