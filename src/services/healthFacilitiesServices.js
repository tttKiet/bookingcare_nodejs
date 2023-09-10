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

  // Get All Health Facilities
  async getHealthFacilities({
    limit = 10,
    offset = 0,
    name,
    address,
    typeHealthFacility,
  }) {
    const whereQuery = {};
    const whereType = {};

    name &&
      (whereQuery.name = {
        [Op.substring]: name,
      });

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
      const isExited = imageOldKeys.includes(key);
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
}

export default new healthFacilitiesServices();
