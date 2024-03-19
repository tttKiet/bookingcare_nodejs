"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HealthRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HealthRecord.belongsTo(models.Code, {
        foreignKey: "statusCode",
        targetKey: "key",
        as: "status",
      });

      HealthRecord.belongsTo(models.Booking, {
        foreignKey: "bookingId",
      });

      HealthRecord.belongsTo(models.Patient, {
        foreignKey: "patientId",
      });

      HealthRecord.hasMany(models.PrescriptionDetail, {
        foreignKey: "healthRecordId",
      });

      HealthRecord.hasMany(models.ServiceDetail, {
        foreignKey: "healthRecordId",
      });
    }
  }
  HealthRecord.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      bookingId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      statusCode: {
        type: DataTypes.STRING,
      },
      orderNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HealthRecord",
      timestamps: false,
    }
  );
  return HealthRecord;
};
