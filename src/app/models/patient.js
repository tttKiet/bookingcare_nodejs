"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.HealthFacility, {
        foreignKey: "healthFacilityId",
        onDelete: "CASCADE",
      });

      Patient.hasMany(models.HealthRecord, {
        foreignKey: "patientId",
        onDelete: "CASCADE",
      });
    }
  }
  Patient.init(
    {
      id: {
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      fullName: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      profession: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      birthDay: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      cccd: {
        type: DataTypes.STRING,
      },
      nation: {
        type: DataTypes.STRING,
      },
      addressCode: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      healthFacilityId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Patient",
      timestamps: true,
    }
  );
  return Patient;
};
