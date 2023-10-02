"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PatientProfiles", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      profession: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      birthDay: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      render: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cccd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PatientProfiles");
  },
};
