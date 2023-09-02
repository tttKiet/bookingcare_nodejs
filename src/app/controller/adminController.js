import { healthFacilitiesServices } from "../../services";
import { uploadAwsS3, s3 } from "../../middleWares";
import { deleteImagesFromS3 } from "../../untils";
class AdminController {
  // [POST] /admin/health-facilities/type
  async handleCreateTypeHealthFacilities(req, res, next) {
    const { name } = req.body;
    if (!name)
      return res
        .status(404)
        .json({ statusCode: 1, msg: "Tên loại bệnh viện không được truyền." });
    try {
      const data = await healthFacilitiesServices.createTypeHealthFacility({
        name,
      });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /admin/health-facilities/type
  async handleGetTypeHealthFacilities(req, res, next) {
    try {
      const data = await healthFacilitiesServices.getTypeHealthFacilites();
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [PATCH] /admin/health-facilities/type
  async handleUpdateTypeHealthFacilities(req, res, next) {
    const { id, name } = req.body;
    if (!id || !name)
      return res.status(404).json({
        statusCode: 1,
        msg: "Id loại hoặc tên loại bệnh viện không được truyền.",
      });
    try {
      const data = await healthFacilitiesServices.updateTypeHealthFacilites({
        id,
        name,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [DELETE] /admin/health-facilities/type
  async handleDeleteTypeHealthFacilities(req, res, next) {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        statusCode: 1,
        msg: "Id loại bệnh viện không được truyền.",
      });
    try {
      const data = await healthFacilitiesServices.deleteTypeHealthFacilites({
        id,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /admin/health-facilities/infomation/health-facilities-type
  async handleGetInfoTypeAndHealthFacilities(req, res, next) {
    try {
      const data =
        await healthFacilitiesServices.getInfoDashboardTypeAndHealthFacilites();
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [POST] /admin/health-facilities
  async handleCreateHealthFacility(req, res, next) {
    const files = req?.files;
    if (!files) {
      return res
        .status(500)
        .json({ msg: "Lỗi load ảnh lên server. Vui lòng thử lại sau!" });
    } else if (files.length == 0) {
      return res.status(500).json({ msg: "Ảnh chưa được tải lên!" });
    }

    const fileUrls = files.map((f) => {
      return f.location;
    });

    const { name, address, phone, email, typeHealthFacilityId } = req.body;
    console.log(files);
    if (!name || !address || !phone || !email || !typeHealthFacilityId) {
      const keys = files.map((f) => ({
        Key: f.key,
      }));
      deleteImagesFromS3(keys);

      return res.status(404).json({
        statusCode: 1,
        msg: "Tham số đầu vào không đầy đủ.",
      });
      // Xóa ảnh đã upload
    }

    try {
      const data = await healthFacilitiesServices.createHealthFacility({
        name,
        address,
        phone,
        email,
        typeHealthFacilityId,
        fileUrls,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /admin/health-facilities
  async handleGetHealthFacilities(req, res, next) {
    const { limit, offset, name, address, typeHealthFacility } = req.query;

    try {
      const data = await healthFacilitiesServices.getHealthFacilities({
        limit,
        offset,
        name,
        address,
        typeHealthFacility,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [PATCH] /admin/health-facilities
  async handleUpdateHealthFacility(req, res, next) {
    const { name, address, phone, email, typeHealthFacilityId, id } = req.body;
    if (!id || (!name && !address && !phone && !email && !typeHealthFacilityId))
      return res.status(200).json({
        statusCode: 1,
        msg: "Dữ liệu không được sửa đổi.",
      });
    try {
      const data = await healthFacilitiesServices.updateHealthFacility({
        id,
        name,
        address,
        phone,
        email,
        typeHealthFacilityId,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
}

export default new AdminController();
