"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HealthFacilities", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressCode: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      typeHealthFacilityId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.DataTypes.STRING),
      },
      markdownHtml: {
        type: Sequelize.TEXT,
      },
      markdownContent: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("HealthFacilities");
  },
};
