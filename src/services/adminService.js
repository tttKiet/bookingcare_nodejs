import db from "../app/models";
import { Op } from "sequelize";

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
}

export default new adminService();
