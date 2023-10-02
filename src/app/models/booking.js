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
      Booking.belongsTo(models.Code, {
        foreignKey: "statusCode",
        targetKey: "key",
        as: "status",
      });

      Booking.belongsTo(models.Code, {
        foreignKey: "timeCode",
        targetKey: "key",
        as: "time",
      });
      Booking.belongsTo(models.Code, {
        foreignKey: "patientProfileId",
      });
    }
  }
  Booking.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      statusCode: {
        type: DataTypes.STRING,
      },
      timeCode: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      staffId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      patientProfileId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
