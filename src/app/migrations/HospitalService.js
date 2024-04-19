"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HospitalServices", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      examinationServiceId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      healthFacilityId: {
        allowNull: false,
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
