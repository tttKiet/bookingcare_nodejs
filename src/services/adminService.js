import moment from "moment";
import db from "../app/models";
import { Op, where, Sequelize } from "sequelize";
// import temp from "../untils/py/temp.json";

class adminService {
  // Cedicine
  async createOrUpdateCedicine({ name, desc, id }) {
    // create a new cedicine
    if (!id) {
      // check cedicine name existe
      const cedicineExist = await db.Cedicine.findOne({
        where: {
          name,
        },
        raw: true,
      });

      if (cedicineExist) {
        return {
          statusCode: 400,
          msg: "Loại thuôc này đã tồn tại!",
          data: cedicineDoc,
        };
      }

      // create
      const cedicineDoc = await db.Cedicine.create({
        name,
        desc,
      });

      if (cedicineDoc) {
        return {
          statusCode: 200,
          msg: "Tạo thuốc thành công!",
          data: cedicineDoc,
        };
      }

      return {
        statusCode: 500,
        msg: "Tạo thuốc thất bại! Đã có lỗi xảy ra.",
      };
    }
    // update a new cedicine
    else {
      const cedicineDoc = await db.Cedicine.update(
        {
          name,
          desc,
        },
        {
          where: {
            id,
          },
        }
      );
      if (cedicineDoc?.[0] > 0) {
        return {
          statusCode: 200,
          msg: "Đã lưu thay đổi.",
        };
      }
      return {
        statusCode: 500,
        msg: "Đã có lỗi xảy ra. Không có id thuốc này!",
      };
    }
  }

  async getCedicine({ offset = 0, limit = 3, name }) {
    const whereQuery = {};
    name &&
      (whereQuery.name = {
        [Op.substring]: name,
      });

    const docs = await db.Cedicine.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["name", "asc"]],
    });

    return {
      statusCode: 200,
      msg: "Lấy thông tin thành công.",
      data: {
        ...docs,
        limit: limit,
        offset: offset,
      },
    };
  }

  async deleteCedicine({ id }) {
    const docs = await db.Cedicine.destroy({
      where: {
        id,
      },
    });
    if (docs > 0) {
      return {
        statusCode: 200,
        msg: "Xóa thành công.",
        data: docs,
      };
    }
    return {
      statusCode: 400,
      msg: "Thuốc này chưa được xóa hay không tồn tại.",
    };
  }

  // Examination Services
  async createOrUpdateExaminationService({ name, description, id }) {
    // create a new Examination Service
    if (!id) {
      // check name existed
      const docExist = await db.ExaminationService.findOne({
        where: {
          name,
        },
        raw: true,
      });

      if (docExist) {
        return {
          statusCode: 400,
          msg: "Tên dịch vụ đã tồn tại",
          data: docExist,
        };
      }

      // create
      const serviceDoc = await db.ExaminationService.create({
        name,
        description,
      });

      if (serviceDoc) {
        return {
          statusCode: 200,
          msg: "Tạo dịch vụ thành công!",
          data: serviceDoc,
        };
      }

      return {
        statusCode: 500,
        msg: "Tạo dịch vụ khám bệnh thất bại! Đã có lỗi xảy ra.",
      };
    }
    // update
    else {
      const doc = await db.ExaminationService.update(
        {
          name,
          description,
        },
        {
          where: {
            id,
          },
        }
      );
      if (doc?.[0] > 0) {
        return {
          statusCode: 200,
          msg: "Đã lưu thay đổi.",
        };
      }
      return {
        statusCode: 400,
        msg: "Đã có lỗi xảy ra. Không có id này!",
      };
    }
  }

  async getExaminationService({ offset = 0, limit = 3, name }) {
    const whereQuery = {};
    name &&
      (whereQuery.name = {
        [Op.substring]: name,
      });

    const docs = await db.ExaminationService.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["createdAt", "desc"]],
    });

    return {
      statusCode: 200,
      msg: "Lấy thông tin thành công.",
      data: {
        ...docs,
        limit: limit,
        offset: offset,
      },
    };
  }

  async deleteExaminationService({ id }) {
    // check hospital have service
    const hospitalServiceExisted = await db.HospitalService.findOne({
      raw: true,
      where: {
        examinationServiceId: id,
      },
    });

    if (hospitalServiceExisted) {
      return {
        statusCode: 400,
        msg: "Dịch vụ này đang được dùng.",
      };
    }

    const docs = await db.ExaminationService.destroy({
      where: {
        id,
      },
    });
    if (docs > 0) {
      return {
        statusCode: 200,
        msg: "Xóa thành công.",
        data: docs,
      };
    }
    return {
      statusCode: 400,
      msg: "Dịch vụ này chưa được xóa hay không tồn tại.",
    };
  }

  // markdown
  async healthFacilityEditMarkDown({ healthFacilityId, content, html }) {
    const doc = await db.HealthFacility.update(
      {
        markdownHtml: html,
        markdownContent: content,
      },
      {
        where: {
          id: healthFacilityId,
        },
      }
    );
    if (doc?.[0] > 0) {
      return {
        statusCode: 200,
        msg: "Đã lưu thay đổi.",
      };
    }
    return {
      statusCode: 400,
      msg: "Đã có lỗi xảy ra. Không có id này!",
    };
  }
  async doctorEditMarkDown({ doctorId, content, html }) {
    const doc = await db.Staff.update(
      {
        markdownHtml: html,
        markdownContent: content,
      },
      {
        where: {
          id: doctorId,
        },
      }
    );
    if (doc?.[0] > 0) {
      return {
        statusCode: 200,
        msg: "Đã lưu thay đổi.",
      };
    }
    return {
      statusCode: 400,
      msg: "Đã có lỗi xảy ra. Không có id này!",
    };
  }

  async trigerLog({ userId, isBanded }) {
    const user = await db.User.findOne({
      where: { id: userId },
      raw: true,
    });

    if (!user) {
      return {
        statusCode: 400,
        msg: "Đã có lỗi xảy ra. Không tìm thấy người dùng này!",
      };
    }
    const doc = await db.User.update(
      {
        banded: isBanded,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    if (doc?.[0] > 0) {
      return {
        statusCode: 200,
        msg: "Đã lưu thay đổi.",
      };
    }
    return {
      statusCode: 400,
      msg: "Đã có lỗi xảy ra. Không có id này!",
    };
  }

  // chart
  async getIndexAdminHome1() {
    const patientCount = await db.Patient.count({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month() + 1
          ),
        ],
      },
    });
    const patientCountLast = await db.Patient.count({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month()
          ),
        ],
      },
    });

    const bookingCount = await db.Booking.count({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month() + 1
          ),
        ],
      },
    });

    const bookingCountLastMonth = await db.Booking.count({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month()
          ),
        ],
      },
    });

    const bookingCountSuccess = await db.HealthRecord.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Booking,
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("HealthRecord.createdAt")
            ),
            moment().month() + 1
          ),
        ],
        statusCode: "HR4",
      },
    });

    const sumRenvenueMonth = bookingCountSuccess.reduce(
      (init, v) => init + v.Booking.doctorPrice,
      0
    );

    const bookingCountSuccessLast = await db.HealthRecord.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Booking,
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("HealthRecord.createdAt")
            ),
            moment().month()
          ),
        ],
        statusCode: "HR4",
      },
    });
    const sumRenvenueMonthLast = bookingCountSuccessLast.reduce(
      (init, v) => init + v.Booking.doctorPrice,
      0
    );

    return {
      booking: {
        month: bookingCount,
        lastMonth: bookingCountLastMonth,
      },
      bookingSuccess: {
        month: bookingCountSuccess.length,
        lastMonth: bookingCountSuccessLast.length,
      },
      revenue: {
        month: sumRenvenueMonth,
        lastMonth: sumRenvenueMonthLast,
      },
      patient: {
        month: patientCount,
        lastMonth: patientCountLast,
      },
    };
  }

  async getIndexAdminHome2({ year }) {
    if (!year) return null;
    const patientDoc = await db.Patient.findAll({
      raw: true,
      nest: true,
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "year",
              Sequelize.col("Patient.createdAt")
            ),
            year
          ),
        ],
      },
    });
    const array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const maleCount = patientDoc
      .filter((p) => p.gender == "male")
      .map((r) => {
        const month = new Date(r.createdAt).getMonth();
        array1[month] += 1;
      });

    const femaleCount = patientDoc
      .filter((p) => p.gender == "female")
      .map((r) => {
        const month = new Date(r.createdAt).getMonth();
        array2[month] += 1;
      });
    return {
      male: array1,
      female: array2,
    };
  }

  async getIndexAdminHome3() {
    const bookingDoc = await db.Booking.findAll({
      where: {
        status: "CU2",
      },
      nest: true,
      raw: true,
      include: [
        {
          model: db.HealthExaminationSchedule,
          include: [
            {
              model: db.Working,
              include: [
                {
                  model: db.Staff,
                },
              ],
            },
          ],
        },
      ],
    });
    const specialistIds = bookingDoc.map(
      (s) => s.HealthExaminationSchedule.Working.Staff.specialistId
    );
    const specialistIdUniques = [...new Set(specialistIds)];

    const cacularPromises = specialistIdUniques.map(async (id) => {
      const bookingCount = await db.Booking.count({
        where: {
          status: "CU2",
        },
        nest: true,
        raw: true,
        include: [
          {
            model: db.HealthExaminationSchedule,
            where: {},
            include: [
              {
                model: db.Working,
                where: {},
                include: [
                  {
                    model: db.Staff,
                    where: {},
                    include: [
                      {
                        model: db.Specialist,
                        where: {
                          id: id,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      const specialist = await db.Specialist.findOne({
        raw: true,
        where: {
          id,
        },
      });
      return {
        specialist,
        count: bookingCount,
        percent: ((bookingCount * 100) / bookingDoc.length).toPrecision(2),
      };
    });

    const data = await Promise.all(cacularPromises);

    return data;
  }

  async getIndexAdminService1() {
    const serviceActive = await db.HospitalService.count({
      where: {
        isAcctive: true,
      },
    });
    const serviceNonActive = await db.HospitalService.count({
      where: {
        isAcctive: false,
      },
    });

    return {
      serviceActive,
      serviceNonActive,
    };
  }

  async getIndexDoctorHome1({ staffId }) {
    if (!staffId) return null;
    const bookingCountSuccess = await db.HealthRecord.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Booking,
          where: {},
          include: [
            {
              model: db.HealthExaminationSchedule,
              where: {},

              include: [
                {
                  model: db.Working,
                  where: {},

                  where: {
                    staffId,
                  },
                },
              ],
            },
          ],
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("HealthRecord.createdAt")
            ),
            moment().month() + 1
          ),
        ],
        statusCode: "HR4",
      },
    });

    const bookingCountLastMonth = await db.Booking.count({
      include: [
        {
          model: db.HealthExaminationSchedule,
          where: {},

          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("Booking.createdAt")
            ),
            moment().month()
          ),
        ],
      },
    });

    const bookingCountSum = await db.Booking.count({
      raw: true,
      nest: true,
      include: [
        {
          model: db.HealthExaminationSchedule,
          where: {},

          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    // patient
    const patientCountHere = await db.Booking.findAll({
      model: db.Booking,
      nest: true,
      raw: true,
      include: [
        db.PatientProfile,
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("Booking.createdAt")
            ),
            moment().month() + 1
          ),
        ],
      },
    });

    const patientIdDistances = [
      ...new Set(patientCountHere.map((s) => s.patientProfileId)),
    ];

    const patientCountLast = await db.Booking.findAll({
      model: db.Booking,
      nest: true,
      raw: true,
      include: [
        db.PatientProfile,
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.col("Booking.createdAt")
            ),
            moment().month()
          ),
        ],
      },
    });

    const patientIdDistancesLast = [
      ...new Set(patientCountLast.map((s) => s.patientProfileId)),
    ];

    const patientCountSum = await db.Booking.findAll({
      model: db.Booking,
      nest: true,
      raw: true,
      include: [
        db.PatientProfile,
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    const patientIdDistancesSum = [
      ...new Set(patientCountSum.map((s) => s.patientProfileId)),
    ];
    // chat
    const chatCountHere = await db.ChatRoom.count({
      where: {
        staffId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month() + 1
          ),
        ],
      },
    });
    const chatCountLast = await db.ChatRoom.count({
      where: {
        staffId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("createdAt")),
            moment().month()
          ),
        ],
      },
    });
    const chatCountSum = await db.ChatRoom.count({
      where: {
        staffId,
      },
    });

    // code
    const scheduleCountHere = await db.HealthExaminationSchedule.count({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Working,
          where: {
            staffId,
          },
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.fn("TO_DATE", Sequelize.col("date"), "MM/DD/YYYY")
            ),
            moment().month() + 1
          ),
        ],
      },
    });

    const scheduleCountLast = await db.HealthExaminationSchedule.count({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Working,
          where: {
            staffId,
          },
        },
      ],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn(
              "date_part",
              "month",
              Sequelize.fn("TO_DATE", Sequelize.col("date"), "MM/DD/YYYY")
            ),
            moment().month()
          ),
        ],
      },
    });

    const scheduleCountSum = await db.HealthExaminationSchedule.count({
      raw: true,
      nest: true,
      include: [
        {
          model: db.Working,
          where: {
            staffId,
          },
        },
      ],
      where: {},
    });

    return {
      booking: {
        bookingCountSuccess: bookingCountSuccess.length,
        bookingCountLastMonth,
        bookingCountSum,
      },
      patient: {
        patientCountHere: patientIdDistances.length,
        patientCountLast: patientIdDistancesLast.length,
        patientCountSum: patientIdDistancesSum.length,
      },

      chat: {
        chatCountHere,
        chatCountLast,
        chatCountSum,
      },
      schedule: {
        scheduleCountHere,
        scheduleCountLast,
        scheduleCountSum,
      },
    };
  }

  async getIndexDoctorHome2({ year, staffId }) {
    if (!year || !staffId) return null;
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bookings = await db.Booking.findAll({
      raw: true,
      nest: true,
      where: {
        status: "CU2",
      },
      include: [
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    bookings.map((r) => {
      const month = new Date(r.HealthExaminationSchedule.date).getMonth();
      const yearHere = new Date(r.HealthExaminationSchedule.date).getFullYear();

      if (year == yearHere) array[month] += r.doctorPrice;
    });
    return {
      data: array,
    };
  }

  async getIndexDoctorHome3({ staffId }) {
    if (!staffId) return null;
    const bookingMale = await db.Booking.count({
      raw: true,
      nest: true,
      where: {
        status: "CU2",
      },
      include: [
        {
          model: db.PatientProfile,
          where: {
            gender: "male",
          },
        },
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    const bookingFeMale = await db.Booking.count({
      raw: true,
      nest: true,
      where: {
        status: "CU2",
      },
      include: [
        {
          model: db.PatientProfile,
          where: {
            gender: "female",
          },
        },
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    return {
      bookingMale,
      bookingFeMale,
    };
  }

  async getIndexDoctorHome4({ staffId }) {
    if (!staffId) return null;
    const bookingDoc = await db.Booking.findAll({
      raw: true,
      nest: true,
      where: {
        status: "CU2",
      },
      include: [
        {
          model: db.PatientProfile,
          where: {},
        },
        {
          model: db.HealthExaminationSchedule,
          where: {},
          include: [
            {
              model: db.Working,
              where: {
                staffId,
              },
            },
          ],
        },
      ],
    });

    const keyWordPatient = bookingDoc.map((b) => b.descriptionDisease);

    const patientProfileIds = bookingDoc.map((b) => b.PatientProfile.id);
    const patientProfileIdsDistance = [...new Set(patientProfileIds)];

    const dataPromise = patientProfileIdsDistance.map(async (d) => {
      const bookingDoc = await db.Booking.findAll({
        raw: true,
        nest: true,
        where: {
          status: "CU2",
        },
        order: [[db.HealthExaminationSchedule, "date", "desc"]],
        include: [
          {
            model: db.PatientProfile,
            where: {
              id: d,
            },
          },
          {
            model: db.HealthExaminationSchedule,
            where: {},
            include: [
              { model: db.Code, as: "TimeCode" },
              {
                model: db.Working,
                where: {
                  staffId,
                },
              },
            ],
          },
        ],
      });

      return {
        bookingLast: bookingDoc?.[0],
        count: bookingDoc.length,
      };
    });

    const result = await Promise.all(dataPromise);
    return {
      patient: result,
      keyWordPatient,
    };
  }
  // index use
  async getIndex({ role, page, index, pagrams }) {
    let data = null;
    if (role == "admin") {
      switch (page) {
        case "home": {
          if (index == 1) {
            data = await this.getIndexAdminHome1();
            break;
          }

          if (index == 2) {
            data = await this.getIndexAdminHome2(pagrams);
            break;
          }

          if (index == 3) {
            data = await this.getIndexAdminHome3(pagrams);
            break;
          }
        }
        case "service": {
          if (index == 1) {
            data = await this.getIndexAdminService1();
            break;
          }
        }
      }
    } else if (role == "doctor") {
      switch (page) {
        case "home": {
          if (index == 1) {
            data = await this.getIndexDoctorHome1(pagrams);
            break;
          }

          if (index == 2) {
            data = await this.getIndexDoctorHome2(pagrams);
            break;
          }

          if (index == 3) {
            data = await this.getIndexDoctorHome3(pagrams);
            break;
          }
          if (index == 4) {
            data = await this.getIndexDoctorHome4(pagrams);
            break;
          }
        }
      }
    }

    return {
      statusCode: 0,
      msg: "Lấy Index thành công.",
      data: data,
    };
  }
}

export default new adminService();
