"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HealthExaminationSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HealthExaminationSchedule.belongsTo(models.Code, {
        targetKey: "key",
        foreignKey: "timeCode",
        as: "TimeCode",
      });
      HealthExaminationSchedule.belongsTo(models.Working, {
        foreignKey: "workingId",
      });
    }
  }
  HealthExaminationSchedule.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.STRING,
      },
      timeCode: {
        type: DataTypes.STRING,
      },
      workingId: {
        type: DataTypes.UUID,
      },
      maxNumber: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "HealthExaminationSchedule",
      timestamps: false,
      indexes: [
        {
          unique: true,
          name: "schedule",
          fields: ["date", "workingId", "timeCode"], // you can use multiple columns as well here
        },
      ],
    }
  );
  return HealthExaminationSchedule;
};
