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
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      examinationServiceId: {
        type: DataTypes.INTEGER,
      },
      healthFacilityId: {
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
