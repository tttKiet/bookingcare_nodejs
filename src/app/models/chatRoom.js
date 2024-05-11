"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatRoom.hasMany(models.ChatMessage, {
        foreignKey: "chatRoomId",
      });

      ChatRoom.belongsTo(models.User, {
        foreignKey: "userId",
      });

      ChatRoom.belongsTo(models.Staff, {
        foreignKey: "staffId",
      });
    }
  }
  ChatRoom.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
      },
      staffId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "ChatRoom",
    }
  );
  return ChatRoom;
};
