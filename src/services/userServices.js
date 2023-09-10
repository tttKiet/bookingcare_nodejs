import { Op } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class UserServices {
  async createUser({
    email,
    password,
    fullName,
    phone,
    address,
    gender,
    dataDoctor, //: { certificate, experience, positionId },
  }) {
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
      ...dataDoctor,
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

  // POSITION
  async getPosition({ offset = 0, limit = 100 }) {
    const specialistDoc = await db.Position.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["createdAt", "desc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...specialistDoc,
        limit: limit,
        offset: offset,
      },
    };
  }

  async createOrUpdatePosition({ id, name }) {
    // Create a new position
    let whereOptions = {};
    if (!id)
      whereOptions = {
        id: { [Op.ne]: id },
      };
    const positionExisted = await db.Position.findOne({
      where: {
        name,
        ...whereOptions,
      },
      raw: true,
    });
    if (positionExisted)
      return {
        statusCode: 1,
        msg: "Vị trí, danh hiệu đã tồn tại.",
      };
    if (!id) {
      const positionDoc = await db.Position.create({
        name,
      });
      if (positionDoc) {
        return {
          statusCode: 0,
          msg: "Tạo vị trí, danh hiệu thành công.",
          data: positionDoc,
        };
      } else {
        return {
          statusCode: 3,
          msg: "Lỗi tạo vị trí, danh hiệu. Vui lòng thử lại sau!",
        };
      }
    } else {
      const positionDoc = await db.Position.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );

      if (positionDoc?.[0] > 0) {
        return {
          statusCode: 0,
          msg: "Đã lưu thay đổi.",
        };
      }
      return {
        statusCode: 3,
        msg: "Đã có lỗi xảy ra. Vui lòng thử lại sau!",
      };
    }
  }

  async deletePosition({ id, name }) {
    const specialistDoc = await db.Position.destroy({
      where: {
        id,
      },
      force: true,
    });

    if (specialistDoc > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: specialistDoc,
      };
    }

    return {
      statusCode: 1,
      msg: "Xóa thất bại.",
    };
  }
}

export default new UserServices();
