"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HospitalService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HospitalService.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
      });
      HospitalService.belongsTo(models.ExaminationService, {
        foreignKey: "examinationServiceId",
      });

      HospitalService.hasMany(models.ServiceDetail, {
        foreignKey: "hospitalServiceId",
      });
    }
  }
  HospitalService.init(
    {
      examinationServiceId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      healthFacilityId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      price: {
        type: DataTypes.REAL,
      },
      isAcctive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "HospitalService",
    }
  );
  return HospitalService;
};
