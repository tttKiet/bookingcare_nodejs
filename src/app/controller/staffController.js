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
    try {
      const data = await workServices.createOrUpdateHealthExamSchedule({
        date,
        maxNumber,
        timeCode,
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
  // // [GET] /health-exam-schedule-full-info
  // async handleGetHealthExamScheduleFullInfor(req, res) {
  //   const { staffId, date, healthFacilityId } = req.query;
  //   if (!staffId || !date || !healthFacilityId) {
  //     return res.status(400).json({
  //       statusCode: 1,
  //       msg: "Thiếu tham số truyền vào.",
  //     });
  //   }
  //   try {
  //     const data = await workServices.getHealthExamScheduleFullInfo({
  //       staffId,
  //       date,
  //       healthFacilityId,
  //     });
  //     if (data.statusCode === 0) {
  //       return res.status(200).json(data);
  //     }
  //     return res.status(400).json(data);
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
  //   }
  // }

  // [GET] /working
  async handleGetDoctorWorking(req, res) {
    const {
      offset,
      limit,
      doctorName,
      doctorEmail,
      workingId,
      healthFacilityId,
    } = req.query;
    try {
      const data = await staffServices.getDoctorWorking({
        offset,
        limit,
        doctorName,
        doctorEmail,
        workingId,
        healthFacilityId,
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
