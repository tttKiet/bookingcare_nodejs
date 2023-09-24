"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClinicRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClinicRoom.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
      });
    }
  }
  ClinicRoom.init(
    {
      roomNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      healthFacilityId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ClinicRoom",
    }
  );
  return ClinicRoom;
};
