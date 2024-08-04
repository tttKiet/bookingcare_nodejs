import { Op, Sequelize, where } from "sequelize";
import db from "../app/models";

import moment from "moment";
import userServices from "./userServices";
import workServices from "./workServices";
import { addDays, searchLikeDeep } from "../untils";

class WorkServices {
  // Work
  async checkInsertWorking(staffId) {
    const workCheck = await db.Working.findOne({
      where: {
        staffId,
      },
      raw: true,
      order: [["createdAt", "DESC"]],
      nest: true,
      include: [db.HealthFacility],
    });
    if (workCheck) {
      return workCheck;
    }
    return true;
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

  async createOrUpdateWorking({ staffId, healthFacilityId, id }) {
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
      const isInsert = await this.checkInsertWorking(staffId);
      if (isInsert !== true) {
        return {
          statusCode: 1,
          msg: `Nhân viên này đang làm việc ở bệnh viện *${isInsert.HealthFacility.name}*.`,
        };
      }
      const workDoc = await db.Working.create({
        staffId,
        healthFacilityId,
        startDate: new Date(),
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
      const workDoc = await db.Working.update(
        {
          staffId,
          healthFacilityId,
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
    roleId,
    Role,
  }) {
    const whereQuery = {};
    const whereQueryDoctor = {};
    const whereQueryHeal = {};
    const whereRole = {};

    if (Role && Role.length > 0) {
      whereRole.keyType = {
        [Op.in]: Role,
      };
    } else if (roleId) {
      whereRole.id = roleId;
    }

    id &&
      (whereQuery.id = {
        [Op.substring]: id,
      });
    doctorName &&
      (whereQueryDoctor.fullName = searchLikeDeep(
        "Staff",
        "fullName",
        doctorName
      ));

    doctorEmail &&
      (whereQueryDoctor.email = {
        [Op.substring]: doctorEmail,
      });
    healthFacilityName &&
      (whereQueryHeal.name = searchLikeDeep(
        "HealthFacility",
        "name",
        healthFacilityName
      ));

    doctorId && (whereQueryDoctor.id = doctorId);

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
          include: [
            db.AcademicDegree,
            {
              model: db.Role,
              where: whereRole,
            },
          ],
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
  async getWorkRoomFromWorking({ workingId, type }) {
    let order = [];
    if (type == "thanFromDateHere") {
      order = [["applyDate", "desc"]];
    }
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
      order: order,
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
        msg: "Không tìm thấy phòng hoặc lịch công tác của Bác sĩ.",
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
        msg: "Lịch công tác không phải của Bác sĩ này.",
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
        msg: `Bác sĩ đang được phân công ở phòng ${workRoomExistsOrtherRoom.ClinicRoomRoomNumber}.`,
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
  async getListIdDoctorWorking({
    healthFacilityId,
    doctorName,
    doctorEmail,
    specialistId,
    gender,
    doctorId,
    academicDegreeId,
  }) {
    const whereStaff = {};
    const whereWorking = {};
    if (healthFacilityId) {
      whereWorking.healthFacilityId = healthFacilityId;
    }
    if (doctorName) {
      whereStaff.fullName = searchLikeDeep("Staff", "fullName", doctorName);
    }

    if (doctorId) {
      whereStaff.id = doctorId;
    }
    if (doctorEmail) {
      whereStaff.email = {
        [Op.substring]: doctorEmail,
      };
    }
    if (specialistId) {
      whereStaff.specialistId = specialistId;
    }

    if (gender) {
      whereStaff.gender = gender;
    }

    if (academicDegreeId) {
      whereStaff.academicDegreeId = academicDegreeId;
    }

    const workDoc = await db.Working.findAll({
      where: {
        ...whereWorking,
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
      include: [
        {
          model: db.Staff,
          where: whereStaff,
        },
      ],
      nest: true,
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
    doctorName,
    doctorEmail,
    specialistId,
    doctorId,
    gender,
    academicDegreeId,
    // roomNumber,
  }) {
    const listIdDoctorWorking = await this.getListIdDoctorWorking({
      healthFacilityId,
      doctorName,
      doctorEmail,
      specialistId,
      gender,
      academicDegreeId,
      doctorId,
    });

    const whereWorkRoom = {};
    if (healthFacilityId) {
      whereWorkRoom.healthFacilityId = healthFacilityId;
    }

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
                ...whereWorkRoom,
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
          ],
          where: {
            applyDate: {
              [Op.lte]: new Date(),
            },
          },
          order: [["applyDate", "DESC"]],
        }),
        this.getHealthExamScheduleToDate(working.staffId),
        userServices.calculatorReviewDoctorById({ staffId: working.staffId }),
      ]);
    });

    const workRoomAndSchedule = await Promise.all(promiseAll);
    // return {
    //   statusCode: 0,
    //   data: workRoomAndSchedule ,
    // };
    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        // rows: listWorkRoom,
        rows: workRoomAndSchedule
          .filter(([workRoom]) => workRoom !== null)
          .map(([workRoom, schedule, star]) => {
            return {
              ...workRoom,
              schedules: schedule || [],
              starNumber: star?.data?.avg,
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
    limit = 10,
    staffId,
    date,
    workingId,
    type = "all",
    raw,
  }) {
    const whereHealthExaminationSchedule = {};
    const whereQuery = {};
    const whereQueryWorking = {};

    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);
    date && (whereQuery.date = moment(date).format("L"));

    let getWorkingId;
    if (staffId) {
      const working = await workServices.getWorking({ doctorId: staffId });
      if (working.statusCode === 0 && working?.data?.rows?.[0]?.id) {
        getWorkingId = working.data?.rows?.[0]?.id;
      } else {
        return {
          statusCode: 400,
          msg: "Bác sĩ chưa được phân công công tác.",
          data: {
            rows: [],
            limit: 0,
            offset: 0,
            count: 0,
          },
        };
      }
    }
    staffId && (whereQuery.workingId = getWorkingId);
    staffId && (whereHealthExaminationSchedule.workingId = getWorkingId);

    const currentDate = moment().add(1).format("YYYY-MM-DD");
    // if (type === "current") {
    //   whereQuery.date = {
    //     [Op.gte]: moment(Sequelize.col("date")).format("L"),
    //   };
    // }

    // check date distinct
    const dateDistincts = await db.HealthExaminationSchedule.findAndCountAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("date")), "date"],
        [
          Sequelize.literal(
            `CASE WHEN date < '${moment()
              .add(1, "day")
              .format("L")}' THEN 1 ELSE 0 END`
          ),
          "dateOrder",
        ],
        [
          Sequelize.literal("TO_CHAR(\"date\"::date, 'YYYY-MM-DD')"),
          "formatted_date",
        ],
      ],
      offset,
      limit,
      where: {
        ...whereQuery,
      },
      order: [
        ["dateOrder", "asc"],
        // ["date", "asc"],
        ["formatted_date", "asc"],
        // Sequelize.literal(
        //   `CASE WHEN date < '${moment().format("L")}' THEN 1 ELSE 0 END`
        // ),
      ],
    });

    const countFuture = await db.HealthExaminationSchedule.findAll({
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("date")), "date"]],
      where: {
        // date: {
        //   [Op.gt]: moment(new Date()).format("L"),
        // },
        ...whereHealthExaminationSchedule,
      },
    });

    // const wokingIdDistinctsss = await db.HealthExaminationSchedule.findAll({});
    // return {
    //   statusCode: 200,
    //   data: wokingIdDistinctsss,
    // };

    // map every date
    const ds = dateDistincts.rows.map(async (d) => {
      // check id staff distinct
      const wokingIdDistincts = await db.HealthExaminationSchedule.findAll({
        attributes: [
          [Sequelize.fn("DISTINCT", Sequelize.col("workingId")), "workingId"],
        ],
        where: {
          date: d.date,
          ...whereHealthExaminationSchedule,
        },
        raw: true,
      });

      // map
      const resultsPromises = wokingIdDistincts.map(async (workingId) => {
        const dataSchedule = await db.HealthExaminationSchedule.findAll({
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

        const promiseGetScheduleAvailable = dataSchedule.map(async (row) => {
          const isAvailableBooking = await userServices.isBooking(row.id);
          return {
            ...row,
            isAvailableBooking,
          };
        });

        const data = await Promise.all(promiseGetScheduleAvailable);

        const staff = await db.Working.findOne({
          where: {
            id: workingId.workingId,
            ...whereQueryWorking,
          },
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

  // Health Examination Schedule
  async getHealthExamScheduleDoctorAndTimeCode({
    limit = 5,
    offset = 0,
    staffId,
    date,
    workingId,
    healthFacilityName,
    staffName,
  }) {
    const whereHealthExaminationSchedule = {};
    const whereQuery = {};
    const whereQueryWorking = {};

    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);

    if (date && moment(date).isValid()) {
      whereQuery.date = moment(date).format("L");
    }

    if (workingId) {
      whereQuery.workingId = workingId;
    }
    let getWorkingId;

    if (staffId || healthFacilityName || staffName) {
      const working = await workServices.getWorking({
        doctorId: staffId,
        doctorName: staffName,
        healthFacilityName,
      });
      if (working.statusCode === 0 && working?.data?.rows?.[0]?.id) {
        getWorkingId = working.data?.rows?.[0]?.id;
      } else {
        return {
          statusCode: 400,
          msg: "Bác sĩ chưa được phân công công tác.",
          data: {
            rows: [],
            limit: 0,
            offset: 0,
            count: 0,
          },
        };
      }
    }

    staffId && (whereQuery.workingId = getWorkingId);
    staffId && (whereHealthExaminationSchedule.workingId = getWorkingId);
    if (getWorkingId) {
      whereQuery.workingId = {
        [Op.in]: Array.isArray(getWorkingId) ? getWorkingId : [getWorkingId],
      };
    }
    const staffistincts = await db.HealthExaminationSchedule.findAndCountAll({
      raw: true,
      attributes: [
        "date",
        "workingId",
        [
          Sequelize.literal(
            `CASE WHEN date < '${moment().format("L")}' THEN 1 ELSE 0 END`
          ),
          "dateOrder",
        ],
        [
          Sequelize.literal("TO_CHAR(\"date\"::date, 'YYYY-MM-DD')"),
          "formatted_date",
        ],
      ],
      offset,
      limit,
      where: {
        ...whereQuery,
      },
      nest: true,
      raw: true,
      group: ["date", "workingId"],
      order: [
        ["dateOrder", "asc"],
        // ["date", "asc"],
        ["formatted_date", "asc"],
        // Sequelize.literal(
        //   `CASE WHEN date < '${moment().format("L")}' THEN 1 ELSE 0 END`
        // ),
      ],
    });

    // return {
    //   statusCode: 0,
    //   msg: "ok",
    //   staffistincts,
    // };

    // map every date
    const ds = staffistincts.rows.map(async (d) => {
      // check id staff distinct
      const wokingIdDistincts = await db.HealthExaminationSchedule.findAll({
        where: {
          workingId: d.workingId,
          date: d.date,
          ...whereHealthExaminationSchedule,
        },
        include: [
          {
            model: db.Code,
            as: "TimeCode",
          },
        ],
        order: [["timeCode", "asc"]],
        raw: true,
        nest: true,
      });
      const workingDoc = await db.Working.findOne({
        where: {
          id: d.workingId,
        },
        include: [db.Staff, db.HealthFacility],
      });

      // const resultsPromises = wokingIdDistincts.map(async (workingId) => {
      //   const dataSchedule = await db.HealthExaminationSchedule.findAll({
      //     where: {
      //       date: d.date,
      //       workingId: workingId.workingId,
      //     },
      //     raw: true,
      //     include: [
      //       {
      //         model: db.Code,
      //         attributes: {},
      //         as: "TimeCode",
      //       },
      //     ],
      //     nest: true,
      //   });

      //   const promiseGetScheduleAvailable = dataSchedule.map(async (row) => {
      //     const isAvailableBooking = await userServices.isBooking(row.id);
      //     return {
      //       ...row,
      //       isAvailableBooking,
      //     };
      //   });

      //   const data = await Promise.all(promiseGetScheduleAvailable);

      //   const staff = await db.Working.findOne({
      //     where: {
      //       id: workingId.workingId,
      //       ...whereQueryWorking,
      //     },
      //     include: [
      //       db.HealthFacility,
      //       {
      //         model: db.Staff,
      //         include: [db.AcademicDegree, db.Specialist],
      //       },
      //     ],
      //   });

      //   return {
      //     working: staff,
      //     schedules: data,
      //   };
      // });

      // const results = await Promise.all(resultsPromises);

      return {
        date: d.date,
        working: workingDoc,
        schedule: wokingIdDistincts,
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
        count: staffistincts.count.length,
        limit: limit,
        offset: offset,
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
    const currentDate = moment().format("YYYY-MM-DD");
    if (type === "current") {
      whereQuery.date = {
        [Op.gte]: Sequelize.fn("DATE", Sequelize.literal(`'${currentDate}'`)),
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

  // Health Examination Schedule for Doctor
  async getHealthExamScheduleDoctorAll({
    offset = 0,
    limit = 100,
    staffId,
    date,
    workingId,
    type = "all",
    healthFacilityName,
    staffName,
  }) {
    // const whereQueryDoctor = {};
    const whereQueryHealth = {};
    const whereQuery = {};
    const whereQueryWorking = {};

    staffId && (whereQueryWorking.staffId = staffId);
    workingId && (whereQueryWorking.id = workingId);
    console.log("\n\n\nmoment(date).isValid()", moment(date).isValid());
    if (date && moment(date).isValid()) {
      whereQuery.date = moment(date).format("L");
    }
    if (type === "current") {
      whereQuery.date = {
        [Op.gt]: moment(new Date()).format("L"),
      };
    }

    if (healthFacilityName) {
      whereQueryHealth.name = searchLikeDeep(
        "HealthFacility",
        "name",
        healthFacilityName
      );
    }

    const documents = await db.HealthExaminationSchedule.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["date", "asc"]],
      where: whereQuery,
      include: [
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
            {
              model: db.HealthFacility,
              where: whereQueryHealth,
            },
          ],
        },
        {
          model: db.Code,
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
    // id,
  }) {
    // timecode = this.filterUniqueValues(timecode);
    const isWorking = await db.Working.findByPk(workingId, {
      raw: true,
    });
    if (!isWorking)
      return {
        statusCode: 7,
        msg: "Bác sĩ chưa được thêm vào nơi làm việc.",
      };
    const workRoomCreated = await db.WorkRoom.findOne({
      where: {
        workingId,
      },
    });

    if (!workRoomCreated)
      return {
        statusCode: 8,
        msg: "Bác sĩ chưa được phân công vào phòng làm việc.",
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

      // delete doc
      if (docDelete.length > 0) {
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

  async registerSchedule({
    workingId,
    unit, // don vi ngay ->  ngay, tuan, thang [date,week,month]
    startDate,
    endDate,
    quantity,
    optionTimeCode, //[all, some]
    timeCodeArray,
    maxNumber,
  }) {
    // check working existed
    const isWorking = await db.Working.findByPk(workingId, {
      raw: true,
    });
    if (!isWorking)
      return {
        statusCode: 500,
        msg: "Bác sĩ chưa được thêm vào nơi làm việc.",
      };
    if (!optionTimeCode)
      return {
        statusCode: 400,
        msg: "Vui lòng số khung giờ [all - custom]",
      };

    switch (unit) {
      case "date": {
        let timeCodes = [];
        if (optionTimeCode === "all") {
          const timeCodeAllDoc = await db.Code.findAll({
            where: {
              name: "Time",
            },
            raw: true,
          });

          // get array time code
          timeCodes = timeCodeAllDoc.map((t) => t.key);
          if (timeCodes.length == 0) {
            return {
              statusCode: 500,
              msg: `Mã thời gian chưa có.`,
            };
          }
        } else if (optionTimeCode == "custom") {
          if (!timeCodeArray || timeCodeArray?.length == 0) {
            return {
              statusCode: 400,

              msg: "Mã thời gian chưa truyền array timecode",
            };
          }
          timeCodes = timeCodeArray;
        }
        if (!startDate || !endDate) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền đủ ngày bắt đầu và ngày kết thúc lịch.`,
          };
        }
        const momentStartDate = moment(new Date(startDate), "DD-MM-YYYY");
        const momentEndDate = moment(new Date(endDate), "DD-MM-YYYY");

        let dateWhile = momentStartDate;
        let dateWhileEnd = momentEndDate.add("days", 1);

        let data = [];
        while (
          !dateWhile.isSame(dateWhileEnd) &&
          dateWhile.isValid() &&
          dateWhileEnd.isValid()
        ) {
          timeCodes.forEach((time) => {
            const temp = {
              date: dateWhile.format("L"),
              timeCode: time,
              workingId,
              maxNumber,
            };
            data.push(temp);
          });
          dateWhile = dateWhile.add("days", 1);
        }

        // push data
        const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(
          data,
          {
            // updateOnDuplicate:  ["date", "workingId", "timeCode"]
            // upsertKeys: ["schedule"],
            updateOnDuplicate: ["date", "workingId", "timeCode"],
            // ignoreDuplicates: true,
          }
        );
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

      case "week": {
        let timeCodes = [];
        if (optionTimeCode === "all") {
          const timeCodeAllDoc = await db.Code.findAll({
            where: {
              name: "Time",
            },
            raw: true,
          });

          // get array time code
          timeCodes = timeCodeAllDoc.map((t) => t.key);
          if (timeCodes.length == 0) {
            return {
              statusCode: 500,
              msg: `Mã thời gian chưa có.`,
            };
          }
        } else if (optionTimeCode == "custom") {
          if (!timeCodeArray || timeCodeArray?.length == 0) {
            return {
              statusCode: 400,

              msg: "Mã thời gian chưa truyền array timecode",
            };
          }
          timeCodes = timeCodeArray;
        }

        if (!startDate) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền ngày bắt đầu của lịch.`,
          };
        }

        if (!quantity) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền số lượng tuần.`,
          };
        }

        if (!maxNumber) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền số lượng tối đá bệnh nhân khám trong một khung giờ.`,
          };
        }

        const momentStartDate = moment(new Date(startDate), "DD-MM-YYYY");
        let dateWhile = momentStartDate;
        let dateWhileEnd = moment(new Date(startDate), "DD-MM-YYYY").add(
          "days",
          quantity * 7
        );

        let data = [];
        while (
          !dateWhile.isSame(dateWhileEnd) &&
          dateWhile.isValid() &&
          dateWhileEnd.isValid()
        ) {
          timeCodes.forEach((time) => {
            const temp = {
              date: dateWhile.format("L"),
              timeCode: time,
              workingId,
              maxNumber,
            };
            data.push(temp);
          });
          dateWhile = dateWhile.add("days", 1);
        }
        // push data
        const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(
          data,
          {
            // updateOnDuplicate:  ["date", "workingId", "timeCode"]
            // upsertKeys: ["schedule"],
            updateOnDuplicate: ["date", "workingId", "timeCode"],
            // ignoreDuplicates: true,
          }
        );
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

      case "month": {
        let timeCodes = [];
        if (optionTimeCode === "all") {
          const timeCodeAllDoc = await db.Code.findAll({
            where: {
              name: "Time",
            },
            raw: true,
          });

          // get array time code
          timeCodes = timeCodeAllDoc.map((t) => t.key);
          if (timeCodes.length == 0) {
            return {
              statusCode: 500,
              msg: `Mã thời gian chưa có.`,
            };
          }
        } else if (optionTimeCode == "custom") {
          if (!timeCodeArray || timeCodeArray?.length == 0) {
            return {
              statusCode: 400,

              msg: "Mã thời gian chưa truyền array timecode",
            };
          }
          timeCodes = timeCodeArray;
        }

        if (!startDate) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền ngày bắt đầu của lịch.`,
          };
        }

        if (!quantity) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền số lượng tuần.`,
          };
        }

        if (!maxNumber) {
          return {
            statusCode: 400,
            msg: `Vui lòng truyền số lượng tối đá bệnh nhân khám trong một khung giờ.`,
          };
        }

        const momentStartDate = moment(new Date(startDate), "DD-MM-YYYY");
        let dateWhile = momentStartDate;
        let dateWhileEnd = moment(new Date(startDate), "DD-MM-YYYY").add(
          "months",
          quantity
        );

        let data = [];
        while (
          !dateWhile.isSame(dateWhileEnd) &&
          dateWhile.isValid() &&
          dateWhileEnd.isValid()
        ) {
          timeCodes.forEach((time) => {
            const temp = {
              date: dateWhile.format("L"),
              timeCode: time,
              workingId,
              maxNumber,
            };
            data.push(temp);
          });
          dateWhile = dateWhile.add("days", 1);
        }
        // push data
        const scheduleDoc = await db.HealthExaminationSchedule.bulkCreate(
          data,
          {
            // updateOnDuplicate:  ["date", "workingId", "timeCode"]
            // upsertKeys: ["schedule"],
            updateOnDuplicate: ["date", "workingId", "timeCode"],
            // ignoreDuplicates: true,
          }
        );
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

      default: {
        return {
          statusCode: 400,
          msg: "Vui lòng chọn option [date-date,week,month]",
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

  // test api
  async testapi() {
    // const data = await db.HealthExaminationSchedule.findAll({
    //   raw: true,
    // });

    const workingDoc = await db.ServiceDetail.findAll({
      raw: true,
      nest: true,
    });
    return {
      statusCode: 200,
      msg: "Ok!",
      data: workingDoc,
    };
  }
}

export default new WorkServices();
