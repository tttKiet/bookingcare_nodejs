"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Code.hasMany(models.HealthExaminationSchedule, {
        foreignKey: "timeCode",
        sourceKey: "key",
      });
      Code.hasMany(models.HealthRecord, {
        foreignKey: "statusCode",
        sourceKey: "key",
        as: "status",
      });
      Code.hasMany(models.Booking, {
        foreignKey: "status",
        sourceKey: "key",
      });
    }
  }
  Code.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      key: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Code",
      timestamps: false,
    }
  );
  return Code;
};
