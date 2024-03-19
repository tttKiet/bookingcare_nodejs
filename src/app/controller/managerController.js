import { managerServices, userServices, workServices } from "../../services";

class ManagerController {
  // Hospital Service
  async handleCreateOrUpdateHospitalServices(req, res) {
    const { healthFacilityId, examinationServiceId, price, isAcctive } =
      req.body;
    if (!healthFacilityId || !healthFacilityId || !price) {
      return res.status(401).json({
        statusCode: 400,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await managerServices.createOrUpdateHospitalServices({
        healthFacilityId,
        examinationServiceId,
        price,
        isAcctive,
      });
      return res.status(data.statusCode).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
  async handleGetHospitalServices(req, res) {
    const { limit, offset, healthFacilityName } = req.query;
    try {
      const data = await managerServices.getHospitalServices({
        limit,
        offset,
        healthFacilityName,
      });
      return res.status(data.statusCode).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  async handleDeleteHospitalServices(req, res) {
    const { healthFacilityId, examinationServiceId } = req.body;
    if (!healthFacilityId || !examinationServiceId) {
      return res.status(400).json({
        msg: "Vui lòng điền { healthFacilityId, examinationServiceId } cần xóa!",
      });
    }
    try {
      const data = await managerServices.deleteHospitalServices({
        healthFacilityId,
        examinationServiceId,
      });
      return res.status(data.statusCode).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
}

export default new ManagerController();
