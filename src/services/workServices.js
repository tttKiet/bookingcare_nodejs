import { Op, Sequelize } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;
import moment from "moment";

class WorkServices {
  // Work
  async checkInsertWorking(startDate, endDate, staffId, id) {
    let workWhere = {};
    id &&
      (workWhere.id = {
        [Op.ne]: id,
      });
    let workCheck;
    // End date == null => Dang lam viec
    if (endDate === null) {
      workCheck = await db.Working.findOne({
        where: {
          ...workWhere,
          staffId,
          [Op.or]: [
            {
              endDate: null,
            },
            {
              endDate: {
                [Op.gt]: startDate,
              },
            },
          ],
        },
        raw: true,
        order: [["createdAt", "DESC"]],
        nest: true,
        include: [db.HealthFacility],
      });

      if (workCheck) {
        return workCheck;
      }
    }

    workCheck = await db.Working.findOne({
      where: {
        ...workWhere,
        staffId,
        endDate: null,
        startDate: {
          [Op.lt]: endDate,
        },
      },
      raw: true,
      order: [["createdAt", "DESC"]],
      nest: true,
      include: [db.HealthFacility],
    });
    if (workCheck) {
      return workCheck;
    }

    workCheck = await db.Working.findOne({
      where: {
        ...workWhere,
        staffId,
        [Op.or]: [
          {
            endDate: {
              [Op.lt]: endDate,
              [Op.gt]: startDate,
            },
          },
          {
            startDate: {
              [Op.lt]: endDate,
              [Op.gt]: startDate,
            },
          },
        ],
      },
      raw: true,
      order: [["createdAt", "DESC"]],
      nest: true,
      include: [db.HealthFacility],
    });

    if (workCheck) {
      return workCheck;
    } else {
      return true;
    }
  }

  async isWorking(staffId) {
    const workDoc = await db.Working.findOne({
      where: {
        staffId,
        [Op.or]: [
          {
            endDate: null,
          },
          {
            endDate: {
              [Op.gt]: new Date(),
            },
          },
        ],
      },
      raw: true,
    });
    return !!workDoc;
  }

  async createOrUpdateWorking({
    staffId,
    healthFacilityId,
    startDate,
    endDate,
    id,
  }) {
    // Check exist healthfaclility and staff
    const [healthFacilityDoc, staffDoc] = await Promise.all([
      db.HealthFacility.findByPk(healthFacilityId),
      db.Staff.findByPk(staffId),
    ]);

    if (!healthFacilityDoc || !staffDoc) {
      return {
        statusCode: 1,
        msg: "Không tìm thấy Cơ cơ sở y tế hoặc nhân viên này.",
      };
    }

    if (!id) {
      // Create
      const isInsert = await this.checkInsertWorking(
        startDate,
        endDate,
        staffId
      );
      if (isInsert !== true) {
        return {
          statusCode: 1,
          msg: `Nhân viên này có làm việc ở bệnh viện *${
            isInsert.HealthFacility.name
          }* .
          Id: ${isInsert.id}
          Time: ${moment(isInsert.startDate).format("l")} - ${moment(
            isInsert.endDate
          ).format("l")}`,
        };
      }
      const workDoc = await db.Working.create({
        staffId,
        healthFacilityId,
        startDate,
        endDate,
      });

      if (workDoc) {
        return {
          statusCode: 0,
          msg: "Tạo thành công.",
          data: workDoc,
        };
      } else {
        return {
          statusCode: 5,
          msg: "Tạo thất bại.",
        };
      }
    } else {
      const isInsert = await this.checkInsertWorking(
        startDate,
        endDate,
        staffId,
        id
      );
      if (isInsert !== true) {
        return {
          statusCode: 2,
          msg: `Không thể cập nhật lịch làm việc, thời gian bắt đầu trong lịch này trùng với lịch công việc có id *${
            isInsert.id
          } *
          Time: ${moment(isInsert.startDate).format("l")} - ${moment(
            isInsert.endDate
          ).format("l")}`,
        };
      }

      const workDoc = await db.Working.update(
        {
          staffId,
          healthFacilityId,
          startDate,
          endDate,
        },
        {
          where: {
            id,
          },
        }
      );
      if (workDoc[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật thành công.",
        };
      } else {
        return {
          statusCode: 2,
          msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này.",
        };
      }
    }
  }

  async getWorking({
    offset = 0,
    limit = 10,
    doctorName,
    id,
    doctorEmail,
    healthFacilityName,
    healthFacilityId,
    type = "all",
  }) {
    const whereQuery = {};
    const whereQueryDoctor = {};
    const whereQueryHeal = {};
    id &&
      (whereQuery.id = {
        [Op.substring]: id,
      });
    doctorName &&
      (whereQueryDoctor.fullName = {
        [Op.substring]: doctorName,
      });
    doctorEmail &&
      (whereQueryDoctor.email = {
        [Op.substring]: doctorEmail,
      });
    healthFacilityName &&
      (whereQueryHeal.name = {
        [Op.substring]: healthFacilityName,
      });
    if (type == "current") {
      whereQuery[Op.or] = [
        {
          endDate: null,
        },
        {
          endDate: {
            [Op.gt]: new Date(),
          },
        },
      ];
    }

    healthFacilityId && (whereQuery.healthFacilityId = healthFacilityId);
    const workingDoc = await db.Working.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["createdAt", "desc"]],
      include: [
        {
          model: db.Staff,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          where: whereQueryDoctor,
          include: [db.AcademicDegree],
        },
        {
          model: db.HealthFacility,
          where: whereQueryHeal,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      nest: true,
    });
    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...workingDoc,
        limit: limit,
        offset: offset,
      },
    };
  }

  async deleteWorking(id) {
    const workingDoc = await db.Working.destroy({
      force: true,
      where: {
        id,
      },
    });
    console.log(workingDoc);

    if (workingDoc > 0)
      return {
        statusCode: 0,
        msg: "Đã xóa thành công.",
      };
    else {
      return {
        statusCode: 1,
        msg: "Không tìm thấy tài nguyên này.",
      };
    }
  }

  // Work Room
  async getWorkRoom({ offset = 0, limit = 10, healthFacilityId, roomNumber }) {
    const whereQueryWorkRoom = {};

    healthFacilityId &&
      (whereQueryWorkRoom.ClinicRoomHealthFacilityId = healthFacilityId);

    roomNumber && (whereQueryWorkRoom.ClinicRoomRoomNumber = roomNumber);
    const docs = await db.WorkRoom.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQueryWorkRoom,
      include: [
        {
          model: db.ClinicRoom,
          include: [
            {
              model: db.HealthFacility,
            },
          ],
        },
        {
          model: db.Working,
          include: [
            {
              model: db.Staff,
            },
          ],
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

  async createOrUpdateWorkRoom({
    ClinicRoomRoomNumber,
    ClinicRoomHealthFacilityId,
    checkUpPrice,
    applyDate,
    id,
    workingId,
  }) {
    // Check exist healthfaclility and staff
    const [clinicRoomDoc, workingDoc] = await Promise.all([
      db.ClinicRoom.findOne({
        where: {
          roomNumber: ClinicRoomRoomNumber,
          healthFacilityId: ClinicRoomHealthFacilityId,
        },
        raw: true,
      }),
      db.Working.findByPk(workingId, {
        raw: true,
      }),
    ]);

    if (!clinicRoomDoc || !workingDoc) {
      return {
        statusCode: 1,
        msg: "Không tìm thấy phòng hoặc lịch công tác của bác sỉ.",
      };
    }

    // Check orverload
    const countWorkRoom = await db.WorkRoom.count({
      where: {
        ClinicRoomRoomNumber,
        ClinicRoomHealthFacilityId,
      },
    });

    if (countWorkRoom >= clinicRoomDoc.capacity) {
      return {
        statusCode: 7,
        msg: "Phòng đã đủ chổ khám.",
      };
    }

    if (workingDoc.healthFacilityId !== ClinicRoomHealthFacilityId) {
      return {
        statusCode: 4,
        msg: "Lịch công tác không phải của bác sỉ này.",
      };
    }

    const datePassed = new Date(applyDate).toISOString();
    const workRoomExists = await db.WorkRoom.findOne({
      where: Sequelize.where(
        Sequelize.fn("DATE", Sequelize.col("applyDate")),
        Sequelize.fn("DATE", Sequelize.literal(`'${datePassed}'`))
      ),
      raw: true,
    });

    if (workRoomExists)
      return {
        statusCode: 401,
        msg: "Ngày áp dụng đã có.",
      };

    if (!id) {
      // Create
      const workDoc = await db.WorkRoom.create({
        ClinicRoomRoomNumber,
        ClinicRoomHealthFacilityId,
        checkUpPrice,
        applyDate,
        workingId,
      });

      if (workDoc) {
        return {
          statusCode: 0,
          msg: "Tạo thành công.",
          data: workDoc,
        };
      } else {
        return {
          statusCode: 5,
          msg: "Tạo thất bại.",
        };
      }
    } else {
      const workDoc = await db.WorkRoom.update(
        {
          checkUpPrice,
          applyDate,
        },
        {
          where: {
            id,
          },
        }
      );
      if (workDoc[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật thành công.",
        };
      } else {
        return {
          statusCode: 2,
          msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này.",
        };
      }
    }
  }
  async deleteWorkRoom(id) {
    const isDeleted = await db.WorkRoom.destroy({
      force: true,
      where: {
        id,
      },
    });

    if (isDeleted > 0)
      return {
        statusCode: 0,
        msg: "Đã xóa thành công.",
      };
    else {
      return {
        statusCode: 1,
        msg: "Không tìm thấy tài nguyên này.",
      };
    }
  }

  // Health Examination Schedule
  async getHealthExamSchedule({
    offset = 0,
    limit = 100,
    staffId,
    date,
    workingId,
  }) {
    const whereQueryDoctor = {};
    const whereQuery = {};
    const whereQueryWorking = {};
    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);
    date && (whereQuery.date = moment(date).format("L"));
    const documents = await db.HealthExaminationSchedule.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["date", "desc"]],
      where: whereQuery,
      include: [
        {
          model: db.Working,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          where: whereQueryWorking,
          include: [db.Staff, db.HealthFacility],
        },
        {
          model: db.Code,
          attributes: {},
          as: "TimeCode",
        },
      ],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...documents,
        limit: limit,
        offset: offset,
      },
    };
  }

  async createOrUpdateHealthExamSchedule({
    date,
    maxNumber,
    timeCode,
    workingId,
    id,
  }) {
    const isWorking = await db.Working.findByPk(workingId);
    if (!isWorking)
      return {
        statusCode: 7,
        msg: "Bác sỉ chưa được thêm vào nơi làm việc.",
      };
    if (Array.isArray(timeCode)) {
      const codes = await db.Code.findAll({
        where: {
          key: {
            [Op.in]: timeCode,
          },
        },
        raw: true,
      });

      if (timeCode.length !== codes.length) {
        return {
          statusCode: 2,
          msg: `Không tìm thấy mã thời gian nào đó.`,
        };
      }
    } else {
      // Validate
      const [codeDoc] = await Promise.all([
        db.Code.findByPk(timeCode, {
          raw: true,
        }),
      ]);
      if (!codeDoc) {
        return {
          statusCode: 1,
          msg: `Không tìm thấy ${timeCode}.`,
        };
      }
    }

    const isDateFuture = new Date(date) > new Date();

    if (!isDateFuture) {
      return { statusCode: 2, msg: "Ngày cập nhật phải ở tương lai." };
    }

    // Create a new schedule for date
    const isUpdateDate = await db.HealthExaminationSchedule.findOne({
      where: {
        date: moment(date).format("L"),
      },
      raw: true,
    });
    if (isUpdateDate) {
      // Update schedule for date
      const isDeleted = await db.HealthExaminationSchedule.destroy({
        force: true,
        where: {
          date: moment(date).format("L"),
        },
      });
      if (!isDeleted) {
        return {
          statusCode: 6,
          msg: "Cập nhật lịch thất bại. Xóa dữ liệu cũ bị lỗi.",
        };
      }
    }
    if (Array.isArray(timeCode)) {
      const data = timeCode.map((timeCode) => ({
        date: moment(date).format("L"),
        timeCode: timeCode,
        workingId,
        maxNumber,
      }));

      //  Check if have schedule
      const scheduleExists = await db.HealthExaminationSchedule.findAll({
        where: {
          date: moment(date).format("L"),
          timeCode: {
            [Op.in]: timeCode,
          },
          workingId,
        },
        raw: true,
      });

      if (scheduleExists.length > 0) {
        return {
          statusCode: 4,
          msg: `Lịch đã được tạo.* ${scheduleExists.reduce(
            (init, sche) => init + " - " + sche.timeCode,
            ""
          )} *`,
          data: scheduleExists,
        };
      }
      // Create schedule
      const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(data);
      if (scheduleDoc) {
        return {
          statusCode: 0,
          msg: `${
            isUpdateDate ? "Cập nhật lịch thành công." : "Tạo lịch thành công."
          }`,
          data: scheduleDoc,
        };
      } else {
        return {
          statusCode: 3,
          msg: "Tạo lịch thất bại. Đã có lỗi xảy ra.",
        };
      }
    } else {
      const scheduleExists = await db.HealthExaminationSchedule.findOne({
        where: {
          date: moment(date).format("L"),
          timeCode,
          workingId,
        },
      });
      if (scheduleExists)
        return {
          statusCode: 4,
          msg: "Lịch này đã được tạo.",
        };
      const scheduleDoc = await db.HealthExaminationSchedule.create({
        date: moment(date).format("L"),
        maxNumber,
        timeCode,
        workingId,
      });
      if (scheduleDoc) {
        return {
          statusCode: 0,
          msg: `${
            isUpdateDate ? "Cập nhật lịch thành công." : "Tạo lịch thành công."
          }`,
          data: scheduleDoc,
        };
      } else {
        return {
          statusCode: 3,
          msg: `${
            isUpdateDate
              ? "Cập nhậtlịch thất bại. Đã có lỗi xảy ra..."
              : "Tạo lịch thất bại. Đã có lỗi xảy ra.."
          }`,
        };
      }
    }
  }

  async deleteHealthExamSchedule(id) {
    const isDeleted = await db.HealthExaminationSchedule.destroy({
      force: true,
      where: {
        id,
      },
    });

    if (isDeleted > 0)
      return {
        statusCode: 0,
        msg: "Đã xóa thành công.",
      };
    else {
      return {
        statusCode: 1,
        msg: "Không tìm thấy tài nguyên này.",
      };
    }
  }
}

export default new WorkServices();
