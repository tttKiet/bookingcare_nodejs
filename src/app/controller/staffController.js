import { staffServices, workServices } from "../../services";

class StaffController {
  // [Create or update] /health-exam-schedule
  async handleCreateOrUpdateHealthExamSchedule(req, res) {
    const { date, maxNumber, timeCode, workingId, id } = req.body;
    if (!id && (!date || !maxNumber || !timeCode || !workingId)) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    let timeCodeArray = [];
    if (!Array.isArray(timeCode)) timeCodeArray = [timeCode];
    else {
      timeCodeArray = [...timeCode];
    }
    try {
      const data = await workServices.createOrUpdateHealthExamSchedule({
        date,
        maxNumber,
        timeCode: timeCodeArray,
        workingId,
        id,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [Delete] /health-exam-schedule
  async handleDeleteHealthExamSchedule(req, res) {
    const { id } = req.body;

    try {
      const data = await workServices.deleteHealthExamSchedule(id);
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /health-exam-schedule
  async handleGetHealthExamSchedule(req, res) {
    const { limit, offset, staffId, date, workingId } = req.query;
    try {
      const data = await workServices.getHealthExamSchedule({
        limit,
        offset,
        staffId,
        date,
        workingId,
        raw: true,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /working
  async handleGetDoctorWorking(req, res) {
    const {
      offset,
      limit,
      doctorName,
      doctorEmail,
      workingId,
      healthFacilityId,
      doctorId,
    } = req.query;
    try {
      const data = await staffServices.getDoctorWorking({
        offset,
        limit,
        doctorName,
        doctorEmail,
        workingId,
        healthFacilityId,
        doctorId,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /check-up/health-record
  async handleGetRecordCheckUp(req, res) {
    const { date, staffId } = req.query;
    console.log("staffId{ ", {
      staffId,
    });
    if (!date || !staffId) {
      return res
        .status(400)
        .json({ msg: "Thiếu tham số truyền vào! Yêu cầu [staffId, date]" });
    }
    try {
      const data = await staffServices.getRecordCheckUp({
        date,
        staffId,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [PATCH] /check-up/health-record
  async handleEditStatus(req, res) {
    const user = req?.user;
    console.log(user);
    const { statusId, healthRecordId } = req.body;
    if (!statusId && !healthRecordId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào [statusId].",
      });
    }
    if (user?.role.keyType === "user") {
      if (statusId != "S4") {
        return res.status(403).json({ msg: "Bạn không có quyền này!" });
      }
    }
    try {
      const data = await staffServices.editStatusHealthRecord({
        statusId,
        healthRecordId,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /check-up/health-record
  async handleChartRevenue(req, res) {
    const { year, staffId } = req.query;

    if (!year || !staffId) {
      return res
        .status(400)
        .json({ msg: "Thiếu tham số truyền vào! Yêu cầu [staffId, year]" });
    }
    try {
      const data = await staffServices.getChartRevenue({
        year,
        staffId,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
}

export default new StaffController();
