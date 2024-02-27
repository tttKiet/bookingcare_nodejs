import db from "../app/models";
import { Op } from "sequelize";

class adminService {
  // cedicine
  async createOrUpdateCedicine({ name, price, id }) {
    // create a new cedicine
    if (!id) {
      if (price <= 0) {
        return {
          statusCode: 400,
          msg: "Giá thuốc phải lớn hơn 0!",
        };
      }

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
        price,
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
          price,
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
}

export default new adminService();
