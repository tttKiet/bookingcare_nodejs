"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PrescriptionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrescriptionDetail.belongsTo(models.Cedicine, {
        foreignKey: "cedicineId",
      });
    }
  }
  PrescriptionDetail.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      cedicineId: {
        type: DataTypes.UUID,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "PrescriptionDetail",
    }
  );
  return PrescriptionDetail;
};
