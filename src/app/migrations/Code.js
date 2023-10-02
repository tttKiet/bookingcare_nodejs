"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Codes", {
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      key: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Codes");
  },
};
