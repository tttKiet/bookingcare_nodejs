import { Op } from "sequelize";
import db from "../app/models";

class healthFacilitiesServices {
  // create type health facility
  async createHealthFacility({ name }) {
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
  async getHealthFacilites() {
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
  async updateHealthFacilites({ id, name }) {
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
  async deleteHealthFacilites({ id }) {
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
        // limit: 2,
      });

    // const typeHealthFacilityDocsCount =
    //   await db..findAndCountAll({
    //     // offset: 4, => start  pagination
    //     // limit: 2,
    //   });
    if (typeHealthFacilityDocsCount) {
      return {
        statusCode: 0,
        msg: "Lấy thành công.",
        data: typeHealthFacilityDocsCount,
      };
    }
    return {
      statusCode: 2,
      msg: "Lấy thông tin thất bại.",
    };
  }
}

export default new healthFacilitiesServices();
