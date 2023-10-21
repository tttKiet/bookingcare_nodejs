import { Op, where } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
import userServices from "./userServices";
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

  // Get Doctor By Id
  async getDoctorById(id) {
    const accounts = await db.Staff.findByPk(id, {
      raw: true,
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
    if (accounts)
      return {
        statusCode: 0,
        msg: "Lấy thành công.",
        data: accounts,
      };
    return {
      statusCode: 0,
      msg: "Không tìm thấy bác sỉ.",
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
      const [staffExisted, userExisted] = await Promise.all([
        db.Staff.findOne({
          where: {
            [Op.or]: {
              email,
              phone,
            },
          },
        }),
        db.User.findOne({
          where: {
            [Op.or]: {
              email,
              phone,
            },
          },
        }),
      ]);

      if (userExisted || staffExisted)
        return {
          statusCode: 2,
          msg:
            userExisted?.email === email || staffExisted?.email === email
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

      // Check user exists
      const [staffExisted, userExisted] = await Promise.all([
        db.Staff.findOne({
          where: {
            [Op.or]: {
              email,
              phone,
            },
            id: {
              [Op.ne]: id,
            },
          },
        }),
        db.User.findOne({
          where: {
            [Op.or]: {
              email,
              phone,
            },
            id: {
              [Op.ne]: id,
            },
          },
        }),
      ]);

      if (userExisted || staffExisted)
        return {
          statusCode: 2,
          msg:
            userExisted?.email === email || staffExisted?.email === email
              ? "Email đã tồn tại."
              : "Số điện thoại đã tồn tại.",
        };

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

  // Code
  async createCode({ name, key, value }) {
    const codeExists = await db.Code.findByPk(key);
    if (codeExists)
      return {
        statusCode: 1,
        msg: "Mã code đã tồn tại.",
      };

    const codeDoc = await db.Code.create({ name, key, value });
    if (!codeDoc)
      return {
        statusCode: 2,
        msg: "Tạo code thất bại.",
      };
    else {
      return {
        statusCode: 0,
        msg: "Tạo code thành công.",
      };
    }
  }

  async getCode({ offset = 0, limit = 10 }) {
    const whereQuery = {};
    const codes = await db.Code.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...codes,
        limit: limit,
        offset: offset,
      },
    };
  }

  async getTimeCode({ offset = 0, limit = 12 }) {
    const whereQuery = {
      name: "Time",
    };
    const codes = await db.Code.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["key", "asc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...codes,
        limit: limit,
        offset: offset,
      },
    };
  }

  async deleteCode({ key }) {
    const codeExists = await db.Code.findByPk(key);
    if (!codeExists)
      return {
        statusCode: 1,
        msg: "Mã code không tồn tại.",
      };

    const isSucess = await codeExists.destroy({
      force: true,
    });
    if (isSucess)
      return {
        statusCode: 0,
        msg: "Xóa code thành công.",
      };
    else
      return {
        statusCode: 0,
        msg: "Xóa code thất bại.",
      };
  }

  async getDoctorWorking({
    offset = 0,
    limit = 8,
    doctorName,
    doctorEmail,
    workingId,
    healthFacilityId,
  }) {
    const whereQueryDoctor = {};
    const whereQueryWorking = {};
    doctorName &&
      (whereQueryDoctor.fullName = {
        [Op.substring]: doctorName,
      });
    doctorEmail &&
      (whereQueryDoctor.email = {
        [Op.substring]: doctorEmail,
      });

    healthFacilityId && (whereQueryWorking.healthFacilityId = healthFacilityId);

    workingId && (whereQueryWorking.id = workingId);

    const docs = await db.Working.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQueryWorking,
      include: [
        {
          model: db.Staff,
          where: whereQueryDoctor,
          include: [db.AcademicDegree, db.Specialist],
        },
      ],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...docs,
        limit: limit,
        offset: offset,
      },
    };
  }
}

export default new StaffServices();
