"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Working extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Working.belongsTo(models.Staff, {
        foreignKey: "staffId",
        targetKey: "id",
      });
      Working.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
        targetKey: "id",
      });
      Working.hasMany(models.WorkRoom, {
        foreignKey: "workingId",
      });
    }
  }
  Working.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      staffId: {
        type: DataTypes.UUID,
      },
      healthFacilityId: {
        type: DataTypes.UUID,
      },
      startDate: DataTypes.DATE,
      endDate: {
        type: DataTypes.DATE,
        validate: {
          isEndDateAfterStartDate(value) {
            // Kiểm tra nếu endDate không null và lớn hơn hoặc bằng startDate
            if (this.endDate !== null && this.endDate <= this.startDate) {
              throw new Error("endDate phải lớn hơn startDate.");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Working",
    }
  );
  return Working;
};
