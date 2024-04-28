"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Staff, {
        foreignKey: "staffId",
      });
      Review.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Review.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      staffId: DataTypes.UUID,
      userId: DataTypes.UUID,
      starNumber: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
