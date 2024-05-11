"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatMessage.belongsTo(models.ChatRoom, {
        foreignKey: "chatRoomId",
      });
    }
  }
  ChatMessage.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      chatRoomId: {
        type: DataTypes.UUID,
      },
      message: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
      isReadStaff: DataTypes.BOOLEAN,
      isReadUser: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ChatMessage",
    }
  );
  return ChatMessage;
};
