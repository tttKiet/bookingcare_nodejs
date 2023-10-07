"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WorkRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkRoom.belongsTo(models.Working, {
        foreignKey: "workingId",
      });

      WorkRoom.belongsTo(models.ClinicRoom);
    }
  }
  WorkRoom.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ClinicRoomRoomNumber: DataTypes.INTEGER,
      ClinicRoomHealthFacilityId: DataTypes.UUID,
      workingId: DataTypes.UUID,
      checkUpPrice: DataTypes.INTEGER,
      applyDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "WorkRoom",
      timestamps: false,
    }
  );
  return WorkRoom;
};
