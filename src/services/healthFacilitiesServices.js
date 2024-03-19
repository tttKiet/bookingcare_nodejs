import { Op } from "sequelize";
import db from "../app/models";
import { v4 as uuidv4 } from "uuid";
import { deleteImagesFromS3 } from "../untils";

class healthFacilitiesServices {
  // create type health facility
  async createTypeHealthFacility({ name }) {
    const existedName = await db.TypeHealthFacility.findOne({
      where: {
        name: name,
      },
      raw: true,
    });
    if (existedName) {
      return {
        statusCode: 2,
        msg: "Loại bệnh viện này đã tồn tại.",
      };
    }
    const typeHealthFacilityDoc = await db.TypeHealthFacility.create({ name });
    if (typeHealthFacilityDoc) {
      return {
        statusCode: 0,
        msg: "Tạo thành công.",
      };
    }

    return {
      statusCode: 1,
      msg: "Tạo thất bại.",
    };
  }

  // get all type health facilities
  async getTypeHealthFacilites() {
    const typeHealthFacilityDocs = await db.TypeHealthFacility.findAll({
      raw: true,
      order: [["createdAt", "desc"]],
    });
    return {
      statusCode: 0,
      msg: "Lấy thành công.",
      data: typeHealthFacilityDocs,
    };
  }

  // update all type health facility
  async updateTypeHealthFacilites({ id, name }) {
    const existedName = await db.TypeHealthFacility.findOne({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
      raw: true,
    });
    if (existedName) {
      return {
        statusCode: 2,
        msg: "Loại bệnh viện này đã tồn tại.",
      };
    }
    const typeHealthFacilityDoc = await db.TypeHealthFacility.update(
      { name },
      {
        where: { id },
        // raw: true,
      }
    );
    if (typeHealthFacilityDoc?.[0] > 0) {
      return {
        statusCode: 0,
        msg: "Đã lưu thay đổi.",
        data: typeHealthFacilityDoc,
      };
    } else {
      return {
        statusCode: 3,
        msg: "Thay đổi chưa được lưu.",
        data: typeHealthFacilityDoc,
      };
    }
  }

  // delete all type health facility
  async deleteTypeHealthFacilites({ id }) {
    const typeHealthFacilityDocs = await db.TypeHealthFacility.destroy({
      where: {
        id,
      },
    });
    if (typeHealthFacilityDocs > 0) {
      return {
        statusCode: 0,
        msg: "Xóa thành công.",
        data: typeHealthFacilityDocs,
      };
    }
    return {
      statusCode: 2,
      msg: "Loại này chưa được xóa hãy không tồn tại.",
    };
  }

  // delete all type health facility
  async getInfoDashboardTypeAndHealthFacilites() {
    const typeHealthFacilityDocsCount =
      await db.TypeHealthFacility.findAndCountAll({
        // offset: 4, => start  pagination
        // limit: 0,
      });

    const healthFacilityDocsCount = await db.HealthFacility.findAndCountAll({
      // offset: 4, => start  pagination
      // limit: 0,
    });
    if (typeHealthFacilityDocsCount) {
      return {
        statusCode: 0,
        msg: "Lấy thành công.",
        data: {
          type: typeHealthFacilityDocsCount,
          healthFacilities: healthFacilityDocsCount,
        },
      };
    }
    return {
      statusCode: 2,
      msg: "Lấy thông tin thất bại.",
    };
  }

  // Create Health Facility
  async createHealthFacility({
    name,
    address,
    phone,
    email,
    typeHealthFacilityId,
    fileUrls,
  }) {
    const existedType = await db.TypeHealthFacility.findOne({
      where: {
        id: typeHealthFacilityId,
      },
      raw: true,
    });
    if (!existedType) {
      return {
        statusCode: 2,
        msg: "Loại bệnh viện này không tồn tại.",
      };
    }
    const typeHealthFacilityDoc = await db.HealthFacility.create({
      name,
      address,
      phone,
      email,
      typeHealthFacilityId,
      images: fileUrls,
    });
    if (typeHealthFacilityDoc) {
      return {
        statusCode: 0,
        msg: "Tạo thành công.",
      };
    }

    return {
      statusCode: 1,
      msg: "Tạo thất bại.",
    };
  }

  async getHealthFacilityWithEmail({ offset = 0, limit = 3, email }) {
    const whereQuery = {};
    email &&
      (whereQuery.email = {
        [Op.substring]: email,
      });

    const healthFacilitiesDocs = await db.HealthFacility.findAndCountAll({
      raw: true,
      offset,
      limit,
      nest: true,
      where: whereQuery,
      include: [
        {
          model: db.TypeHealthFacility,
          attributes: ["name"],
        },
      ],
      order: [["createdAt", "desc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: {
        ...healthFacilitiesDocs,
        limit: limit,
        offset: offset,
      },
    };
  }

  // Get All Health Facilities
  async getHealthFacilities({
    limit = 10,
    offset = 0,
    name,
    address,
    typeHealthFacility,
    typeHealthFacilityId,
    searchNameOrEmail,
    id,
  }) {
    const whereQuery = {};
    const whereType = {};

    typeHealthFacilityId?.length > 0 &&
      (whereType.id = {
        [Op.in]: typeHealthFacilityId,
      });

    name &&
      (whereQuery.name = {
        [Op.substring]: name,
      });
    id && (whereQuery.id = id);
    searchNameOrEmail &&
      (whereQuery[Op.or] = [
        {
          name: {
            [Op.substring]: searchNameOrEmail,
          },
        },
        {
          email: {
            [Op.substring]: searchNameOrEmail,
          },
        },
      ]);

    address &&
      (whereQuery.address = {
        [Op.substring]: address,
      });

    typeHealthFacility && (whereType["name"] = typeHealthFacility);
    const healthFacilitiesDocs = await db.HealthFacility.findAndCountAll({
      raw: true,
      offset,
      limit,
      nest: true,
      where: whereQuery,
      include: [
        {
          model: db.TypeHealthFacility,
          attributes: ["name"],
          where: whereType,
        },
      ],
      order: [["createdAt", "desc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thành công",
      data: healthFacilitiesDocs,
    };
  }
  // Update Health Facility
  async updateHealthFacility({
    id,
    name,
    address,
    phone,
    email,
    typeHealthFacilityId,
    fileUrls,
    imageOldKeys, // Image no change
  }) {
    const existedType = await db.TypeHealthFacility.findOne({
      where: {
        id: typeHealthFacilityId,
      },
      raw: true,
    });
    if (!existedType) {
      return {
        statusCode: 2,
        msg: "Loại bệnh viện này không tồn tại.",
      };
    }

    const healthFacilityDoc = await db.HealthFacility.findOne({
      where: { id: id },
    });

    if (!healthFacilityDoc) {
      return {
        statusCode: 2,
        msg: "Không tìm thấy cơ sở này.",
      };
    }
    const imgOlds = healthFacilityDoc.dataValues.images;

    // a,b,c
    // a

    const imgNoChange = imgOlds.filter((imgOld) => {
      const key = imgOld.split("/").pop();
      const isExited = imageOldKeys?.includes(key) || false;
      return isExited;
    });

    const imgWillDelete = imgOlds.filter((i) => !imgNoChange.includes(i));

    const imgWillDeleteKeys = imgWillDelete.map((imgOld) => {
      return {
        Key: imgOld.split("/").pop(),
      };
    });

    imgWillDeleteKeys.length > 0 && deleteImagesFromS3(imgWillDeleteKeys);

    await healthFacilityDoc.update({
      name,
      address,
      phone,
      email,
      typeHealthFacilityId,
      images: [...imgNoChange, ...fileUrls],
    });
    const ok = await healthFacilityDoc.save();

    if (ok) {
      return {
        statusCode: 0,
        msg: "Cập nhật thành công.",
      };
    }

    return {
      statusCode: 1,
      msg: "Cập nhật thất bại.",
    };
  }

  // Delete a health facility
  async deleteHealthFacility({ id }) {
    const healthFacilityDoc = await db.HealthFacility.findOne({
      where: { id: id },
    });

    // Delete image on clound s3
    const imgOlds = healthFacilityDoc.dataValues.images;
    const imageOlds = imgOlds.map((imgLink) => {
      const key = imgLink.split("/").pop();
      return {
        Key: key,
      };
    });

    imageOlds.length > 0 && deleteImagesFromS3(imageOlds);

    // Delete soft updated aboult Luan van ********************************
    // await healthFacilityDoc.destroy();

    // Would will delete the record
    await healthFacilityDoc.destroy({ force: true });
    return {
      statusCode: 0,
      msg: "Đã xóa thành công.",
    };
  }

  // Create Update room
  async createOrUpdateRoom({
    oldRoomNumber,
    healthFacilityId,
    roomNumber,
    capacity,
  }) {
    // Check healthFacilityId exists
    const healthFacilityDoc = await db.HealthFacility.findByPk(
      healthFacilityId
    );

    if (!healthFacilityDoc) {
      return {
        statusCode: 4,
        msg: "Cơ sở y tế không tồn tại.",
      };
    }
    if (!oldRoomNumber) {
      // create room
      const roomDoc = await db.ClinicRoom.create({
        healthFacilityId,
        roomNumber,
        capacity,
      });

      if (roomDoc) {
        return {
          statusCode: 0,
          msg: "Tạo phòng khám thành công.",
          data: roomDoc,
        };
      } else {
        return {
          statusCode: 2,
          msg: "Tạo phòng khám thất bại.",
        };
      }
    } else {
      // Update room
      // Check if captacity less than workrooms
      const countWorkRoom = await db.WorkRoom.count({
        where: {
          ClinicRoomRoomNumber: oldRoomNumber,
          ClinicRoomHealthFacilityId: healthFacilityId,
        },
        group: ["workingId"],
      });
      if (capacity <= 0) {
        return {
          statusCode: 5,
          msg: "Sức chứa của phòng phải lớn hơn 0.",
        };
      }
      if (countWorkRoom.length > capacity) {
        return {
          statusCode: 4,
          msg: "Số bác sỉ được phân công khám hiện tại lớn hơn sức chứa của phòng.",
        };
      }
      await db.WorkRoom.update(
        {
          ClinicRoomRoomNumber: roomNumber,
        },
        {
          where: {
            ClinicRoomRoomNumber: oldRoomNumber,
            ClinicRoomHealthFacilityId: healthFacilityId,
          },
        }
      );

      const roomDoc = await db.ClinicRoom.update(
        {
          roomNumber,
          capacity,
        },
        {
          where: {
            roomNumber: oldRoomNumber,
            healthFacilityId,
          },
        }
      );

      if (roomDoc[0] > 0) {
        return {
          statusCode: 0,
          msg: "Cập nhật phòng khám thành công.",
        };
      } else {
        return {
          statusCode: 2,
          msg: "Cập nhật phòng khám thất bại.",
        };
      }
    }
  }

  // Get Room
  async getRoom({ limit = 10, offset = 0, healthFacilityId }) {
    const whereQuery = {};
    const whereType = {};
    healthFacilityId && (whereQuery.healthFacilityId = healthFacilityId);

    // typeHealthFacility && (whereType["name"] = typeHealthFacility);
    const ClinicRoomDocs = await db.ClinicRoom.findAndCountAll({
      raw: true,
      offset,
      limit,
      nest: true,
      where: whereQuery,
      include: [
        {
          model: db.HealthFacility,
          attributes: ["name"],
          where: whereType,
        },
      ],
      order: [["roomNumber", "asc"]],
    });

    return {
      statusCode: 0,
      msg: "Lấy thành công",
      data: ClinicRoomDocs,
    };
  }

  // Delete a room
  async deleteRoom({ roomNumber, healthFacilityId }) {
    // Check if workroom is already exists
    const workDoc = await db.WorkRoom.findOne({
      where: {
        ClinicRoomRoomNumber: roomNumber,
        ClinicRoomHealthFacilityId: healthFacilityId,
      },
    });
    if (workDoc) {
      return {
        statusCode: 2,
        msg: "Đã xóa thất bại. Tồn tại bác sỉ đang được phân công trong phòng này.",
      };
    }
    const count = await db.ClinicRoom.destroy({
      force: true,
      where: {
        roomNumber,
        healthFacilityId,
      },
    });
    if (count > 0) {
      return {
        statusCode: 0,
        msg: "Đã xóa thành công.",
      };
    } else {
      return {
        statusCode: 5,
        msg: "Xóa thất bại.",
      };
    }
  }
  // Create Health Facility
  async createOrUpdateSpecialist({
    id,
    name,
    descriptionDisease,
    descriptionDoctor,
  }) {
    const specialistDoc = await db.Specialist.findOrCreate({
      where: {
        id: id ? id : null,
      },
      defaults: {
        id: uuidv4(),
        name,
        descriptionDisease,
        descriptionDoctor,
      },
    });
    if (specialistDoc.length > 0 && specialistDoc[1]) {
      return {
        statusCode: 0,
        msg: `Tạo thành công.`,
        data: specialistDoc,
      };
    } else if (!specialistDoc[1]) {
      const updateSpecialistDoc = await db.Specialist.update(
        {
          name,
          descriptionDisease,
          descriptionDoctor,
        },
        {
          where: {
            id,
          },
        }
      );
      if (updateSpecialistDoc?.[0] > 0) {
        return {
          statusCode: 0,
          msg: `Cập nhật thành công.`,
          data: specialistDoc,
        };
      }
    }

    return {
      statusCode: 1,
      msg: "Tạo thất bại.",
    };
  }

  // Get All Specialist
  async getSpecialist({ offset = 0, limit = 100 }) {
    const specialistDoc = await db.Specialist.findAndCountAll({
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
  // Get Specialist
  async getSpecialistById({ id }) {
    const specialistDoc = await db.Specialist.findByPk(id);

    if (!specialistDoc) {
      return {
        statusCode: 2,
        msg: "Không tìm thấy tài liệu này.",
      };
    }
    return {
      statusCode: 0,
      msg: "Lấy thông tin thành công.",
      data: specialistDoc,
    };
  }

  // Delete Specialist
  async deleteSpecialist({ id }) {
    const specialistDoc = await db.Specialist.destroy({
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

  // Get rank
  async getRank() {
    const healthFacilityDocs = await db.HealthFacility.findAll({
      raw: true,
    });

    const resultPromise = healthFacilityDocs.map(async (h) => {
      const healthFacilityId = h.id;

      const docs = await db.HealthRecord.findAll({
        raw: true,
        where: {
          statusCode: {
            [Op.eq]: "S2",
          },
        },
        include: [
          {
            model: db.Booking,
            include: [
              {
                model: db.HealthExaminationSchedule,
                include: [
                  {
                    model: db.Working,
                    where: {
                      healthFacilityId,
                    },
                    include: [
                      {
                        model: db.HealthFacility,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        nest: true,
      });
      const dataHealthRecord = docs.filter(
        (d) => d.Booking?.HealthExaminationSchedule?.Working.id !== null
      );

      const endData = dataHealthRecord.map(async (record) => {
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

      return {
        ...h,
        data,
      };
    });

    const result = await Promise.all(resultPromise);

    const resultData = result.map((h) => {
      const total = h.data.reduce((init, value) => {
        return value.workRoom.checkUpPrice + init;
      }, 0);
      return {
        name: h.name,
        total: total,
      };
    });

    return {
      statusCode: 0,
      msg: "Lay thanh cong",
      data: resultData,
    };
  }

  // Create | Update Admin Manager Of Health Facility
  async createAdminHealthFacility({
    staffId,
    healthFacilityId,
    id,
    isAcctive,
  }) {
    // create
    if (!id) {
      const [healthFacilityDoc, staffDoc] = await Promise.all([
        db.HealthFacility.findByPk(healthFacilityId, { raw: true }),
        db.Staff.findByPk(staffId),
      ]);

      if (!healthFacilityDoc || !staffDoc) {
        return {
          statusCode: 400,
          msg: "Không tìm thấy Cơ cơ sở y tế hoặc nhân viên này.",
        };
      }
      const docExist = await db.HospitalManager.findOne({
        where: { staffId },
      });
      if (docExist) {
        return {
          statusCode: 400,
          msg: `Người này đã được thêm vào danh sách quản lý cho ${healthFacilityDoc.name}.`,
        };
      }
      const doc = await db.HospitalManager.create({
        staffId,
        healthFacilityId,
      });

      if (doc) {
        return {
          statusCode: 200,
          msg: "Thêm quản lý cơ sở y tế thành công.",
        };
      }

      return {
        statusCode: 500,
        msg: "Thêm quản lý cơ sở y tế thất bại, vui lòng thử lại.",
      };
    } else {
      // update
      const workDoc = await db.HospitalManager.update(
        {
          staffId,
          isAcctive,
        },
        {
          where: {
            id,
          },
        }
      );
      if (workDoc[0] > 0) {
        return {
          statusCode: 200,
          msg: "Cập nhật thành công.",
        };
      } else {
        return {
          statusCode: 400,
          msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này.",
        };
      }
    }
  }

  async getAdminHealthFacility({
    offset = 0,
    limit = 3,
    healthFacilityName,
    healthFacilityEmail,
  }) {
    const whereQuery = {};
    healthFacilityName &&
      (whereQuery.name = {
        [Op.substring]: healthFacilityName,
      });
    healthFacilityEmail &&
      (whereQuery.email = {
        [Op.substring]: healthFacilityEmail,
      });
    const healthFacilitieDocs = await db.HealthFacility.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["name", "asc"]],
    });

    const promises = healthFacilitieDocs.rows.map(async (h) => {
      const d = await db.HospitalManager.findAll({
        where: {
          healthFacilityId: h.id,
        },
        raw: true,
        nest: true,
        include: [
          {
            model: db.Staff,
          },
        ],
      });
      return {
        healthFacility: h,
        manager: d,
        managerCount: d.length,
      };
    });

    const docs = await Promise.all(promises);

    return {
      statusCode: 200,
      msg: "Lấy thông tin thành công.",
      data: {
        count: healthFacilitieDocs.count,
        rows: docs,
        offset,
        limit,
      },
    };
  }

  async deleteAdminHealthFacility({ id }) {
    const docs = await db.HospitalManager.destroy({
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
      msg: "Sắp xếp này chưa được xóa hay không tồn tại.",
    };
  }

  async getService({
    offset = 0,
    limit = 3,
    healthFacilityName,
    healthFacilityEmail,
  }) {
    const whereQuery = {};
    healthFacilityName &&
      (whereQuery.name = {
        [Op.substring]: healthFacilityName,
      });
    healthFacilityEmail &&
      (whereQuery.email = {
        [Op.substring]: healthFacilityEmail,
      });
    const healthFacilitieDocs = await db.HealthFacility.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      order: [["name", "asc"]],
    });

    const promises = healthFacilitieDocs.rows.map(async (h) => {
      const d = await db.HospitalService.findAll({
        where: {
          healthFacilityId: h.id,
        },
        raw: true,
        nest: true,
        include: [
          {
            model: db.ExaminationService,
          },
        ],
      });
      return {
        healthFacility: h,
        service: d,
        serviceCount: d.length,
      };
    });

    const docs = await Promise.all(promises);

    return {
      statusCode: 200,
      msg: "Lấy thông tin thành công.",
      data: {
        count: healthFacilitieDocs.count,
        rows: docs,
        offset,
        limit,
      },
    };
  }
}

export default new healthFacilitiesServices();
