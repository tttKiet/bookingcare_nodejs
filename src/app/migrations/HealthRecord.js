"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HealthRecords", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      statusCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      diagnosis: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      bookingId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      patientId: {
        allowNull: false,
        type: Sequelize.UUID,
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
    await queryInterface.dropTable("HealthRecords");
  },
};
