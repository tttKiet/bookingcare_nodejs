import { Op, where } from "sequelize";
import db, { Sequelize } from "../app/models";
import bcrypt from "bcrypt";
import workServices from "./workServices";
import moment from "moment";
import { raw } from "express";
const saltRounds = 10;
import { sendEmail } from "../untils";
import * as fs from "fs";
import * as path from "path";
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

  async deleteAcademicDegree({ id }) {
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

  // booking
  async getBooking({
    offset = 0,
    limit = 10,
    staffId,
    date,
    timeCodeId,
    patientProfileName,
    healthExamScheduleId,
    checkUpCodeId,
    bookingId,
    staffIdLogin,
  }) {
    let healthFacilityId;
    if (staffIdLogin) {
      const workingDoc = await workServices.getWorking({
        doctorId: staffIdLogin,
      });

      if (!workingDoc?.statusCode == 0 && !workingDoc?.data?.rows[0]) {
        return {
          statusCode: 400,
          msg: "Không tìm thấy công tác của của nhân viên này.",
        };
      }
      healthFacilityId = workingDoc?.data?.rows?.[0]?.healthFacilityId;
    }

    const whereStaff = {};
    const whereHealthFacility = {};
    staffId && (whereStaff.staffId = staffId);

    const whereSchedule = {};
    const whereBooking = {};
    if (date) {
      const dateFilter = moment(date).format("L");
      whereSchedule.date = dateFilter;
    }

    if (healthFacilityId) {
      whereHealthFacility.id = healthFacilityId;
    }

    if (bookingId) {
      whereBooking.id = bookingId;
    }

    if (timeCodeId) {
      whereSchedule.timeCode = timeCodeId;
    }
    if (checkUpCodeId) {
      whereBooking.status = checkUpCodeId;
    }

    if (healthExamScheduleId) {
      whereSchedule.id = healthExamScheduleId;
    }

    const wherePatientProfile = {};
    if (patientProfileName) {
      wherePatientProfile.fullName = {
        [Op.substring]: patientProfileName,
      };
    }

    const docs = await db.Booking.findAndCountAll({
      raw: true,
      offset,
      where: whereBooking,
      limit,
      order: [["createdAt", "desc"]],
      nest: true,
      include: [
        {
          model: db.HealthExaminationSchedule,
          where: whereSchedule,
          include: [
            {
              model: db.Working,
              where: whereStaff,
              include: [
                {
                  model: db.HealthFacility,
                  where: whereHealthFacility,
                },
                db.Staff,
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
          include: [db.User],
        },
        {
          model: db.Code,
        },
      ],
    });

    const promiseArray = docs.rows.map(async (d) => {
      const healthRecordDoc = await db.HealthRecord.findOne({
        where: {
          bookingId: d?.id,
        },
        include: [
          {
            model: db.Code,
            as: "status",
          },
          db.Patient,
        ],
        nest: true,
        raw: true,
      });

      return {
        booking: d,
        healthRecord: healthRecordDoc || null,
      };
    });
    const data = await Promise.all(promiseArray);

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        rows: data,
        limit: limit,
        offset: offset,
        count: docs.count,
      },
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
  async getStaff({ offset = 0, limit = 10, email, fullName, type, doctorId }) {
    const whereQuery = {};
    const whereRole = {};
    if (type)
      whereRole.keyType = {
        [Op.and]: [
          {
            [Op.ne]: "admin",
          },
          {
            [Op.eq]: type,
          },
        ],
      };
    else {
      whereRole.keyType = {
        [Op.ne]: "admin",
      };
    }

    if (doctorId) {
      whereQuery.id = doctorId;
    }

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
          where: whereRole,
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
    const role = await db.Role.findByPk(roleId, {
      raw: true,
    });
    if (!role) {
      return {
        statusCode: 1,
        msg: "Dữ liệu role không tồn tại.",
      };
    }

    if (role.keyType !== "hospital_manager") {
      if (!academicDegreeId || !specialistId || !experience || !certificate) {
        return {
          statusCode: 400,
          msg: "Tham tạo bác sỉ chưa đủ.",
        };
      }
    }

    // Check academicDegreeId and specialistId
    if (role.keyType !== "hospital_manager") {
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

  async getCode({ offset = 0, limit = 16, name }) {
    const whereQuery = {};
    name && (whereQuery.name = name);
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
    doctorId,
    current = "current",
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
    doctorId && (whereQueryDoctor.id = doctorId);

    healthFacilityId && (whereQueryWorking.healthFacilityId = healthFacilityId);

    workingId && (whereQueryWorking.id = workingId);

    if (current == "current") {
      whereQueryWorking[Op.or] = [
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

    const docs = await db.Working.findAndCountAll({
      raw: true,
      offset,
      limit,
      order: [["createdAt", "desc"]],
      nest: true,
      where: whereQueryWorking,
      include: [
        {
          model: db.Staff,
          where: whereQueryDoctor,
          include: [db.AcademicDegree, db.Specialist],
        },
      ],
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

  // [GET] /check-up/health-record
  async getRecordCheckUp({
    date,
    staffId,
    id,
    bookingId,
    limit = 10,
    offset = 0,
  }) {
    // chua check co staffId
    if (staffId) {
      const workingDoctor = await this.getDoctorWorking({ doctorId: staffId });
      const workingId = workingDoctor?.data?.rows?.[0].id;

      const results = {};
      if (workingId) {
        // Check where check up
        const workRoom = await workServices.getWorkRoomFromWorking({
          workingId,
        });
        if (workRoom) {
          results.workRoom = workRoom;
          const healthExamSchedules = await workServices.getHealthExamSchedule({
            workingId,
            date: date,
            raw: true,
          });
          // asdsa
          results.schedules = healthExamSchedules.data;
          return {
            statusCode: 0,
            msg: "Lấy thành công.",
            data: results,
          };
        } else {
          return {
            statusCode: 2,
            msg: "Không tìm nơi khám bệnh",
          };
        }
      } else {
        return {
          statusCode: 1,
          msg: "Không tìm thấy bác sỉ",
        };
      }
    }

    const whereHealthRecord = {};
    if (id) {
      whereHealthRecord.id = id;
    }
    if (bookingId) {
      whereHealthRecord.bookingId = bookingId;
    }

    // get health-record
    const healthRecord = await db.HealthRecord.findAndCountAll({
      raw: true,
      offset,

      limit,
      where: whereHealthRecord,
      order: [["createdAt", "desc"]],
      nest: true,
      include: [db.Patient, db.Booking],
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...healthRecord,
        limit: limit,
        offset: offset,
      },
    };
  }

  // [POST] /check-up/health-record
  async createHealthRecord({ bookingId, patientId }) {
    // check healthRecord
    const healthRecordExist = await db.HealthRecord.findOne({
      where: {
        bookingId: bookingId,
      },
      raw: true,
    });

    if (healthRecordExist) {
      return {
        statusCode: 404,
        msg: `Lịch đã được tạo.`,
        data: healthRecordExist,
      };
    }

    // check booking
    const bookingDoc = await db.Booking.findOne({
      where: {
        id: bookingId,
      },
      raw: true,
    });

    if (!bookingDoc) {
      return {
        statusCode: 404,
        msg: `Không tìm thấy lịch hẹn này ${bookingId}.`,
      };
    }

    // check patient
    const patientDoc = await db.Patient.findOne({
      where: {
        id: patientId,
      },
      raw: true,
    });

    if (!patientDoc) {
      return {
        statusCode: 404,
        msg: `Không tìm thấy bệnh nhân này ${patientId}.`,
      };
    }

    // check code
    const codeDoc = await db.Code.findOne({
      where: {
        name: "HealthRecord",
      },
    });

    if (!codeDoc) {
      return {
        statusCode: 2,
        msg: `Không tin thấy trạng thái - HR1.`,
      };
    }

    // create health-record
    const doc = await db.HealthRecord.create({
      bookingId,
      patientId,
      statusCode: "HR1",
    });

    if (doc) {
      return {
        statusCode: 0,
        msg: "Tạo phiếu thành công.",
        data: doc,
      };
    } else {
      return {
        statusCode: 1,
        msg: "Đã có lỗi xảy ra, vui lòng thử lại!",
      };
    }
  }

  // [POST] /check-up/health-record
  async editStatusBooking({ statusId, bookingId }) {
    const codeDoc = await db.Code.findOne({
      where: {
        key: statusId,
      },
      raw: true,
    });

    if (!codeDoc) {
      return {
        statusCode: 2,
        msg: `Không tin thấy trạng thái ${statusId}.`,
      };
    }
    const doc = await db.Booking.update(
      {
        status: statusId,
      },
      {
        where: {
          id: bookingId,
        },
      }
    );

    return {
      statusCode: 0,
      msg: "Cập nhật thành công.",
    };
  }

  // [PATCH] /check-up/health-record
  async editHealthRecord({ statusId, healthRecordId, diagnosis, note }) {
    const dataUpdate = {};
    if (statusId) {
      const codeDoc = await db.Code.findOne({
        where: {
          key: statusId,
        },
        raw: true,
      });

      if (!codeDoc) {
        return {
          statusCode: 2,
          msg: `Không tin thấy trạng thái ${statusId}.`,
        };
      }
      dataUpdate.statusCode = statusId;
    }
    if (diagnosis) {
      dataUpdate.diagnosis = diagnosis;
    }
    if (note) {
      dataUpdate.note = note;
    }
    const doc = await db.HealthRecord.update(
      {
        ...dataUpdate,
      },
      {
        where: {
          id: healthRecordId,
        },
      }
    );

    if (doc[0] > 0) {
      return {
        statusCode: 0,
        msg: diagnosis || note ? "Đã lưu phiếu" : "Cập nhật thành công.",
      };
    } else {
      return {
        statusCode: 0,
        msg: diagnosis || note ? "Đã lưu phiếu" : "Cập nhật thành công.",
      };
    }
  }

  // [POST] /check-up/health-record/done
  async editHealthRecordDone({
    id,
    diagnosis,
    note,
    emailDestination,
    sendPrescriptionDetails,
    sendhHospitalService,
    files,
  }) {
    const dataUpdate = {};
    const codeDoc = await db.Code.findOne({
      where: {
        key: "HR4",
      },
      raw: true,
    });

    if (!codeDoc) {
      return {
        statusCode: 2,
        msg: `Không tin thấy trạng thái [HR4] đã khám.`,
      };
    }

    dataUpdate.statusCode = "HR4";
    if (diagnosis) {
      dataUpdate.diagnosis = diagnosis;
    }
    console.log("\n\n\nsdsadsa---");
    if (note) {
      dataUpdate.note = note;
    }
    await db.HealthRecord.update(
      {
        ...dataUpdate,
      },
      {
        where: {
          id,
        },
      }
    );

    // healthrecord
    const healthRecordDoc = await db.HealthRecord.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (!healthRecordDoc) {
      return {
        statusCode: 500,
        msg: "Lỗi lấy thông tin vui lòng thử lại.",
      };
    }

    // get healthRecord
    const healthRecord = await this.getBooking({
      bookingId: healthRecordDoc.bookingId,
    });
    // send email
    const infoHealthRecord = healthRecord?.data?.rows?.[0];

    if (!infoHealthRecord) {
      return {
        statusCode: 500,
        msg: "Lỗi lấy thông tin vui lòng thử lại.",
      };
    }
    const workRoom = await workServices.getWorkRoomFromWorking({
      workingId: infoHealthRecord?.booking?.HealthExaminationSchedule.workingId,
    });
    // const replacements = {
    //   name: bookingFilter.PatientProfile.fullName,
    //   time: bookingFilter.HealthExaminationSchedule.TimeCode.value,
    //   date: moment(bookingFilter.HealthExaminationSchedule.date).format("L"),
    //   doctor: bookingFilter.HealthExaminationSchedule.Working.Staff.fullName,
    //   location: `${bookingFilter.HealthExaminationSchedule.Working.HealthFacility.name}`,
    // };\
    try {
      const title =
        "KẾT QUẢ KHÁM BỆNH Ở " +
        infoHealthRecord?.booking?.HealthExaminationSchedule?.Working?.HealthFacility?.name
          ?.trim()
          .toLocaleUpperCase();
      const replacements = {
        name: infoHealthRecord?.booking?.PatientProfile?.fullName
          ?.trim()
          .toLocaleUpperCase(),
        date: moment(
          new Date(infoHealthRecord?.booking?.HealthExaminationSchedule?.date)
        ).format("L"),
        time: infoHealthRecord?.booking?.HealthExaminationSchedule?.TimeCode
          ?.value,
        doctor:
          infoHealthRecord?.booking?.HealthExaminationSchedule?.Working?.Staff
            ?.fullName,
        room: workRoom?.ClinicRoomRoomNumber,
        location:
          infoHealthRecord?.booking?.HealthExaminationSchedule?.Working
            ?.HealthFacility?.address,
        diagnosis: infoHealthRecord?.healthRecord?.diagnosis,
        note: infoHealthRecord?.healthRecord?.note,
      };

      const __dirname = path.resolve();
      const srcHtml = "/src/views/template/email_result_booking.html";
      const filePath = path.join(__dirname, srcHtml);
      const filePdfs = files.map((f) => ({
        filename: f.originalname,
        content: f.buffer,
      }));

      const data = await sendEmail({
        subject: title,
        receiveEmail: emailDestination || infoHealthRecord?.Patient?.email,
        replacements: replacements,
        srcHtml: filePath,
        fileAttachments: filePdfs,
      });

      return { statusCode: 200, msg: "Hoàn tất khám", data: data };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        msg: error?.message || "Lỗi lấy thông tin vui lòng thử lại.",
      };
    }
  }

  // [GET]
  async getChartRevenue({ staffId, year }) {
    const docs = await db.HealthRecord.findAll({
      raw: true,
      where: {
        statusCode: {
          [Op.eq]: "S3",
        },
      },
      include: [
        {
          model: db.Booking,
          where: {
            [Op.and]: Sequelize.where(
              Sequelize.fn("date_part", "year", Sequelize.col("createdAt")),
              year
            ),
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
      nest: true,
    });

    const healthRecord = docs.filter(
      (doc) => doc.Booking?.HealthExaminationSchedule?.Working?.staffId !== null
    );
    const endData = healthRecord.map(async (record) => {
      const workRoomDoc = await db.WorkRoom.findOne({
        raw: true,
        where: {
          applyDate: {
            [Op.lte]: record.Booking.createdAt,
          },
        },
        include: [
          {
            model: db.Working,
            where: {
              id: record.Booking.HealthExaminationSchedule.Working.id,
            },
          },
        ],
        order: [["applyDate", "desc"]],
        nest: true,
      });
      return {
        workRoom: workRoomDoc,
        ...record,
      };
    });
    const data = await Promise.all(endData);
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    data.map((r) => {
      const month = new Date(r.workRoom.Working.createdAt).getMonth();
      array[month] += r.workRoom.checkUpPrice;
    });

    return {
      statusCode: 0,
      msg: "ok",
      data: array,
    };
  }

  async getChartAccount({ year }) {
    const docs = await db.User.findAll({
      raw: true,
      where: {
        [Op.and]: Sequelize.where(
          Sequelize.fn("date_part", "year", Sequelize.col("createdAt")),
          year
        ),
      },
    });

    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    docs.map((r) => {
      const month = new Date(r.createdAt).getMonth();
      array[month] += 1;
    });

    return {
      statusCode: 0,
      msg: "ok",
      data: array,
    };
  }

  async getChartRecord({ year }) {
    const docs = await db.HealthRecord.findAll({
      raw: true,
      include: [
        {
          model: db.Booking,
          where: {
            [Op.and]: Sequelize.where(
              Sequelize.fn("date_part", "year", Sequelize.col("createdAt")),
              year
            ),
          },
          include: [
            {
              model: db.HealthExaminationSchedule,
            },
          ],
        },
      ],
      nest: true,
    });
    // return {
    //   statusCode: 0,
    //   data: docs,
    // };
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const arrayCancel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    docs.map((r) => {
      const month = new Date(
        r.Booking.HealthExaminationSchedule.date
      ).getMonth();
      if (r.statusCode == "S3") {
        array[month] += 1;
      } else {
        arrayCancel[month] += 1;
      }
    });

    return {
      statusCode: 0,
      msg: "ok",
      data: {
        success: array,
        fail: arrayCancel,
      },
    };
  }
  async deletePatient({ id }) {
    // console.log("\n\nid\n\n", id);
    const data = await db.Patient.destroy({
      where: {
        id,
      },
    });
    if (data > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: data,
      };
    }
    return {
      statusCode: 2,
      msg: "Tài liệu này chưa được xóa hoặc không tồn tại.",
    };
  }
  async createOrUpdatePatient(data, option) {
    const { copyFromPatientProfileId } = option;
    let patientProfileDocCopy;
    if (copyFromPatientProfileId) {
      patientProfileDocCopy = await db.PatientProfile.findOne({
        where: {
          id: copyFromPatientProfileId,
        },
        raw: true,
      });

      if (!patientProfileDocCopy) {
        return {
          statusCode: 400,
          msg: `Không tìm thấy hồ sơ bệnh nhận này.`,
        };
      }
    }

    const workingDoc = await workServices.getWorking({
      doctorId: data.staffId,
    });

    if (!workingDoc?.statusCode == 0 && !workingDoc.data.rows[0]) {
      return {
        statusCode: 400,
        msg: "Không tìm thấy công tác của của nhân viên này.",
      };
    }
    const healthFacilityId = workingDoc?.data?.rows?.[0].healthFacilityId;

    // Create a new Account
    if (!data.id) {
      //Check create new from cpy
      let objectHandle = {};
      if (copyFromPatientProfileId) {
        objectHandle = {
          fullName: patientProfileDocCopy.fullName,
          phone: patientProfileDocCopy.phone,
          address: patientProfileDocCopy.address,
          profession: patientProfileDocCopy.profession,
          email: patientProfileDocCopy.email,
          birthDay: patientProfileDocCopy.birthDay,
          gender: patientProfileDocCopy.gender,
          cccd: patientProfileDocCopy.cccd,
          nation: patientProfileDocCopy.nation,
          addressCode: patientProfileDocCopy.addressCode,
          healthFacilityId: healthFacilityId,
        };
      } else {
        objectHandle = {
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
          healthFacilityId: healthFacilityId,
        };
      }

      // Check if the profile has already been created
      const patientProfileExisted = await db.Patient.findOne({
        where: {
          cccd: objectHandle.cccd,
          healthFacilityId: healthFacilityId,
        },
        include: [db.HealthFacility],
        nest: true,
        raw: true,
      });

      if (patientProfileExisted)
        return {
          statusCode: 1,
          msg: `Bệnh nhân này đã tồn tại ở ${patientProfileExisted?.HealthFacility?.name}.`,
          data: patientProfileExisted,
        };

      const patientProfileDoc = await db.Patient.create(objectHandle);

      if (patientProfileDoc) {
        return {
          statusCode: 0,
          msg: "Tạo bệnh nhân thành công.",
          data: patientProfileDoc,
        };
      } else {
        return {
          statusCode: 4,
          msg: "Lỗi tạo bệnh nhân.",
        };
      }
    } else {
      // Update patient profile
      // Check if the profile has already been created

      let objectHandle = {};
      if (copyFromPatientProfileId) {
        objectHandle = {
          fullName: patientProfileDocCopy.fullName,
          phone: patientProfileDocCopy.phone,
          address: patientProfileDocCopy.address,
          profession: patientProfileDocCopy.profession,
          email: patientProfileDocCopy.email,
          birthDay: patientProfileDocCopy.birthDay,
          gender: patientProfileDocCopy.gender,
          cccd: patientProfileDocCopy.cccd,
          nation: patientProfileDocCopy.nation,
          addressCode: patientProfileDocCopy.addressCode,
          healthFacilityId: healthFacilityId,
        };
      } else {
        objectHandle = {
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
          healthFacilityId: healthFacilityId,
        };
      }

      const patientProfileExisted = await db.Patient.findOne({
        where: {
          cccd: objectHandle.cccd,
          healthFacilityId: healthFacilityId,
          id: {
            [Op.not]: data.id,
          },
        },
        nest: true,
        include: [db.HealthFacility],
        raw: true,
      });

      if (patientProfileExisted)
        return {
          statusCode: 1,
          msg: `Bệnh nhân này đã tồn tại ở ${patientProfileExisted?.HealthFacility?.name}.`,
          data: patientProfileExisted,
        };

      const countUpdated = await db.Patient.update(objectHandle, {
        where: {
          id: data.id,
        },
      });

      if (countUpdated[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật thành công bệnh nhân.",
        };
      } else {
        return {
          statusCode: 4,
          msg: "Không tìm thấy bệnh nhân.",
        };
      }
    }
  }

  // Patient
  async getPatient({
    offset = 0,
    limit = 10,
    patientId,
    name,
    healthFacilityId,
    cccd,
    staffId,
  }) {
    if (staffId) {
      const workingDoc = await workServices.getWorking({
        doctorId: staffId,
      });

      if (!workingDoc?.statusCode == 0 && !workingDoc?.data?.rows[0]) {
        return {
          statusCode: 400,
          msg: "Không tìm thấy công tác của của nhân viên này.",
        };
      }
      healthFacilityId = workingDoc?.data?.rows?.[0].healthFacilityId;
    }

    const wherePatient = {};

    if (patientId) {
      wherePatient.id = patientId;
    }
    if (name) {
      wherePatient.fullName = name;
    }
    if (healthFacilityId) {
      wherePatient.healthFacilityId = healthFacilityId;
    }

    if (cccd) {
      wherePatient.cccd = cccd;
    }

    const docs = await db.Patient.findAndCountAll({
      raw: true,
      where: wherePatient,
      offset,
      limit,
      include: [db.HealthFacility],
      order: [["createdAt", "desc"]],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...docs,
      },
    };
  }

  // Service Details
  async createOrUpdateServiceDetails({
    id,
    descriptionResult,
    healthRecordId,
    hospitalServiceId,
  }) {
    // create
    if (!id) {
      // check data valid

      const [healthRecordDoc, hospitalServicesDoc] = await Promise.all([
        db.HealthRecord.findOne({
          where: {
            id: healthRecordId,
          },
          raw: true,
        }),
        db.HospitalService.findOne({
          where: {
            id: hospitalServiceId,
          },
          raw: true,
        }),
      ]);

      if (!healthRecordDoc || !hospitalServicesDoc) {
        return {
          statusCode: 404,
          msg: "Không tìm phiếu khám hoặc dịch vụ ở bệnh viện này.",
        };
      }

      // check existed
      const serviceDetailsExisted = await db.ServiceDetail.findOne({
        where: {
          healthRecordId,
          hospitalServiceId,
        },
        raw: true,
      });

      if (serviceDetailsExisted) {
        return {
          statusCode: 404,
          msg: "Dịch vụ đã thêm.",
          data: serviceDetailsExisted,
        };
      }

      // create
      const serviceDetailsDoc = await db.ServiceDetail.create({
        healthRecordId,
        hospitalServiceId,
      });

      if (serviceDetailsDoc) {
        return {
          statusCode: 200,
          msg: "Thêm dịch vụ thành công.",
          data: serviceDetailsDoc,
        };
      }

      // update
    } else {
      const serviceDetailsUpdate = await db.ServiceDetail.update(
        {
          descriptionResult,
        },
        {
          where: {
            id,
          },
        }
      );
      if (serviceDetailsUpdate[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật kết quả thành công.",
        };
      } else {
        return {
          statusCode: 400,
          msg: "Không tìm thấy dịch vụ.",
        };
      }
    }

    return {
      statusCode: 404,
      msg: "Đã có lỗi xảy ra, vui lòng thử lại.",
    };
  }

  async getServiceDetails({ id, healthRecordId, hospitalServiceId }) {
    const where = {};
    if (id) {
      where.id = id;
    }
    if (healthRecordId) {
      where.healthRecordId = healthRecordId;
    }
    if (hospitalServiceId) {
      where.hospitalServiceId = hospitalServiceId;
    }

    const docs = await db.ServiceDetail.findAll({
      raw: true,
      where: where,
      include: [
        db.HealthRecord,
        {
          model: db.HospitalService,
          include: [db.ExaminationService],
        },
      ],
      order: [["createdAt", "desc"]],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: docs,
    };
  }

  async deleteServiceDetails({ id }) {
    const data = await db.ServiceDetail.destroy({
      where: {
        id,
      },
    });
    if (data > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: data,
      };
    }
    return {
      statusCode: 2,
      msg: "Tài liệu này chưa được xóa hoặc không tồn tại.",
    };
  }

  // Prescription Details
  async createOrUpdatePrescriptionDetails({
    id,
    cedicineId,
    healthRecordId,
    quantity,
    usage,
    unit,
    morning,
    noon,
    afterNoon,
    evening,
  }) {
    // create
    if (!id) {
      // check data valid
      const [cedicineDoc, healthRecordDoc] = await Promise.all([
        db.Cedicine.findOne({
          where: {
            id: cedicineId,
          },
          raw: true,
        }),
        db.HealthRecord.findOne({
          where: {
            id: healthRecordId,
          },
          raw: true,
        }),
      ]);

      if (!cedicineDoc || !healthRecordDoc) {
        return {
          statusCode: 404,
          msg: "Không tìm phiếu khám hoặc thuốc.",
        };
      }

      // check existed
      const serviceDetailsExisted = await db.PrescriptionDetail.findOne({
        where: {
          cedicineId,
          healthRecordId,
        },
        raw: true,
      });

      if (serviceDetailsExisted) {
        return {
          statusCode: 404,
          msg: "Thuốc đã thêm.",
          data: serviceDetailsExisted,
        };
      }

      // create
      const serviceDetailsDoc = await db.PrescriptionDetail.create({
        cedicineId,
        healthRecordId,
        quantity,
        usage,
        unit,
        morning,
        noon,
        afterNoon,
        evening,
      });

      if (serviceDetailsDoc) {
        return {
          statusCode: 200,
          msg: "Thêm thuốc thành công.",
          data: serviceDetailsDoc,
        };
      }

      // update
    } else {
      // check existed
      const serviceDetailsExisted = await db.PrescriptionDetail.findOne({
        where: {
          cedicineId,
          healthRecordId,
          id: {
            [Op.not]: id,
          },
        },
        include: [db.Cedicine],
        raw: true,
        nest: true,
      });

      if (serviceDetailsExisted) {
        return {
          statusCode: 201,
          msg:
            serviceDetailsExisted.Cedicine.name +
            " đã được thêm vào, hãy cập nhật thuốc này.",
        };
      }

      const serviceDetailsUpdate = await db.PrescriptionDetail.update(
        {
          cedicineId,
          healthRecordId,
          quantity,
          usage,
          unit,
          morning,
          noon,
          afterNoon,
          evening,
        },
        {
          where: {
            id,
          },
        }
      );
      if (serviceDetailsUpdate[0] > 0) {
        return {
          statusCode: 200,
          msg: "Đã cập nhật đơn thuốc.",
        };
      } else {
        return {
          statusCode: 400,
          msg: "Không tìm thấy loại thuốc này.",
        };
      }
    }

    return {
      statusCode: 404,
      msg: "Đã có lỗi xảy ra, vui lòng thử lại.",
    };
  }

  async getPrescriptionDetails({ id, healthRecordId, cedicineId }) {
    const where = {};
    if (id) {
      where.id = id;
    }
    if (healthRecordId) {
      where.healthRecordId = healthRecordId;
    }
    if (cedicineId) {
      where.cedicineId = cedicineId;
    }

    const docs = await db.PrescriptionDetail.findAll({
      raw: true,
      where: where,
      include: [
        db.HealthRecord,
        {
          model: db.Cedicine,
        },
      ],
      order: [["createdAt", "desc"]],
      nest: true,
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: docs,
    };
  }

  async deletePrescriptionDetails({ id }) {
    const data = await db.PrescriptionDetail.destroy({
      where: {
        id,
      },
    });
    if (data > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: data,
      };
    }
    return {
      statusCode: 2,
      msg: "Tài liệu này chưa được xóa hoặc không tồn tại.",
    };
  }
  async calculatorReviewDoctor({ staffId }) {
    const whereQueryReview = {};
    if (staffId) {
      whereQueryReview.staffId = staffId;
    }

    const revs = await db.Review.findAll({
      raw: true,
      where: whereQueryReview,
      order: [["createdAt", "desc"]],
      include: [db.Staff, db.User],
      nest: true,
    });
    const sumReview = revs.reduce((init, value) => {
      return init + value.starNumber;
    }, 0);
    console.log("\n\n\n\nsumReviewsumReview\n\n", sumReview);
    console.log("revs\n\n", revs.length);

    const avg = sumReview / (revs.length || 1);

    const star5 = revs.filter((re) => re.starNumber == 5).length;
    const star4 = revs.filter((re) => re.starNumber == 4).length;
    const star3 = revs.filter((re) => re.starNumber == 3).length;
    const star2 = revs.filter((re) => re.starNumber == 2).length;
    const star1 = revs.filter((re) => re.starNumber == 1).length;

    const views = {
      countReview: revs.length,
      avg: avg,
      star: {
        star5: star5,
        star4: star4,
        star3: star3,
        star2: star2,
        star1: star1,
      },
    };

    return views;
  }
}

export default new StaffServices();
