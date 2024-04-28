import { Op, where } from "sequelize";
import db from "../app/models";
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
        where: wherePatientProfile,
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
        msg: `Bác sỉ chưa được thêm vào phòng khám.`,
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
    });

    const dataPromise = bookingDoc.rows.map(async (b) => {
      const workingId = b.HealthExaminationSchedule.Working.id;
      // Get working no check price
      const workRoom = await workServices.getWorkRoomFromWorking({ workingId });

      return {
        ...b,
        workRoom,
      };
    });

    const result = await Promise.all(dataPromise);

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
        msg: "Lấy thông tin cho bác sỉ thành công.",
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

    const dataPromiseBooking = patientProfiles.map(async (p) => {
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
            where: {
              patientProfileId: p?.id,
            },
            include: [
              {
                model: db.HealthExaminationSchedule,
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

      return bookingDoc;
    });

    const result = await Promise.all(dataPromiseBooking);
    return result.filter((r) => r != null);
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
          include: [
            {
              model: db.HealthExaminationSchedule,
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
          msg: "Bạn đã đánh giá bác sỉ này rồi.",
        };

      const bookingLastStaff = await this.getBookingLastStaff({
        userId,
        staffId,
      });

      if (bookingLastStaff.length == 0) {
        return {
          statusCode: 402,
          msg: "Bạn chưa khám ở bác sỉ này.",
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

  // Account
  async getReview({ offset = 0, limit = 10, staffId, userId, type }) {
    const whereQueryReview = {};
    if (staffId) {
      whereQueryReview.staffId = staffId;
    }

    if (type == "notme") {
      whereQueryReview.userId = {
        [Op.not]: userId,
      };
    } else if (userId) {
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

  async calculatorReviewDoctorById({ staffId }) {
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
}

export default new UserServices();
