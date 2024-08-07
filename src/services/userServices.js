import { NUMBER, Op, where } from "sequelize";
import db, { Sequelize, sequelize } from "../app/models";
import bcrypt from "bcrypt";
import workServices from "./workServices";
import { raw } from "express";
import { searchLikeDeep, sendEmail as sendEmailHtml } from "../untils";
import moment from "moment";
import * as path from "path";
import staffServices from "./staffServices";

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
  async getUser({ offset = 0, limit = 10, email, fullName, banded }) {
    const whereQuery = {};

    banded && (whereQuery.banded = banded);

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

  // Patient Profile
  async getPatientProfile({
    offset = 0,
    limit = 10,
    userId,
    patientProfileId,
    profileName,
  }) {
    if (patientProfileId) {
      const docs = await db.PatientProfile.findByPk(patientProfileId);
      if (docs) {
        return {
          statusCode: 0,
          msg: "Lấy thông tin thành công.",
          data: docs,
        };
      } else {
        return {
          statusCode: 2,
          msg: "Lấy thông tin thất bại.",
        };
      }
    } else {
      const wherePatientProfile = {};
      if (profileName) {
        wherePatientProfile.fullName = searchLikeDeep(
          "PatientProfile",
          "fullName",
          profileName
        );
        // wherePatientProfile.fullName = {
        //   [Op.substring]: profileName,
        // };
      }

      wherePatientProfile.userId = userId;
      const docs = await db.PatientProfile.findAndCountAll({
        raw: true,
        where: {
          userId: userId,
        },
        offset,
        limit,
        order: [["fullName", "asc"]],
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

  async createOrUpdatePatientProfile(data) {
    // Check if user is not found
    console.log("data.userId", data.userId);
    const userDoc = await db.User.findByPk(data.userId);
    if (!userDoc)
      return {
        statusCode: 1,
        msg: "Người dùng không tồn tại.",
      };

    // Create a new Account
    if (!data.id) {
      // Check if the profile has already been created
      const patientProfileExisted = await db.PatientProfile.findOne({
        where: {
          cccd: data.cccd,
        },
        raw: true,
      });

      if (patientProfileExisted)
        return {
          statusCode: 1,
          msg: "Hồ sơ này đã tồn tại.",
        };

      const patientProfileDoc = await db.PatientProfile.create({
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        profession: data.profession,
        email: data.email,
        birthDay: data.birthDay,
        gender: data.gender,
        cccd: data.cccd,
        nation: data.nation,
        addressCode: data.addressCode,
        userId: data.userId,
      });

      if (patientProfileDoc) {
        return {
          statusCode: 0,
          msg: "Tạo hồ sơ bệnh nhân thành công.",
          data: patientProfileDoc,
        };
      } else {
        return {
          statusCode: 4,
          msg: "Lỗi tạo hồ sơ bệnh nhân.",
        };
      }
    } else {
      // Update patient profile
      // Check if the profile has already been created
      const patientProfileExisted = await db.PatientProfile.findOne({
        where: {
          cccd: data.cccd,
          id: {
            [Op.not]: data.id,
          },
        },
        raw: true,
      });

      if (patientProfileExisted)
        return {
          statusCode: 1,
          msg: "Hồ sơ này đã tồn tại.",
        };

      const countUpdated = await db.PatientProfile.update(
        {
          fullName: data.fullName,
          phone: data.phone,
          address: data.address,
          profession: data.profession,
          email: data.email,
          birthDay: data.birthDay,
          gender: data.gender,
          cccd: data.cccd,
          nation: data.nation,
          addressCode: data.addressCode,
        },
        {
          where: {
            id: data.id,
          },
        }
      );

      if (countUpdated[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật thành công hồ sơ bệnh nhân.",
        };
      } else {
        return {
          statusCode: 4,
          msg: "Không tìm thấy hồ sơ bệnh nhân.",
        };
      }
    }
  }

  async deletePatientProfile(id, userId) {
    const patientProfileDoc = await db.PatientProfile.findOne({
      where: {
        id,
      },
      raw: true,
    });

    if (patientProfileDoc && patientProfileDoc.userId !== userId) {
      return {
        statusCode: 4,
        msg: 'Bạn không có quyền xóa "Hồ sơ bệnh nhân" của người khác.',
      };
    } else if (!patientProfileDoc) {
      return {
        statusCode: 4,
        msg: "Không tìm thấy hồ sơ này.",
      };
    }
    const deletedCount = await db.PatientProfile.destroy({
      force: true,
      where: {
        id,
      },
    });

    if (deletedCount > 0)
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

  // Booking
  // dont fix cancel
  async countBooking(healthExaminationScheduleId) {
    const count = await db.Booking.findAll({
      where: {
        healthExaminationScheduleId: healthExaminationScheduleId,
        status: "CU2",
      },
    });

    return count.length;
  }

  async isBooking(healthExaminationScheduleId) {
    const doc = await db.HealthExaminationSchedule.findByPk(
      healthExaminationScheduleId,
      {
        raw: true,
      }
    );
    const count = await this.countBooking(healthExaminationScheduleId);

    if (doc.maxNumber > count) {
      return true;
    } else return false;
  }

  async createBooking({
    healthExaminationScheduleId,
    patientProfileId,
    descriptionDisease,
    userId,
    paymentType,
  }) {
    if (paymentType !== "card" && paymentType !== "hospital") {
      return {
        statusCode: 400,
        msg: "Dữ liệu về phương thức thanh toán không chính xác",
      };
    }
    //  Check data existed
    const [schedule, patientProfile] = await Promise.all([
      db.HealthExaminationSchedule.findByPk(healthExaminationScheduleId, {
        raw: true,
      }),
      db.PatientProfile.findByPk(patientProfileId, {
        raw: true,
      }),
    ]);

    if (!schedule || !patientProfile) {
      return {
        statusCode: 1,
        msg: "Dữ liệu *Hồ sơ bệnh nhân* hoặc *Lịch không được tìm thấy*.",
      };
    }

    // Check is user login booking
    if (patientProfile.userId !== userId) {
      return {
        statusCode: 3,
        msg: "Bạn phải đặt lịch cho hồ sơ của bạn.",
      };
    }

    // Check patient profile can booking
    const bookingExists = await db.Booking.findOne({
      where: {
        healthExaminationScheduleId,
        patientProfileId,
      },
      raw: true,
    });

    if (bookingExists && bookingExists.status === "CU1") {
      return {
        statusCode: 0,
        msg: "Lấy dữ liệu để thanh toán",
        data: bookingExists,
      };
    } else if (bookingExists && bookingExists.status === "CU2") {
      return {
        statusCode: 400,
        msg: "Hồ sơ bệnh nhân của bạn đã đặt lịch này.",
        data: bookingExists,
      };
    }

    // get doctor current
    const doctorWorkRoom = await workServices.getWorkRoomFromWorking({
      workingId: schedule.workingId,
      type: "thanFromDateHere",
    });
    if (!doctorWorkRoom) {
      return {
        statusCode: 500,
        msg: `Bác sĩ chưa được thêm vào phòng khám.`,
      };
    }
    const doctorPrice = doctorWorkRoom.checkUpPrice;

    const isBooking = await this.isBooking(healthExaminationScheduleId);

    // check code CU1 existed
    const codeExists = await db.Code.findOne({
      where: {
        key: "CU1",
      },
    });

    if (!codeExists) {
      return {
        statusCode: 400,
        msg: "Không tìm thấy dữ liệu CU1 - 'Chờ thanh toán'",
      };
    }

    if (isBooking) {
      const bookingEntity = await db.Booking.create({
        healthExaminationScheduleId,
        patientProfileId,
        descriptionDisease,
        paymentType,
        doctorPrice,
        status: "CU1",
      });

      const bookingDoc = bookingEntity.get({ plain: true });
      return {
        statusCode: 0,
        msg: `Bạn đã đặt lịch thành công.`,
        data: bookingDoc,
      };
    } else {
      return {
        statusCode: 2,
        msg: "Đã có người vừa đặt lịch này, lịch đã đủ người khám. Vui lòng đăng ký lịch khác!",
      };
    }
  }

  async getBooking({
    date,
    healthFacilityId,
    paymentType,
    patientProfileId,
    patientProfileName,
    userId,
    limit = 30,
    offset = 0,
    status,
    bookingId,
    HR4,
  }) {
    const whereBooking = {};
    const whereHealthExaminationSchedule = {};
    const wherePatientProfile = {};

    // get patient profile of user
    const patientProfileDoc = await db.PatientProfile.findAll({
      where: { userId },
      raw: true,
    });

    if (status) {
      whereBooking.status = status;
    }
    if (bookingId) {
      whereBooking.id = bookingId;
    }

    const patientProfileIds = patientProfileDoc.map((p) => p.id);
    whereBooking.patientProfileId = {
      [Op.in]: patientProfileIds,
    };

    const bookingDoc = await db.Booking.findAndCountAll({
      limit,
      offset,
      where: whereBooking,
      nest: true,
      raw: true,
      include: [
        {
          model: db.HealthExaminationSchedule,
          where: whereHealthExaminationSchedule,
          include: [
            {
              model: db.Working,
              include: [
                {
                  model: db.Staff,
                  include: [db.Specialist],
                },
              ],
            },
            {
              model: db.Code,
              as: "TimeCode",
            },
          ],
        },
        {
          model: db.PatientProfile,
          where: wherePatientProfile,
        },
        {
          model: db.Code,
        },
      ],
      order: [[db.HealthExaminationSchedule, "date", "desc"]],
    });

    const dataPromise = bookingDoc.rows.map(async (b) => {
      const bookingId = b.id;
      if (HR4 == 1) {
        const health = await db.HealthRecord.findOne({
          status: "HR4",
          raw: true,
          where: {
            bookingId,
          },
        });

        if (!health) return null;
      }

      const workingId = b.HealthExaminationSchedule.Working.id;
      // Get working no check price
      const workRoom = await workServices.getWorkRoomFromWorking({ workingId });

      return {
        ...b,
        workRoom,
      };
    });

    const result = (await Promise.all(dataPromise)).filter((s) => s != null);

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        rows: result,
        count: bookingDoc.count,
        limit: limit,
        offset: offset,
      },
    };
  }

  async updateStatusBooking({ status, bookingId, sendEmail = false }) {
    const checkStatusExited = await db.Code.findOne({
      where: {
        key: status,
      },
      raw: true,
    });

    if (!checkStatusExited) {
      return {
        statusCode: 500,
        msg: "Mã trạng thái không tồn tại. [CODE]",
      };
    }
    let isSendEmail = false;
    if (sendEmail) {
      const bookingFilter = await db.Booking.findOne({
        raw: true,
        nest: true,
        where: {
          id: bookingId,
        },
        include: [
          {
            model: db.HealthExaminationSchedule,
            include: [
              {
                model: db.Working,
              },
            ],
          },
          {
            model: db.PatientProfile,
          },
          {
            model: db.Code,
          },
        ],
      });

      if (bookingFilter && bookingFilter.status === "CU1") {
        // send email
        isSendEmail = true;
      }
    }

    const bookingUpdate = await db.Booking.update(
      { status },
      {
        where: {
          id: bookingId,
        },
        include: [
          {
            model: db.HealthExaminationSchedule,
            include: [
              {
                model: db.Working,
              },
            ],
          },
          {
            model: db.PatientProfile,
          },
          {
            model: db.Code,
          },
        ],
      }
    );

    const bookingFilter = await db.Booking.findOne({
      where: {
        id: bookingId,
      },
      draw: true,
      include: [
        db.PatientProfile,
        {
          model: db.HealthExaminationSchedule,
          include: [
            {
              model: db.Code,
              as: "TimeCode",
            },
            {
              model: db.Working,
              include: [db.Staff, db.HealthFacility],
            },
          ],
        },
      ],
      nest: true,
    });
    if (isSendEmail) {
      const replacements = {
        name: bookingFilter.PatientProfile.fullName,
        time: bookingFilter.HealthExaminationSchedule.TimeCode.value,
        date: moment(bookingFilter.HealthExaminationSchedule.date).format("L"),
        doctor: bookingFilter.HealthExaminationSchedule.Working.Staff.fullName,
        location: `${bookingFilter.HealthExaminationSchedule.Working.HealthFacility.name}`,
      };

      try {
        const __dirname = path.resolve();
        const srcHtml = "/src/views/template/email_booking_2.html";
        const filePath = path.join(__dirname, srcHtml);
        await sendEmailHtml({
          receiveEmail: bookingFilter?.PatientProfile?.email,
          replacements,
          srcHtml: filePath,
        });
      } catch (error) {
        console.log(error);
      }
    }

    return {
      statusCode: 0,
      msg: "Cập nhật booking thành công.",
      data: bookingFilter,
    };
  }

  async getHealthRecordWithTimeCode(timeCodeId) {
    const data = await db.HealthRecord.findAll({
      raw: true,
      // order: [["createdAt", "desc"]],
      include: [
        {
          model: db.Booking,
          where: {
            healthExaminationScheduleId: timeCodeId,
          },
          order: [["createdAt", "desc"]],
          include: [
            {
              model: db.PatientProfile,
            },
          ],
        },
        {
          model: db.Code,
          as: "status",
        },
      ],
      nest: true,
    });

    return data;
  }

  // Health records
  async getHealthRecord({
    offset = 0,
    limit = 100,
    userId,
    healthRecordId,
    permission = "user",
    timeCodeId,
  }) {
    async function getRecordRaw(userId, healthRecordId) {
      const whereHealthRecord = {};
      const wherePatientProfile = {};
      const whereQueryBooking = {};
      const whereQueryStaff = {};
      if (healthRecordId) {
        whereHealthRecord.id = healthRecordId;
      }
      if (userId) {
        wherePatientProfile.userId = userId;
      } else {
        whereQueryStaff.id = userId;
      }
      const docs = await db.HealthRecord.findOne({
        raw: true,
        where: whereHealthRecord,
        include: [
          {
            model: db.Booking,
            where: whereQueryBooking,
            include: [
              {
                model: db.HealthExaminationSchedule,
                include: [
                  {
                    model: db.Working,
                    include: [
                      {
                        model: db.Staff,
                        include: [db.Specialist],
                        where: whereQueryStaff,
                      },
                    ],
                  },
                  {
                    model: db.Code,
                    as: "TimeCode",
                  },
                ],
              },
              {
                model: db.PatientProfile,
                where: wherePatientProfile,
                include: [
                  {
                    model: db.User,
                  },
                ],
              },
            ],
          },
          {
            model: db.Code,
            as: "status",
            // where: whereQueryCode,
          },
        ],
        nest: true,
      });
      if (!docs) {
        return false;
      }
      const workRoomDoc = await db.WorkRoom.findOne({
        raw: true,
        where: {
          applyDate: {
            [Op.lte]: docs.Booking.createdAt,
          },
        },
        include: [
          {
            model: db.Working,
            where: {
              id: docs.Booking.HealthExaminationSchedule.Working.id,
            },
          },
          {
            model: db.ClinicRoom,
            on: {
              [Op.and]: [
                {
                  roomNumber: {
                    [Op.col]: "WorkRoom.ClinicRoomRoomNumber",
                  },
                },
                {
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
        order: [["applyDate", "desc"]],
        nest: true,
      });
      docs.WorkRoom = workRoomDoc;
      return docs;
    }
    if (healthRecordId) {
      const docs = await getRecordRaw(userId, healthRecordId);
      if (docs) {
        return {
          statusCode: 0,
          msg: "Lấy thông tin thành công.",
          data: docs,
        };
      } else {
        return {
          statusCode: 1,
          msg: "Lấy thông tin thất bại. Không tìm thấy phiếu khám bệnh.",
        };
      }
    }

    const whereHealthRecord = {};
    const wherePatientProfile = {};
    const whereQueryBooking = {};
    if (healthRecordId) {
      whereHealthRecord.id = healthRecordId;
    }
    if (userId && permission !== "doctor") {
      wherePatientProfile.userId = userId;
    }

    if (permission === "doctor") {
      if (!timeCodeId) {
        return {
          statusCode: 4,
          msg: "Thiếu tham số truyền vào [timeCodeId].",
        };
      }

      const data = await this.getHealthRecordWithTimeCode(timeCodeId);

      return {
        statusCode: 0,
        msg: "Lấy thông tin cho Bác sĩ thành công.",
        data: data,
      };
    }
    const docBookingUser = await db.HealthRecord.findAll({
      raw: true,
      offset,
      limit,
      where: whereHealthRecord,
      order: [["orderNumber", "asc"]],
      include: [
        {
          model: db.Booking,
          where: whereQueryBooking,
          order: [["createdAt", "desc"]],
          include: [
            {
              model: db.PatientProfile,
              where: wherePatientProfile,
            },
          ],
        },
      ],
      nest: true,
    });
    const resultPromise = docBookingUser.map(
      async (doc) => await getRecordRaw(userId, doc.id)
    );
    const result = await Promise.all(resultPromise);
    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: result,
    };
  }

  async getBookingLastStaff({ userId, staffId }) {
    const patientProfiles = await db.PatientProfile.findAll({
      raw: true,
      where: {
        userId,
      },
    });
    console.log("\n\n\n\n\npatientProfiles", patientProfiles);

    const dataPromiseBooking = patientProfiles.map(async (p) => {
      const bookingDoc = await db.HealthRecord.findAll({
        offset: 0,
        limit: 5,
        order: [["createdAt", "desc"]],
        raw: true,
        nest: true,
        where: {
          statusCode: "HR4",
        },
        include: [
          db.Patient,
          {
            model: db.Booking,
            where: {
              patientProfileId: p?.id,
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
          },
        ],
      });

      return bookingDoc || [];
    });

    const result = await Promise.all(dataPromiseBooking);
    return result.filter((r) => r != null).flat();
  }

  async getBookingLastStaff5({ staffId }) {
    const bookingDoc = await db.HealthRecord.findAndCountAll({
      offset: 0,
      limit: 5,
      order: [["createdAt", "desc"]],
      raw: true,
      nest: true,
      where: {
        statusCode: "HR4",
      },
      include: [
        db.Patient,
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
                  where: {
                    staffId,
                  },
                },
                {
                  model: db.Code,
                  as: "TimeCode",
                },
              ],
            },
          ],
        },
      ],
    });

    console.log("bookingDocbookingDoc", bookingDoc);
    return {
      statusCode: 200,
      msg: "Lấy dữ liệu thành công",
      data: bookingDoc,
    };
  }

  async createOrUpdateReview({ id, staffId, starNumber, description, userId }) {
    // Create a new Account
    if (starNumber < 0 || starNumber > 5) {
      return {
        statusCode: 400,
        msg: "Đánh giá sai.",
      };
    }
    if (!id) {
      // Check exit booking
      const userDoc = await db.User.findOne({
        raw: true,
        where: {
          id: userId,
        },
      });

      if (!userDoc)
        return {
          statusCode: 404,
          msg: "Không tìm thấy người dùng đánh giá.",
        };

      // Check exit review
      const reviewExist = await db.Review.findOne({
        raw: true,
        where: {
          userId: userId,
          staffId: staffId,
        },
      });

      if (reviewExist)
        return {
          statusCode: 404,
          msg: "Bạn đã đánh giá Bác sĩ này rồi.",
        };

      const bookingLastStaff = await this.getBookingLastStaff({
        userId,
        staffId,
      });

      console.log(
        "\n\n\nbookingLastStaffbookingLastStaffbookingLastStaffbookingLastStaff",
        bookingLastStaff
      );

      if (bookingLastStaff.length == 0) {
        return {
          statusCode: 402,
          msg: "Bạn chưa khám ở Bác sĩ này.",
        };
      }

      // create review
      const reviewDoc = await db.Review.create({
        staffId,
        starNumber,
        description,
        userId,
      });

      if (reviewDoc) {
        return {
          statusCode: 0,
          msg: "Đã đánh giá.",
          data: reviewDoc,
        };
      } else {
        return {
          statusCode: 4,
          msg: "Lỗi xin thử lại.",
        };
      }
    }

    // update
    else {
      const userDocUpdated = await db.Review.update(
        {
          starNumber,
          description,
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
          msg: `Đã cập nhật đánh giá.`,
        };
      } else {
        return {
          statusCode: 0,
          msg: "Dữ liệu chưa được thay đổi",
        };
      }
    }
  }

  async changePass({ password_old, password, rePassword, userId }) {
    const userPass = await db.User.findOne({
      where: {
        id: userId,
      },
      raw: true,
    });
    if (!userPass) {
      return {
        statusCode: 400,
        msg: "Người dùng không tìm thấy.",
      };
    }
    const passHash = await bcrypt.compare(password_old, userPass.password);
    if (!passHash) {
      return {
        statusCode: 400,
        msg: "Mật khẩu cũ không chính xácc.",
      };
    }
    const passHashNew = await bcrypt.hash(password, saltRounds);
    const reviewDocUpdate = await db.User.update(
      {
        password: passHashNew,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    if (reviewDocUpdate[0] > 0) {
      return {
        statusCode: 0,
        msg: "Đã thay đổi mật khẩu.",
        data: reviewDocUpdate,
      };
    } else {
      return {
        statusCode: 4,
        msg: "Mật khẩu mới trùng với mật khẩu cũ.",
      };
    }
  }

  // Account
  async getReview({
    offset = 0,
    limit = 10,
    staffId,
    userId,
    type,
    starNumber,
    healthFacilityId,
    unique,
  }) {
    const whereQueryReview = {};

    // get all for clinic
    if (healthFacilityId) {
      const working = await workServices.getWorking({
        Role: ["doctor"],
        offset: 0,
        limit: 500,
        healthFacilityId,
      });

      const staffIds = working.data.rows.map((w) => w.staffId);
      whereQueryReview.staffId = {
        [Op.in]: staffIds,
      };
      const reviews = await db.Review.findAndCountAll({
        raw: true,
        offset,
        limit,
        where: whereQueryReview,
        order: [["createdAt", "desc"]],
        include: [db.Staff, db.User],
        nest: true,
      });

      return {
        statusCode: 0,
        msg: "Lấy thông tin thành công.",
        data: {
          ...reviews,
          limit: limit,
          offset: offset,
        },
      };
    }

    if (starNumber) {
      whereQueryReview.starNumber = starNumber;
    }

    if (staffId) {
      whereQueryReview.staffId = staffId;
    }

    if (type == "notme" && userId) {
      whereQueryReview.userId = {
        [Op.not]: userId,
      };
    } else if (userId && type != "all") {
      whereQueryReview.userId = userId;
    }

    const accounts = await db.Review.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQueryReview,
      order: [["createdAt", "desc"]],
      include: [db.Staff, db.User],
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

  async calculatorReviewDoctorById({ staffId, healthFacilityId }) {
    if (healthFacilityId) {
      const working = await workServices.getWorking({
        Role: ["doctor"],
        offset: 0,
        limit: 500,
        healthFacilityId,
      });
      const staffIds = working.data.rows.map((w) => w.staffId);
      const staffStar = await Promise.all(
        staffIds.map((s) =>
          staffServices.calculatorReviewDoctor({ staffId: s })
        )
      );
      // return { statusCode: 0, data: staffStar };

      const star5 = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.star.star5, 0).toFixed(2)
      );
      const star4 = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.star.star4, 0).toFixed(2)
      );
      const star3 = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.star.star3, 0).toFixed(2)
      );
      const star2 = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.star.star2, 0).toFixed(2)
      );
      const star1 = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.star.star1, 0).toFixed(2)
      );

      const countReview = Number.parseFloat(
        staffStar.reduce((init, s) => init + s.countReview, 0)
      );
      const sumStar = staffStar.reduce(
        (init, s) =>
          init +
          s.star.star5 * 5 +
          s.star.star4 * 4 +
          s.star.star3 * 3 +
          s.star.star2 * 2 +
          s.star.star1 * 1,
        0
      );
      const avg = sumStar / (countReview || 1);

      const data = {
        countReview: countReview,
        avg: avg == 0 ? 5 : Number.parseFloat(avg.toFixed(2)),
        star: {
          star5,
          star4,
          star3,
          star2,
          star1,
        },
      };

      return {
        statusCode: 200,
        msg: "Lấy thành công",
        data: {
          reviewIndex: data,
          healthFacility: working.data.rows[0].HealthFacility,
        },
      };
    }

    if (!staffId) {
      return {
        statusCode: 400,
        msg: "Vui lòng truyền staffId.",
      };
    }

    const views = await staffServices.calculatorReviewDoctor({ staffId });
    return {
      statusCode: 200,
      msg: "Lấy thành công",
      data: views,
    };
  }

  async deleteReview(id) {
    const deletedCount = await db.Review.destroy({
      force: true,
      where: {
        id,
      },
    });

    if (deletedCount > 0)
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
  // get medical record
  async getMedicalRecord({
    offset = 0,
    limit = 10,
    staffId,
    healthFacilityId,
    healthRecordId,
    cccd,
  }) {
    // trang thai da kham
    const whereQueryHealthRecord = {
      statusCode: "HR4",
    };

    const whereQueryPatient = {};
    const whereQueryWorking = {};
    if (healthRecordId) {
      whereQueryHealthRecord.healthRecordId = healthRecordId;
    }
    if (cccd) {
      whereQueryPatient.cccd = cccd;
    }

    if (staffId) {
      whereQueryWorking.staffId = staffId;
    }
    if (healthFacilityId) {
      whereQueryWorking.healthFacilityId = healthFacilityId;
    }
    const medicalRecord = await db.HealthRecord.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQueryHealthRecord,
      order: [["createdAt", "desc"]],
      include: [
        {
          model: db.Patient,
          where: whereQueryPatient,
        },
        // {
        //   model: db.Booking,
        //   include: [
        //     {
        //       model: db.HealthExaminationSchedule,
        //       include: [
        //         {
        //           model: db.Code,
        //           as: "TimeCode",
        //         },
        //         {
        //           model: db.Working,
        //           where: whereQueryWorking,
        //           include: [
        //             {
        //               model: db.HealthFacility,
        //             },
        //             {
        //               model: db.Staff,
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      nest: true,
    });

    const pmisedata = medicalRecord?.rows?.map(async (m) => {
      const bookingDoc = await db.Booking.findOne({
        where: {
          id: m.bookingId,
        },
        include: [
          {
            model: db.HealthExaminationSchedule,
            include: [
              {
                model: db.Code,
                as: "TimeCode",
              },
              {
                model: db.Working,
                where: whereQueryWorking,
                include: [
                  {
                    model: db.HealthFacility,
                  },
                  {
                    model: db.Staff,
                  },
                ],
              },
            ],
          },
        ],
        raw: true,
        nest: true,
      });
      return {
        Booking: bookingDoc,
        ...m,
      };
    });

    const data = await this.getInfoMedicalRecord({ cccd });
    const medicalRecordPromiseData = await Promise.all(pmisedata);
    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        count: medicalRecord.count,
        rows: medicalRecordPromiseData,
        optionFilter: data,
        limit: limit,
        offset: offset,
      },
    };
  }

  // get  info medical record
  async getInfoMedicalRecord({ cccd }) {
    if (!cccd) return null;
    // trang thai da kham
    const whereQueryHealthRecord = {
      statusCode: "HR4",
    };
    const whereQueryPatient = {};

    if (cccd) {
      whereQueryPatient.cccd = cccd;
    }

    const medicalRecord = await db.HealthRecord.findAll({
      raw: true,
      where: whereQueryHealthRecord,
      order: [["createdAt", "desc"]],
      include: [
        {
          model: db.Patient,
          where: whereQueryPatient,
        },
        {
          model: db.Booking,
          include: [
            {
              model: db.HealthExaminationSchedule,
              include: [
                {
                  model: db.Working,
                  include: [db.Staff, db.HealthFacility],
                },
              ],
            },
          ],
        },
      ],
      nest: true,
    });

    const doctorList = medicalRecord.map(
      (m) => m?.Booking?.HealthExaminationSchedule?.Working?.Staff
    );

    const healthFacilityList = medicalRecord.map(
      (m) => m?.Booking?.HealthExaminationSchedule?.Working?.HealthFacility
    );
    // return medicalRecord;
    return {
      doctorList,
      healthFacilityList,
    };
  }

  async checkBan({ userId }) {
    const user = db.User.findOne({
      where: {
        id: userId,
        banded: true,
      },
      raw: true,
    });

    return user;
  }

  // index use
  async getIndex({ page, index, pagrams }) {
    let data = null;
    switch (page) {
      case "home": {
        if (index == 1) {
          data = await this.getIndexHome1();
          break;
        }

        if (index == 2) {
          data = await this.getIndexHome2();
          break;
        }
      }

      case "profile": {
        if (index == 1) {
          data = await this.getIndexProfile1(pagrams);
          break;
        }

        if (index == 2) {
          data = await this.getIndexProfile2(pagrams);
          break;
        }
      }
    }

    return {
      statusCode: 0,
      msg: "Lấy Index thành công.",
      data: data,
    };
  }

  // function
  async getIndexHome1() {
    const patientCount = await db.Patient.count();
    const reviewCount45 = await db.Review.count({
      where: {
        starNumber: {
          [Op.gte]: 4,
        },
      },
    });
    const reviewCountTotal = await db.Review.count({});

    const doctorCount = await db.Staff.count({
      include: [
        {
          model: db.Role,
          where: {
            keyType: "doctor",
          },
        },
      ],
    });

    return {
      patientCount,
      reviewCount: Math.round((reviewCount45 * 100) / (patientCount || 1)),
      doctorCount,
    };
  }

  async getIndexHome2() {
    console.log("/n/n/n\n\n\n\n\n\n\n---");
    const reviewCount = await db.Review.count();
    const reviewAvg = await db.Review.findOne({
      raw: true,
      attributes: [
        [sequelize.fn("AVG", sequelize.col("Review.starNumber")), "avgRating"],
      ],
    });

    return {
      reviewCount,
      reviewAvg: Number.parseFloat(reviewAvg.avgRating).toPrecision(2),
    };
  }

  async getIndexProfile1({ userId }) {
    if (!userId) return null;
    const reviewCount = await db.Review.count({
      where: {
        userId,
      },
    });

    const patientProfileCount = await db.PatientProfile.count({
      where: {
        userId,
      },
    });

    const bookingSum = await db.Booking.findAll({
      raw: true,
      nest: true,
      where: {
        status: "CU2",
      },
      include: [
        {
          model: db.PatientProfile,
          where: {
            userId,
          },
        },
      ],
      // group: ["Booking.PatientProfile.userId"],
    });

    const sumPrice = bookingSum.reduce((init, v) => init + v.doctorPrice, 0);

    return {
      reviewCount,
      patientProfileCount,
      bookingSum: sumPrice,
    };
  }

  async getIndexProfile2({ year, userId }) {
    const patientProfileDoc = await db.PatientProfile.findAll({
      where: {
        userId,
      },
      raw: true,
    });

    // top patient

    const bookingPromiseTop = patientProfileDoc.map(async (b) => {
      const bookingDoc = await db.Booking.count({
        raw: true,
        nest: true,
        where: {
          patientProfileId: b.id,
          status: "CU2",
        },
      });
      return {
        patientProfile: b,
        bookingCount: bookingDoc,
      };
    });

    const profileAndBookingTop = await Promise.all(bookingPromiseTop);

    const maxObject = profileAndBookingTop.reduce(
      (max, obj) => (obj.bookingCount > max.bookingCount ? obj : max),
      profileAndBookingTop[0]
    );

    const bookingLast = await db.Booking.findAll({
      raw: true,
      nest: true,
      where: {
        patientProfileId: maxObject?.patientProfile?.id,
      },
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
            {
              model: db.Code,
              as: "TimeCode",
            },
          ],
        },
      ],
      limit: 3,
      offset: 0,
      order: [["createdAt", "desc"]],
    });

    // return bookingLast;

    if (!year)
      return {
        maxObject,
      };

    // chart

    const bookingPromise = patientProfileDoc.map(async (b) => {
      const bookingDoc = await db.Booking.findAll({
        raw: true,
        nest: true,
        where: {
          patientProfileId: b.id,
          [Op.and]: [
            Sequelize.where(
              Sequelize.fn(
                "date_part",
                "year",
                Sequelize.col("Booking.createdAt")
              ),
              year
            ),
          ],
        },
      });
      return {
        patientProfile: b,
        booking: bookingDoc,
      };
    });

    const profileAndBooking = await Promise.all(bookingPromise);

    const cal = profileAndBooking.map((d) => {
      const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      d.booking.map((r) => {
        const month = new Date(r.createdAt).getMonth();
        array[month] += 1;
      });

      return {
        patientProfile: d.patientProfile,
        data: array,
      };
    });

    return {
      chart: cal,
      max: maxObject,
      bookingLastMax: bookingLast,
    };
  }
}

export default new UserServices();
