"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PatientProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientProfile.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });

      PatientProfile.hasMany(models.Booking, {
        foreignKey: "patientProfileId",
        onDelete: "CASCADE",
      });
    }
  }
  PatientProfile.init(
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
      render: {
        type: DataTypes.STRING,
      },
      cccd: {
        type: DataTypes.STRING,
      },
      nation: {
        type: DataTypes.STRING,
      },
      addressCode: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "PatientProfile",
      timestamps: false,
    }
  );
  return PatientProfile;
};
