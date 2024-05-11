import { Op, where } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
import workServices from "./workServices";
import { raw } from "express";
import { searchLikeDeep, sendEmail as sendEmailHtml } from "../untils";
import moment from "moment";
import * as path from "path";
import staffServices from "./staffServices";

const saltRounds = 10;

class ChatServices {
  async jionRoom({ staffId, userId }) {
    const existedRoom = await db.ChatRoom.findOne({
      where: {
        staffId,
        userId,
      },
      raw: true,
    });
    if (existedRoom) return existedRoom;
    const room = await db.ChatRoom.create({
      staffId,
      userId,
    });
    const data = room.get({});
    return data;
  }

  async getRoom({ staffId, userId }) {
    const where = {};
    if (staffId) {
      where.staffId = staffId;
    }
    if (userId) {
      where.userId = userId;
    }
    const existedRoom = await db.ChatRoom.findAll({
      where: where,
      include: [
        {
          model: db.Staff,
          include: [db.Specialist, db.AcademicDegree],
        },
        db.User,
      ],
      nest: true,
      raw: true,
    });
    if (existedRoom)
      return {
        statusCode: 0,
        msg: "Lấy thành công",
        data: existedRoom,
      };
  }

  async getRoomMessage({ chatRoomId }) {
    const existedRoom = await db.ChatMessage.findAll({
      where: {
        chatRoomId,
      },
      include: [
        {
          model: db.ChatRoom,
          include: [
            {
              model: db.Staff,
              include: [db.Specialist, db.AcademicDegree],
            },
            db.User,
          ],
        },
      ],
      nest: true,
      raw: true,

      order: [["createdAt", "desc"]],
    });
    if (existedRoom)
      return {
        statusCode: 0,
        msg: "Lấy thành công",
        data: existedRoom,
      };
  }

  async createMessage({ chatRoomId, message, role }) {
    const existedRoom = await db.ChatMessage.create({
      chatRoomId,
      message,
      role,
    });
    if (existedRoom) return existedRoom.get({});
  }
}

export default new ChatServices();
