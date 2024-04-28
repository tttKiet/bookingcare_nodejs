"use strict";
const { Model, models } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Staff.belongsTo(models.Role, {
        foreignKey: "roleId",
        targetKey: "id",
      });

      Staff.belongsTo(models.AcademicDegree, {
        foreignKey: "academicDegreeId",
        targetKey: "id",
      });

      Staff.belongsTo(models.Specialist, {
        foreignKey: "specialistId",
        targetKey: "id",
      });

      Staff.hasMany(models.HospitalManager, {
        foreignKey: "staffId",
      });

      Staff.hasMany(models.Review, {
        foreignKey: "staffId",
      });
    }
  }
  Staff.init(
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
      academicDegreeId: DataTypes.UUID,
      specialistId: DataTypes.UUID,
      markdownHtml: {
        type: DataTypes.TEXT,
      },
      markdownContent: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Staff",
      hooks: {
        beforeCreate: async (staff, options) => {
          if (!staff.roleId) {
            const defaultRole = await sequelize.models.Role.findOne({
              where: {
                keyType: "doctor",
              },
            });

            if (defaultRole) {
              staff.roleId = defaultRole.id;
            }
          }
        },
      },
    }
  );

  return Staff;
};
