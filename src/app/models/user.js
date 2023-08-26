"use strict";
const { Model, models } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        targetKey: "id",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      experience: DataTypes.STRING,
      certificate: DataTypes.STRING,
      roleId: DataTypes.UUID,
      positionId: DataTypes.UUID,
      specialistId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user, options) => {
          const defaultRole = await sequelize.models.Role.findOne({
            where: {
              keyType: "user",
            },
          });

          if (defaultRole) {
            user.roleId = defaultRole.id;
          }
        },
      },
    }
  );

  return User;
};
