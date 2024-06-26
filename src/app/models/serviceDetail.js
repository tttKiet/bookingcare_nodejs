"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ServiceDetail.belongsTo(models.HospitalService, {
        foreignKey: "hospitalServiceId",
      });

      ServiceDetail.belongsTo(models.HealthRecord, {
        foreignKey: "healthRecordId",
      });
    }
  }
  ServiceDetail.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      hospitalServiceId: {
        type: DataTypes.UUID,
      },
      healthRecordId: {
        type: DataTypes.UUID,
      },
      descriptionResult: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "ServiceDetail",
    }
  );
  return ServiceDetail;
};
