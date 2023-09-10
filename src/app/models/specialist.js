"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialist.hasMany(models.Checkup, {
        foreignKey: "specialistId",
      });
    }
  }
  Specialist.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      descriptionDisease: DataTypes.STRING,
      descriptionDoctor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialist",
    }
  );
  return Specialist;
};
