"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.HealthExaminationSchedule, {
        foreignKey: "healthExaminationScheduleId",
      });

      Booking.belongsTo(models.PatientProfile, {
        foreignKey: "patientProfileId",
      });

      Booking.hasOne(models.HealthRecord, {
        foreignKey: "bookingId",
      });

      Booking.belongsTo(models.Code, {
        foreignKey: "status",
        targetKey: "key",
      });
    }
  }
  Booking.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      descriptionDisease: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      healthExaminationScheduleId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      patientProfileId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      doctorPrice: {
        allowNull: false,
        type: DataTypes.REAL,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      paymentType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
