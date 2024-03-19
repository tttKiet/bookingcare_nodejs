"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ExaminationService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ExaminationService.hasMany(models.HospitalService, {
        foreignKey: "examinationServiceId",
      });
    }
  }
  ExaminationService.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ExaminationService",
    }
  );
  return ExaminationService;
};
