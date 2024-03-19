"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HospitalServices", {
      examinationServiceId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      healthFacilityId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      isAcctive: {
        defaultValue: true,
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
    await queryInterface.dropTable("HospitalServices");
  },
};
