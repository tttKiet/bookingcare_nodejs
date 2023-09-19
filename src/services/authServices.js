import db from "../app/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

class authServices {
  async login({ email, password }) {
    // Check user exists
    const findUser = db.User.findOne({
      where: {
        email,
      },
      raw: true,
      nest: true,
    });
    const findStaff = db.Staff.findOne({
      where: {
        email,
      },
      include: [
        {
          model: db.Role,
        },
      ],
      raw: true,
      nest: true,
    });
    const [userDoc, staffDoc] = await Promise.all([findUser, findStaff]);

    if (!userDoc && !staffDoc) {
      return {
        statusCode: 1,
        msg: "Email not found.",
      };
    }

    // Check password
    let isValidPass = false;

    if (userDoc) {
      isValidPass = await bcrypt.compare(password, userDoc.password);
    } else isValidPass = await bcrypt.compare(password, staffDoc.password);
    if (!isValidPass) {
      return {
        statusCode: 2,
        msg: "Password invalid.",
      };
    }

    // Create JWT token
    const dataSign = {
      email: userDoc ? userDoc.email : staffDoc.email,
      userId: userDoc ? userDoc.id : staffDoc.id,
      role: userDoc
        ? {
            id: "user",
            keyType: "user",
          }
        : staffDoc.Role,
    };
    const token = await jwt.sign(dataSign, process.env.PRIVATE_KEY_JWT, {
      expiresIn: "1d",
    });
    const expiresIn = Math.floor(new Date().getTime() / 1000);
    return {
      statusCode: 0,
      msg: "Login successfully.",
      token: token,
      user: dataSign,
      expiresIn,
    };
  }

  async getRole({ option }) {
    let roleDoc = null;
    if (option == "all") {
      roleDoc = await db.Role.findAll({ raw: true });
      return {
        statusCode: 0,
        msg: "Lấy role thành công.",
        data: roleDoc,
      };
    } else {
      roleDoc = await db.Role.findAll({
        raw: true,
        where: {
          keyType: {
            [Op.notLike]: "admin",
          },
        },
      });

      return {
        statusCode: 0,
        msg: "Lấy role thành công.",
        data: roleDoc,
      };
    }
  }
}

export default new authServices();
