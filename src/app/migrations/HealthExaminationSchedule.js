"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HealthExaminationSchedules", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      date: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      timeCode: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      workingId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      maxNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HealthExaminationSchedules");
  },
};
