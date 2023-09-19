"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Checkup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Checkup.belongsTo(models.Specialist, {
        foreignKey: "specialistId",
        targetKey: "id",
      });
      Checkup.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
        targetKey: "id",
      });
    }
  }
  Checkup.init(
    {
      healthFacilityId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      specialistId: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Checkup",
      timestamps: false,
    }
  );
  return Checkup;
};
