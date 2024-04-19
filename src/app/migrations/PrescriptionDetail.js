"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PrescriptionDetails", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      cedicineId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      healthRecordId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      unit: {
        type: Sequelize.STRING,
      },
      morning: {
        type: Sequelize.INTEGER,
      },
      noon: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      afterNoon: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      evening: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      usage: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("PrescriptionDetails");
  },
};
