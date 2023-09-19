import { Op } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class UserServices {
  async getUserById(id) {
    // Check email exists
    const userDoc = await db.User.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ["password"],
      },
      nest: true,
    });

    if (!userDoc) {
      // Check staff
      const staffDoc = await db.Staff.findByPk(id, {
        raw: true,
        include: [
          {
            model: db.Role,
          },
        ],
        attributes: {
          exclude: ["password"],
        },
        nest: true,
      });

      if (!staffDoc)
        return {
          statusCode: 1,
          msg: "Người dùng không tồn tại.",
        };
      return {
        statusCode: 0,
        msg: "Lấy thông tin nhân viên thành công.",
        data: staffDoc,
      };
    }
    return {
      statusCode: 0,
      msg: "Lấy thông tin người dùng thành công.",
      data: userDoc,
    };
  }

  // Account
  async getUser({ offset = 0, limit = 10, email, fullName }) {
    const whereQuery = {};
    email &&
      (whereQuery.email = {
        [Op.substring]: email,
      });

    fullName &&
      (whereQuery.fullName = {
        [Op.substring]: fullName,
      });
    const accounts = await db.User.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["createdAt", "desc"]],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...accounts,
        limit: limit,
        offset: offset,
      },
    };
  }

  async createOrUpdateUser({
    id,
    email,
    password,
    fullName,
    phone,
    address,
    gender,
    role,
  }) {
    // Create a new Account
    if (!id) {
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
          statusCode: 2,
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
          msg: "Tạo tài khoản người dùng thành công.",
          data: userDoc,
        };
      } else {
        return {
          statusCode: 4,
          msg: "Lỗi tạo tài khoản người dùng.",
        };
      }
    } else {
      // update user
      let passHashCreate = {};
      if (role === "admin") {
        const userPass = await db.User.findByPk(id, { raw: true });

        if (userPass.password === password) {
          passHashCreate.password = password;
        } else {
          const passHash = await bcrypt.hash(password, saltRounds);
          if (!passHash) {
            return {
              statusCode: 2,
              msg: "Mã hóa mật khẩu bị lỗi.",
            };
          }
          passHashCreate.password = passHash;
        }
      }
      const userDocUpdated = await db.User.update(
        {
          email,
          ...passHashCreate,
          fullName,
          phone,
          address,
          gender,
        },
        {
          where: {
            id,
          },
        }
      );
      if (userDocUpdated[0] > 0) {
        return {
          statusCode: 0,
          msg: `Cập nhật người dùng thành công. ${
            role !== "admin" ? "Mật khẩu chưa được thay đổi." : ""
          }`,
        };
      } else {
        return {
          statusCode: 0,
          msg: "Dữ liệu chưa được thay đổi",
        };
      }
    }
  }
}

export default new UserServices();
