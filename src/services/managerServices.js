import { Op } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class ManagerServices {
  // Hospital Services
  async createOrUpdateHospitalServices({
    healthFacilityId,
    examinationServiceId,
    price,
    isAcctive,
  }) {
    const [healthFacilityDoc, examinationServiceDoc] = await Promise.all([
      db.HealthFacility.findByPk(healthFacilityId, { raw: true }),
      db.ExaminationService.findByPk(examinationServiceId),
    ]);

    if (!healthFacilityDoc || !examinationServiceDoc) {
      return {
        statusCode: 400,
        msg: "Không tìm thấy Cơ cơ sở y tế hoặc Dịch vụ này.",
      };
    }

    const [hospitalManagerExist, created] =
      await db.HospitalService.findOrCreate({
        where: { healthFacilityId, examinationServiceId },
        defaults: {
          healthFacilityId,
          examinationServiceId,
          price,
          isAcctive: true,
        },
      });
    if (created) {
      return {
        statusCode: 200,
        msg: "Thêm dịch vụ thành công.",
        data: hospitalManagerExist,
      };
    }
    // update
    const doc = await db.HospitalService.update(
      {
        price,
        isAcctive,
      },
      {
        where: {
          healthFacilityId,
          examinationServiceId,
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

  async getHospitalServices({
    offset = 0,
    limit = 3,
    name,
    id,
    examinationServiceName,
    healthFacilityId,
  }) {
    const whereQuery = {};
    const whereQueryService = {};
    // name &&
    //   (whereQuery.name = {
    //     [Op.substring]: name,
    //   });
    if (examinationServiceName) {
      whereQueryService.name = examinationServiceName;
    }
    if (id) {
      whereQuery.id = id;
    }
    if (healthFacilityId) {
      whereQuery.healthFacilityId = healthFacilityId;
    }

    const docs = await db.HospitalService.findAndCountAll({
      raw: true,
      offset,
      limit,
      where: whereQuery,
      nest: true,
      // order: [["name", "asc"]],
      include: [
        db.HealthFacility,
        {
          model: db.ExaminationService,
          where: whereQueryService,
        },
      ],
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

  async deleteHospitalServices({ healthFacilityId, examinationServiceId }) {
    // check hospital have service
    //chua done

    // const hospitalServiceExisted = await db.HospitalService.findOne({
    //   raw: true,
    //   where: {
    //     healthFacilityId,
    //     examinationServiceId,
    //   },
    // });

    // if (hospitalServiceExisted) {
    //   return {
    //     statusCode: 400,
    //     msg: "Dịch vụ này đang được dùng.",
    //   };
    // }

    const docs = await db.HospitalService.destroy({
      where: { healthFacilityId, examinationServiceId },
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
}

export default new ManagerServices();
