import { Op, Sequelize, where } from "sequelize";
import db from "../app/models";

import moment from "moment";
import userServices from "./userServices";

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
    if (!endDate) {
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

  async isWorking(staffId, healthFacilityId) {
    const where = {};
    healthFacilityId && (where.healthFacilityId = healthFacilityId);
    const workDoc = await db.Working.findOne({
      where: {
        ...where,
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
    return workDoc;
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
          Time: ${moment(isInsert.startDate).format("l")} - ${
            isInsert.endDate ? moment(isInsert.endDate).format("l") : "./"
          }
         `,
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
    doctorId,
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
    doctorId && (whereQueryDoctor.id = doctorId);

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
  async getWorkRoomFromWorking({ workingId }) {
    const docs = await db.WorkRoom.findOne({
      raw: true,
      include: [
        {
          model: db.ClinicRoom,
          on: {
            [Op.and]: [
              {
                roomNumber: {
                  [Op.col]: "WorkRoom.ClinicRoomRoomNumber",
                },
                healthFacilityId: {
                  [Op.col]: "WorkRoom.ClinicRoomHealthFacilityId",
                },
              },
            ],
          },
          include: [
            {
              model: db.HealthFacility,
            },
          ],
        },
        {
          model: db.Working,
          where: {
            id: workingId,
          },
          include: [
            {
              model: db.Staff,
            },
          ],
        },
      ],
      nest: true,
    });

    return docs;
  }

  async getWorkRoom({ offset = 0, limit = 10, healthFacilityId, roomNumber }) {
    const whereQueryWorkRoom = {};

    healthFacilityId &&
      (whereQueryWorkRoom.ClinicRoomHealthFacilityId = healthFacilityId);

    roomNumber && (whereQueryWorkRoom.ClinicRoomRoomNumber = roomNumber);
    const res = {};

    if (healthFacilityId && roomNumber) {
      const countWorkRoom = await db.WorkRoom.count({
        where: {
          ClinicRoomRoomNumber: roomNumber,
          ClinicRoomHealthFacilityId: healthFacilityId,
        },
        group: ["workingId"],
      });

      res.currentParticipate = countWorkRoom.length;
    }

    const docs = await db.WorkRoom.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQueryWorkRoom,
      order: [["applyDate", "desc"]],
      include: [
        {
          model: db.ClinicRoom,
          on: {
            [Op.and]: [
              {
                roomNumber: {
                  [Op.col]: "WorkRoom.ClinicRoomRoomNumber",
                },
                healthFacilityId: {
                  [Op.col]: "WorkRoom.ClinicRoomHealthFacilityId",
                },
              },
            ],
          },
          // Sequelize.col(

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
              include: [db.AcademicDegree, db.Specialist],
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
        ...res,
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
        workingId: {
          [Op.ne]: workingId,
        },
      },
      group: ["workingId"],
    });
    if (countWorkRoom.length >= clinicRoomDoc.capacity) {
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
    const workRoomExistsOrtherRoom = await db.WorkRoom.findOne({
      where: {
        workingId,
      },
      raw: true,
    });

    if (
      workRoomExistsOrtherRoom &&
      workRoomExistsOrtherRoom.ClinicRoomRoomNumber !== ClinicRoomRoomNumber
    )
      return {
        statusCode: 402,
        msg: `Bác sỉ đang được phân công ở phòng ${workRoomExistsOrtherRoom.ClinicRoomRoomNumber}.`,
      };

    const optionFindWorkRoom = {};
    if (id) {
      optionFindWorkRoom.id = {
        [Op.not]: id,
      };
    }
    optionFindWorkRoom.workingId = workingId;
    const workRoomExists = await db.WorkRoom.findOne({
      where: {
        [Op.or]: [
          Sequelize.where(
            Sequelize.fn("DATE", Sequelize.col("applyDate")),
            Sequelize.fn("DATE", Sequelize.literal(`'${datePassed}'`))
          ),
        ],
        ...optionFindWorkRoom,
      },
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

  // return a list of id doctor
  async getListIdDoctorWorking(healthFacilityId) {
    const workDoc = await db.Working.findAll({
      where: {
        healthFacilityId,
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
    return workDoc;
  }

  async getHealthExamScheduleToDate(staffId, dateNumber = 7) {
    const schedule = await db.HealthExaminationSchedule.findAll({
      include: [
        {
          model: db.Working,
          where: {
            staffId,
          },
        },
      ],
      limit: dateNumber,
      attributes: [
        [Sequelize.fn("COUNT", Sequelize.col("Working.id")), "workingCount"],
        "date",
      ],
      group: ["date", "Working.id"],
      order: [["date", "asc"]],
    });
    return schedule.map((s) => s.date);
  }
  async getDoctorWorkingAtHealth({
    offset = 0,
    limit = 10,
    healthFacilityId,
    // roomNumber,
  }) {
    const listIdDoctorWorking = await this.getListIdDoctorWorking(
      healthFacilityId
    );

    const promiseAll = listIdDoctorWorking.map((working) => {
      return Promise.all([
        db.WorkRoom.findOne({
          raw: true,
          nest: true,
          include: [
            {
              model: db.Working,
              where: {
                staffId: working.staffId,
                healthFacilityId: healthFacilityId,
              },
              include: [
                {
                  model: db.Staff,
                  include: [db.AcademicDegree, db.Specialist],
                },
              ],
            },
            {
              model: db.ClinicRoom,
              include: [
                {
                  model: db.HealthFacility,
                },
              ],
            },
          ],
          where: {
            applyDate: {
              [Op.lte]: new Date(),
            },
          },
          order: [["applyDate", "DESC"]],
        }),
        this.getHealthExamScheduleToDate(working.staffId),
      ]);
    });

    const workRoomAndSchedule = await Promise.all(promiseAll);

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        // rows: listWorkRoom,
        rows: workRoomAndSchedule
          .filter(([workRoom]) => workRoom !== null)
          .map(([workRoom, schedule]) => {
            return {
              ...workRoom,
              schedules: schedule || [],
            };
          }),
        limit: limit,
        offset: offset,
      },
    };
  }

  filterUniqueValues(arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  // Health Examination Schedule
  async getHealthExamSchedule({
    offset = 0,
    limit = 5,
    staffId,
    date,
    workingId,
    type = "all",
    raw,
  }) {
    const whereQueryDoctor = {};
    const whereQuery = {};
    const whereQueryWorking = {};

    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);
    date && (whereQuery.date = moment(date).format("L"));
    // check date distinct
    const dateDistincts = await db.HealthExaminationSchedule.findAndCountAll({
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("date")), "date"]],
      offset,
      limit,
      where: whereQuery,
      order: [["date", "asc"]],
    });

    const countFuture = await db.HealthExaminationSchedule.findAll({
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("date")), "date"]],
      where: {
        date: {
          [Op.gt]: moment(new Date()).format("L"),
        },
      },
    });

    // const wokingIdDistinctsss = await db.HealthExaminationSchedule.findAll({});
    // return {
    //   statusCode: 200,
    //   data: wokingIdDistinctsss,
    // };
    if (type === "current") {
      whereQuery.date = {
        [Op.gt]: moment(new Date()).format("L"),
      };
    }

    // map every date
    const ds = dateDistincts.rows.map(async (d) => {
      // check id staff distinct
      const wokingIdDistincts = await db.HealthExaminationSchedule.findAll({
        attributes: [
          [Sequelize.fn("DISTINCT", Sequelize.col("workingId")), "workingId"],
        ],
        where: {
          date: d.date,
        },
        raw: true,
      });

      // map
      const resultsPromises = wokingIdDistincts.map(async (workingId) => {
        const data = await db.HealthExaminationSchedule.findAll({
          where: {
            date: d.date,
            workingId: workingId.workingId,
          },
          raw: true,
          include: [
            {
              model: db.Code,
              attributes: {},
              as: "TimeCode",
            },
          ],
          nest: true,
        });

        const staff = await db.Working.findOne({
          where: { id: workingId.workingId },
          include: [
            db.HealthFacility,
            {
              model: db.Staff,
              include: [db.AcademicDegree, db.Specialist],
            },
          ],
        });
        return {
          working: staff,
          schedules: data,
        };
      });

      const results = await Promise.all(resultsPromises);

      return {
        date: d.date,
        data: results,
      };
    });

    const docs = await Promise.all(ds);
    const results = {
      count: ds.count,
      rows: docs,
    };

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...results,
        limit: limit,
        offset: offset,
        count: countFuture.length,
      },
    };
  }

  // Health Examination Schedule for Doctor
  async getHealthExamScheduleForDoctor({
    offset = 0,
    limit = 100,
    staffId,
    date,
    workingId,
    type = "all",
    raw,
  }) {
    // const whereQueryDoctor = {};
    const whereQuery = {};
    const whereQueryWorking = {};
    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);
    date && (whereQuery.date = moment(date).format("L"));
    if (type === "current") {
      whereQuery.date = {
        [Op.gt]: moment(new Date()).format("L"),
      };
    }
    const documents = await db.HealthExaminationSchedule.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["date", "desc"]],
      where: whereQuery,
      include: !raw
        ? [
            {
              model: db.Code,
              attributes: {},
              as: "TimeCode",
            },
          ]
        : [
            {
              model: db.Working,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
              where: whereQueryWorking,
              include: [
                {
                  model: db.Staff,
                  include: [db.Specialist],
                },
                db.HealthFacility,
              ],
            },
            {
              model: db.Code,
              attributes: {},
              as: "TimeCode",
            },
          ],
      nest: true,
    });

    const promiseFields = documents.rows.map(async (row) => {
      const isAvailableBooking = await userServices.isBooking(row.id);
      return {
        ...row,
        isAvailableBooking,
      };
    });

    const docs = await Promise.all(promiseFields);
    const results = {
      count: documents.count,
      rows: docs,
    };

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...results,
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
    // id,
  }) {
    // timecode = this.filterUniqueValues(timecode);
    const isWorking = await db.Working.findByPk(workingId, {
      raw: true,
    });
    if (!isWorking)
      return {
        statusCode: 7,
        msg: "Bác sỉ chưa được thêm vào nơi làm việc.",
      };
    const workRoomCreated = await db.WorkRoom.findOne({
      where: {
        workingId,
      },
    });

    if (!workRoomCreated)
      return {
        statusCode: 8,
        msg: "Bác sỉ chưa được phân công vào phòng làm việc.",
      };
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

    const isDateFuture = new Date(date) > new Date();

    if (!isDateFuture) {
      return { statusCode: 2, msg: "Ngày cập nhật phải ở tương lai." };
    }

    // const scheduleExists = db.HealthExaminationSchedulefindAll

    //  Check if have schedule
    const dateMoment = moment(date).format("L");
    const scheduleExists = await db.HealthExaminationSchedule.findAll({
      where: {
        date: dateMoment,
        workingId,
      },
      raw: true,
    });
    if (scheduleExists) {
      const timeCodeExists = scheduleExists.map((t) => {
        return t.timeCode;
      });
      // schedule T1, T2
      // time code T1, T4
      // result T4

      // filter same as doc
      const sameAs = timeCode.filter((t) => {
        return timeCodeExists.includes(t);
      });

      // filter doc need to delete
      const docDelete = timeCodeExists.filter((t) => {
        return !sameAs.includes(t);
      });

      console.log("---docDelete: ", docDelete);
      const dateSelect = moment(date).format("L");
      // check booking
      const bookingDoc = await db.Booking.findOne({
        raw: true,
        nest: true,
        where: {},
        include: [
          {
            model: db.HealthExaminationSchedule,
            where: {
              date: dateSelect,
              timeCode: {
                [Op.in]: docDelete,
              },
            },
            include: [
              {
                model: db.Code,
                as: "TimeCode",
              },
            ],
          },
        ],
      });

      console.log("\n\nbookingDoc------------------------", bookingDoc);

      if (bookingDoc) {
        return {
          statusCode: 4,
          msg: `Không thể xóa. Lịch ${bookingDoc.HealthExaminationSchedule.TimeCode.value} đã có người đặt.`,
        };
      }

      // filter doc need to create
      const docCreate = timeCode.filter((t) => {
        return !sameAs.includes(t);
      });

      console.log(
        "\n----------------------------------------------------------------"
      );

      console.log("timcode: ", timeCode);
      console.log("sameAs: ", sameAs);
      console.log("timeCodeExists: ", timeCodeExists);
      console.log("docDelete: ", docDelete);
      console.log("docCreate: ", docCreate);

      console.log(
        "\n----------------------------------------------------------------"
      );

      // delete doc
      if (docDelete.length > 0) {
        console.log(
          "----------------------------------------------------------------delete",
          docDelete
        );
        const isDeleted = await db.HealthExaminationSchedule.destroy({
          force: true,
          where: {
            date: dateMoment,
            workingId,
            timeCode: {
              [Op.in]: docDelete,
            },
          },
        });
        console.log(
          "----------------------------------------------------------------isDeleted",
          isDeleted
        );
        if (isDeleted == 0)
          return {
            statusCode: 1,
            msg: "Không tìm thấy tài nguyên này.",
          };
      }

      // create doc
      if (docCreate.length > 0) {
        const data = docCreate.map((timeCode) => ({
          date: moment(date).format("L"),
          timeCode: timeCode,
          workingId,
          maxNumber,
        }));
        const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(data);
        if (scheduleDoc) {
          return {
            statusCode: 0,
            msg: `Cập nhật lịch thành công.`,
            data: scheduleDoc,
          };
        } else {
          return {
            statusCode: 3,
            msg: "Cập nhật thất bại. Đã có lỗi xảy ra.",
          };
        }
      }
      return {
        statusCode: 0,
        msg: "Đã lưu thay đổi.",
      };
    } else {
      // If creating a new schedule
      const data = timeCode.map((timeCode) => ({
        date: moment(date).format("L"),
        timeCode: timeCode,
        workingId,
        maxNumber,
      }));
      const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(data);
      if (scheduleDoc) {
        return {
          statusCode: 0,
          msg: `Tạo lịch thành công.`,
          data: scheduleDoc,
        };
      } else {
        return {
          statusCode: 3,
          msg: "Tạo thất bại. Đã có lỗi xảy ra.",
        };
      }
    }
  }

  async deleteHealthExamSchedule(id) {
    const isHaveDoc = await db.Booking.findOne({
      where: {
        healthExaminationScheduleId: id,
      },
      raw: true,
    });

    if (isHaveDoc) {
      return {
        statusCode: 2,
        msg: "Lịch này đã có người đặt.",
      };
    }
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
