import { Op } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class UserServices {
  async createUser({ email, password, fullName, phone, address, gender }) {
    // Check email exists
    const userExisted = await db.User.findOne({
      where: {
        [Op.or]: {
          email,
          phone,
        },
      },
      raw: true,
    });

    if (userExisted)
      return {
        statusCode: 2,
        msg:
          userExisted.email === email
            ? "Email đã tồn tại."
            : "Số điện thoại đã tồn tại.",
      };

    const passHash = await bcrypt.hash(password, saltRounds);
    if (!passHash) {
      return {
        statusCode: 3,
        msg: "Mã hóa mật khẩu bị lỗi.",
      };
    }
    const userDoc = await db.User.create({
      email,
      password: passHash,
      fullName,
      phone,
      address,
      gender,
    });

    if (userDoc) {
      return {
        statusCode: 0,
        msg: "Đăng ký người dùng thành công.",
        data: userDoc,
      };
    } else {
      return {
        statusCode: 4,
        msg: "Lỗi đăng ký. Vui lòng thử lại sau!",
      };
    }
  }
  async getUserById(id) {
    // Check email exists
    const userDoc = await db.User.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ["password"],
      },
      nest: true,
      include: [db.Role],
    });

    if (!userDoc) {
      return {
        statusCode: 1,
        msg: "Người dùng không tồn tại.",
      };
    }
    return {
      statusCode: 0,
      msg: "Lấy thông tin người dùng thành công.",
      data: userDoc,
    };
  }
}

export default new UserServices();
