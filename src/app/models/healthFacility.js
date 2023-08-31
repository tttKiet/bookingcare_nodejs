"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HealthFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HealthFacility.belongsTo(models.TypeHealthFacility, {
        foreignKey: "typeHealthFacilityId",
        targetKey: "id",
      });
    }
  }
  HealthFacility.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      typeHealthFacilityId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "HealthFacility",
    }
  );
  return HealthFacility;
};
