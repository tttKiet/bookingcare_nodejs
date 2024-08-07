import { staffServices, userServices, workServices } from "../../services";

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
    const { limit, offset, staffId, date, workingId, type } = req.query;
    try {
      const data = await workServices.getHealthExamSchedule({
        limit,
        offset,
        staffId,
        date,
        workingId,
        raw: true,
        type,
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

  // [GET] /health-exam-schedule
  async getHealthExamScheduleForDoctor(req, res) {
    const { limit, offset, staffId, date, workingId } = req.query;
    try {
      const data = await workServices.getHealthExamScheduleForDoctor({
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

  // [GET] /health-exam-schedule/all
  async handleGetHealthExamScheduleAll(req, res) {
    let {
      limit,
      offset,
      staffId,
      date,
      workingId,
      healthFacilityName,
      staffName,
    } = req.query;
    try {
      const data = await workServices.getHealthExamScheduleDoctorAndTimeCode({
        limit,
        offset,
        staffId,
        date,
        workingId,
        healthFacilityName: Array.isArray(healthFacilityName)
          ? healthFacilityName?.[0]
          : healthFacilityName,
        staffName: Array.isArray(staffName) ? staffName?.[0] : staffName,
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

  // [GET] /booking
  async handleGetBooking(req, res) {
    const user = req?.user;
    var staffIdLogin;
    if (user?.role?.keyType !== "admin") {
      staffIdLogin = user?.id;
      if (!staffIdLogin)
        return res
          .status(401)
          .json({ statusCode: 401, msg: "Bạn chưa đăng nhập" });
    }

    const {
      offset,
      limit,
      date,
      timeCodeId,
      checkUpCodeId,
      patientProfileName,
      healthExamScheduleId,
      bookingId,
      staffId,
      userId,
    } = req.query;

    try {
      const data = await staffServices.getBooking({
        offset,
        limit,
        staffId,
        userId,
        date,
        timeCodeId,
        patientProfileName,
        healthExamScheduleId,
        checkUpCodeId,
        bookingId,
        staffIdLogin,
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
      current,
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
        current,
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
    const { date, staffId, id, limit, offset, booking: bookingId } = req.query;

    try {
      const data = await staffServices.getRecordCheckUp({
        date,
        staffId,
        id,
        limit,
        offset,
        bookingId,
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
  async handleCreateHealthRecord(req, res) {
    const { bookingId, patientId } = req.body;
    if (!bookingId || !patientId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await staffServices.createHealthRecord({
        bookingId,
        patientId,
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
  async handleEditHealthRecord(req, res) {
    const user = req?.user;
    const { statusId, id, diagnosis, note } = req.body;
    if (!statusId && !id) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào [statusId].",
      });
    }
    // if (user?.role.keyType === "user") {
    //   if (statusId != "S4") {
    //     return res.status(403).json({ msg: "Bạn không có quyền này!" });
    //   }
    // }
    try {
      const data = await staffServices.editHealthRecord({
        statusId,
        healthRecordId: id,
        diagnosis,
        note,
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

  async handleEditStatusBooking(req, res) {
    const { statusId, bookingId } = req.body;
    const userLogin = req?.user;
    var userId = "";
    if (userLogin?.role?.keyType === "user") {
      userId = userLogin?.id;
    }
    if (!statusId || !bookingId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await staffServices.editStatusBooking({
        statusId,
        bookingId,
        userId,
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

  // [POST] /check-up/health-record/done
  async handleEditHealthRecordAndDone(req, res) {
    const {
      id,
      diagnosis,
      note,
      emailDestination,
      sendPrescriptionDetails,
      sendhHospitalService,
    } = req.body;
    const files = req?.files || [];
    if (!id) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào [healthRecordid].",
      });
    }

    try {
      const data = await staffServices.editHealthRecordDone({
        id,
        diagnosis,
        note,
        emailDestination,
        sendPrescriptionDetails,
        sendhHospitalService,
        files,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(data.statusCode).json(data);
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

  // [POST] /api/v1/patient
  async handleCreateOrUpdatePatient(req, res) {
    const user = req?.user;
    const staffId = user?.id;

    const {
      id,
      fullName,
      phone,
      profession,
      email,
      birthDay,
      gender,
      cccd,
      healthFacilityId,
      nation,
      addressCode,
      copyFromPatientProfileId,
    } = req.body;
    if (
      !id &&
      (!fullName ||
        !phone ||
        !profession ||
        !email ||
        !birthDay ||
        !gender ||
        !cccd ||
        !nation ||
        !addressCode ||
        !staffId)
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await staffServices.createOrUpdatePatient(
        {
          id,
          fullName,
          phone,
          profession,
          email,
          healthFacilityId,
          birthDay,
          gender,
          cccd,
          nation,
          addressCode,
          staffId,
        },
        { copyFromPatientProfileId }
      );
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

  // [GET] /patient
  async handleGetPatient(req, res) {
    const { limit, offset, patientId, name, healthFacilityId, cccd } =
      req.query;
    const user = req?.user;
    let staffId;

    if (user?.role?.keyType != "admin") {
      staffId = user?.id;
    }
    try {
      const data = await staffServices.getPatient({
        limit,
        offset,
        healthFacilityId,
        patientId,
        name,
        cccd,
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

  // [DELETE] /patient
  async handleDeletePatient(req, res) {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        statusCode: 1,
        msg: "Id không được truyền.",
      });
    try {
      const data = await staffServices.deletePatient({
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

  // [POST] /api/v1/doctor/service-details
  async handleCreateEditServiceDetails(req, res) {
    const { id, descriptionResult, healthRecordId, hospitalServiceId } =
      req.body;
    if (!id && !healthRecordId && !hospitalServiceId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await staffServices.createOrUpdateServiceDetails({
        id,
        descriptionResult,
        healthRecordId,
        hospitalServiceId,
      });
      if (data.statusCode === 200 || data.statusCode === 0) {
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

  // [GET] /api/v1/doctor/service-details
  async handleGetServiceDetails(req, res) {
    const { id, healthRecordId, hospitalServiceId } = req.query;

    try {
      const data = await staffServices.getServiceDetails({
        id,
        healthRecordId,
        hospitalServiceId,
      });
      if (data.statusCode === 200 || data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [DELETE] /admin/health-facilities/type
  async handleDeleteServiceDetails(req, res) {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        statusCode: 1,
        msg: "Id không được truyền.",
      });
    try {
      const data = await staffServices.deleteServiceDetails({
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

  // [POST] /api/v1/doctor/prescription-details
  async handleCreateEditPrescriptionDetails(req, res) {
    const {
      id,
      cedicineId,
      healthRecordId,
      quantity,
      usage,
      unit,
      morning,
      noon,
      afterNoon,
      evening,
    } = req.body;
    if (!id && (!cedicineId || !healthRecordId || !quantity)) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await staffServices.createOrUpdatePrescriptionDetails({
        id,
        cedicineId,
        healthRecordId,
        quantity,
        usage,
        unit,
        morning,
        noon,
        afterNoon,
        evening,
      });
      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 0
      ) {
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

  // [GET] /api/v1/doctor/prescription-details
  async handleGetPrescriptionDetails(req, res) {
    const { id, healthRecordId, cedicineId } = req.query;

    try {
      const data = await staffServices.getPrescriptionDetails({
        id,
        healthRecordId,
        cedicineId,
      });
      if (data.statusCode === 200 || data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [DELETE] /api/v1/doctor/prescription-details
  async handleDeletePrescriptionDetails(req, res) {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        statusCode: 1,
        msg: "Id không được truyền.",
      });
    try {
      const data = await staffServices.deletePrescriptionDetails({
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

  // [DELETE] /api/v1/doctor/prescription-details
  async deleteSchedule(req, res) {
    const { schedule } = req.body;
    if (!schedule || schedule?.length < 0)
      return res.status(404).json({
        statusCode: 1,
        msg: "schedule không được truyền.",
      });

    let arr = [];
    if (Array.isArray(schedule)) {
      arr = schedule;
    } else {
      arr = [schedule];
    }
    // return res.status(200).json(schedule);

    try {
      const data = await staffServices.deleteSchedule({
        schedules: arr,
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

  // [POST] /api/v1/register-schedule
  async registerSchedule(req, res) {
    const {
      workingId,
      unit, // don vi ngay ->  ngay, tuan, thang [date,week,month]
      startDate,
      endDate,
      quantity,
      optionTimeCode, //[all, some]
      timeCodeArray: timeCodes,
      maxNumber,
    } = req.body;
    if (!workingId)
      return res.status(404).json({
        statusCode: 1,
        msg: "workingId không được truyền.",
      });
    let timeCodeArray = [];
    if (Array.isArray(timeCodes)) {
      timeCodeArray = timeCodes;
    } else {
      timeCodeArray = [timeCodes];
    }

    try {
      const data = await workServices.registerSchedule({
        workingId,
        unit, // don vi ngay ->  ngay, tuan, thang [date,week,month]
        startDate,
        endDate,
        quantity,
        optionTimeCode, //[all, some]
        timeCodeArray,
        maxNumber,
      });
      if (data.statusCode === 200 || data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(data.statusCode).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
}

export default new StaffController();
