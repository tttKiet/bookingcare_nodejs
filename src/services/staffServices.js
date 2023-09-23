import { Op, where } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class StaffServices {
  // AcademicDegree
  async getAcademicDegree({ offset = 0, limit = 100 }) {
    const academicDegreeDoc = await db.AcademicDegree.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["createdAt", "desc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...academicDegreeDoc,
        limit: limit,
        offset: offset,
      },
    };
  }

  async createOrUpdateAcademicDegree({ id, name }) {
    let whereOptions = {};
    if (id)
      whereOptions = {
        id: { [Op.ne]: id },
      };

    // Check if acedemic degree already exists
    const academicDegreeExisted = await db.AcademicDegree.findOne({
      where: {
        name,
        ...whereOptions,
      },
      raw: true,
    });
    if (academicDegreeExisted)
      return {
        statusCode: 1,
        msg: "Học vị đã tồn tại.",
      };
    if (!id) {
      // Create a new AcademicDegree
      const academicDegreeDoc = await db.AcademicDegree.create({
        name,
      });
      if (academicDegreeDoc) {
        return {
          statusCode: 0,
          msg: "Tạo học vị thành công.",
          data: academicDegreeDoc,
        };
      } else {
        return {
          statusCode: 3,
          msg: "Lỗi tạo học vị. Vui lòng thử lại sau!",
        };
      }
    } else {
      // Update the AcademicDegree
      const academicDegreeDoc = await db.AcademicDegree.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );

      if (academicDegreeDoc?.[0] > 0) {
        return {
          statusCode: 0,
          msg: "Đã lưu thay đổi.",
        };
      }
      return {
        statusCode: 3,
        msg: "Đã có lỗi xảy ra. Không có id!",
      };
    }
  }

  async deleteAcademicDegree({ id, name }) {
    const academicDegreeDoc = await db.AcademicDegree.destroy({
      where: {
        id,
      },
      force: true,
    });

    if (academicDegreeDoc > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: academicDegreeDoc,
      };
    }

    return {
      statusCode: 1,
      msg: "Xóa thất bại.",
    };
  }

  // Get Doctor With Email
  async getDoctorWithEmail({ offset = 0, limit = 3, email }) {
    const whereQuery = {};
    email &&
      (whereQuery.email = {
        [Op.substring]: email,
      });

    const accounts = await db.Staff.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["createdAt", "desc"]],
      nest: true,
      include: [
        {
          model: db.Role,
          where: {
            keyType: "doctor",
          },
        },
        {
          model: db.AcademicDegree,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Specialist,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
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

  // Staff
  async getStaff({ offset = 0, limit = 10, email, fullName }) {
    const whereQuery = {};
    email &&
      (whereQuery.email = {
        [Op.substring]: email,
      });

    fullName &&
      (whereQuery.fullName = {
        [Op.substring]: fullName,
      });
    const accounts = await db.Staff.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["createdAt", "desc"]],
      nest: true,
      include: [
        {
          model: db.Role,
          where: {
            keyType: {
              [Op.ne]: "admin",
            },
          },
        },
        {
          model: db.AcademicDegree,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Specialist,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
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

  async createOrUpdateStaff({
    id,
    email,
    password,
    fullName,
    phone,
    address,
    gender,
    academicDegreeId,
    specialistId,
    experience,
    certificate,
    roleId,
  }) {
    // Check role
    const role = await db.Role.findByPk(roleId);
    if (!role) {
      return {
        statusCode: 1,
        msg: "Dữ liệu role không tồn tại.",
      };
    }

    // Check academicDegreeId and specialistId
    const [academicDegreeDoc, specialistDoc] = await Promise.all([
      db.AcademicDegree.findByPk(academicDegreeId),
      db.Specialist.findByPk(specialistId),
    ]);

    if (!academicDegreeDoc || !specialistDoc) {
      return {
        statusCode: 3,
        msg: "Dữ liệu chuyên khoa hoặc học vị không tồn tại.",
      };
    }

    // Create a new Doctor
    if (!id) {
      // Hash password
      const passHash = await bcrypt.hash(password, saltRounds);
      if (!passHash) {
        return {
          statusCode: 3,
          msg: "Mã hóa mật khẩu bị lỗi.",
        };
      }
      const userExisted = await db.Staff.findOne({
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

      const userDoc = await db.Staff.create({
        email,
        password: passHash,
        fullName,
        phone,
        address,
        gender,
        academicDegreeId,
        specialistId,
        roleId,
        experience,
        certificate,
      });

      if (userDoc) {
        return {
          statusCode: 0,
          msg: "Tạo tài khoản bác sỉ thành công.",
          data: userDoc,
        };
      } else {
        return {
          statusCode: 4,
          msg: "Lỗi tạo tài khoản bác sỉ.",
        };
      }
    } else {
      // update
      let passHashCreate = {};

      const userPass = await db.Staff.findByPk(id, { raw: true });
      if (!userPass) {
        return {
          statusCode: 3,
          msg: "Nhân viên không tìm thấy",
        };
      }
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

      const staffDocUpdated = await db.Staff.update(
        {
          email,
          ...passHashCreate,
          fullName,
          phone,
          address,
          gender,
          academicDegreeId,
          experience,
          certificate,
          roleId,
          specialistId,
        },
        {
          where: {
            id,
          },
        }
      );
      if (staffDocUpdated[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật nhân viên thành công.",
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

export default new StaffServices();
