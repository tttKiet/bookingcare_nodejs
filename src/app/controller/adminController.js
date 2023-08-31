import { healthFacilitiesServices } from "../../services";

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
  async handleCreateHealthFacilities(req, res, next) {
    const { name, address, phone, email, typeHealthFacilityId } = req.body;
    if (!name || !address || !phone || !email || !typeHealthFacilityId)
      return res.status(404).json({
        statusCode: 1,
        msg: "Tham số đầu vào không đầy đủ.",
      });
    try {
      const data = await healthFacilitiesServices.createHealthFacility({
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
