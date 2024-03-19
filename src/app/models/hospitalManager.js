"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HospitalManager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HospitalManager.belongsTo(models.Staff, {
        foreignKey: "staffId",
      });

      HospitalManager.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
      });
    }
  }
  HospitalManager.init(
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
      isAcctive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "HospitalManager",
    }
  );
  return HospitalManager;
};
