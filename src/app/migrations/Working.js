"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Workings", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      staffId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      healthFacilityId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATE,
        validate: {
          isEndDateAfterStartDate(value) {
            // Kiểm tra nếu endDate không null và lớn hơn hoặc bằng startDate
            if (this.endDate !== null && this.endDate <= this.startDate) {
              throw new Error("Ngày kết thúc phải lớn hơn ngày bắt đầu.");
            }
          },
        },
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
    await queryInterface.dropTable("Workings");
  },
};
