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
      bookingId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      orderNumber: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HealthRecords");
  },
};
