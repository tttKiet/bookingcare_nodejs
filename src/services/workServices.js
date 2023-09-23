import { Op, where } from "sequelize";
import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;
import moment from "moment";

class WorkServices {
  // Work
  async checkInsertWorking(startDate, endDate, staffId, id) {
    let workWhere = {};
    id &&
      (workWhere.id = {
        [Op.ne]: id,
      });
    let workCheck;
    // End date == null => Dang lam viec
    if (endDate === null) {
      workCheck = await db.Working.findOne({
        where: {
          ...workWhere,
          staffId,
          [Op.or]: [
            {
              endDate: null,
            },
            {
              endDate: {
                [Op.gt]: startDate,
              },
            },
          ],
        },
        raw: true,
        order: [["createdAt", "DESC"]],
        nest: true,
        include: [db.HealthFacility],
      });

      if (workCheck) {
        return workCheck;
      }
    }

    workCheck = await db.Working.findOne({
      where: {
        ...workWhere,
        staffId,
        endDate: null,
        startDate: {
          [Op.lt]: endDate,
        },
      },
      raw: true,
      order: [["createdAt", "DESC"]],
      nest: true,
      include: [db.HealthFacility],
    });
    if (workCheck) {
      console.log("workCheck 58", workCheck);
      return workCheck;
    }

    workCheck = await db.Working.findOne({
      where: {
        ...workWhere,
        staffId,
        [Op.or]: [
          {
            endDate: {
              [Op.lt]: endDate,
              [Op.gt]: startDate,
            },
          },
          {
            startDate: {
              [Op.lt]: endDate,
              [Op.gt]: startDate,
            },
          },
        ],
      },
      raw: true,
      order: [["createdAt", "DESC"]],
      nest: true,
      include: [db.HealthFacility],
    });

    if (workCheck) {
      return workCheck;
    } else {
      return true;
    }
  }

  async createOrUpdateWorking({
    staffId,
    healthFacilityId,
    startDate,
    endDate,
    id,
  }) {
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
      const isInsert = await this.checkInsertWorking(
        startDate,
        endDate,
        staffId
      );
      if (isInsert !== true) {
        return {
          statusCode: 1,
          msg: `Nhân viên này có làm việc ở bệnh viện *${
            isInsert.HealthFacility.name
          }* .
          Id: ${isInsert.id}
          Time: ${moment(isInsert.startDate).format("l")} - ${moment(
            isInsert.endDate
          ).format("l")}`,
        };
      }
      const workDoc = await db.Working.create({
        staffId,
        healthFacilityId,
        startDate,
        endDate,
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
      const isInsert = await this.checkInsertWorking(
        startDate,
        endDate,
        staffId,
        id
      );
      if (isInsert !== true) {
        return {
          statusCode: 2,
          msg: `Không thể cập nhật lịch làm việc, thời gian bắt đầu trong lịch này trùng với lịch công việc có id *${
            isInsert.id
          } *
          Time: ${moment(isInsert.startDate).format("l")} - ${moment(
            isInsert.endDate
          ).format("l")}`,
        };
      }

      const workDoc = await db.Working.update(
        {
          staffId,
          healthFacilityId,
          startDate,
          endDate,
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
    doctorEmail,
    healthFacilityName,
  }) {
    const whereQuery = {};
    const whereQueryDoctor = {};
    const whereQueryHeal = {};
    id &&
      (whereQuery.id = {
        [Op.substring]: id,
      });
    doctorName &&
      (whereQueryDoctor.fullName = {
        [Op.substring]: doctorName,
      });
    doctorEmail &&
      (whereQueryDoctor.email = {
        [Op.substring]: doctorEmail,
      });
    healthFacilityName &&
      (whereQueryHeal.name = {
        [Op.substring]: healthFacilityName,
      });

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
    console.log(workingDoc);

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
}

export default new WorkServices();
