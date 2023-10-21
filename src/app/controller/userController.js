import { userServices, workServices } from "../../services";

class UserController {
  // [POST] /api/v1/user
  async handleRegister(req, res) {
    const { email, password, fullName, phone, address, gender } = req.body;
    if (!email || !password || !fullName || !phone || !address || !gender) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Missing input parameters.",
      });
    }

    try {
      const data = await userServices.createUser({
        email,
        password,
        fullName,
        phone,
        address,
        gender,
      });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: "Error creating user.", err: err.message });
    }
  }

  // [GET] /api/v1/user
  async handleGetUser(req, res) {
    const { limit, offset, email, fullName } = req.query;
    try {
      const data = await userServices.getUser({
        limit,
        offset,
        email,
        fullName,
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

  // [POST] /api/v1/user
  async handleCreateOrUpdateUser(req, res) {
    const { id, email, password, fullName, phone, address, gender } = req.body;
    if (
      !id &&
      (!email || !password || !fullName || !phone || !address || !gender)
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await userServices.createOrUpdateUser({
        id,
        email,
        password,
        fullName,
        phone,
        address,
        gender,
        role: req.user?.role.keyType,
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

  // [GET] /api/v1/user/patient-profile
  async handleGetPatientProfile(req, res) {
    const { limit, offset, patientProfileId } = req.query;

    try {
      const data = await userServices.getPatientProfile({
        limit,
        offset,
        userId: req.user.id,
        patientProfileId,
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

  // [POST] /api/v1/user/patient-profile
  async handleCreateOrUpdatePatientProfile(req, res) {
    const {
      id,
      fullName,
      phone,
      profession,
      email,
      birthDay,
      gender,
      cccd,
      nation,
      addressCode,
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
        !addressCode)
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await userServices.createOrUpdatePatientProfile({
        id,
        fullName,
        phone,
        profession,
        email,
        birthDay,
        gender,
        cccd,
        nation,
        addressCode,
        userId: req.user.id,
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

  // [Delete] /api/v1/user/patient-profile
  async handleDeletePatientProfile(req, res) {
    const { id } = req.body;
    const userId = req.user.id;

    if (!id) {
      return res
        .status(404)
        .json({ statusCode: 4, msg: "Thiếu tham số truyền vào." });
    }
    try {
      const data = await userServices.deletePatientProfile(id, userId);
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

  // [POST] /api/v1/user/booking
  async handleBooking(req, res) {
    // Get user logined
    const userId = req.user.id;
    const {
      healthExaminationScheduleId,
      patientProfileId,
      descriptionDisease,
    } = req.body;
    if (
      !healthExaminationScheduleId ||
      !patientProfileId ||
      !descriptionDisease ||
      !userId
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await userServices.createBooking({
        healthExaminationScheduleId,
        patientProfileId,
        descriptionDisease,
        userId,
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

  // [GET] /api/v1/user/health-record
  async handleGetHealthRecord(req, res) {
    // Get user logined
    const userId = req.user.id;
    const { litmit, offset, healthRecordId } = req.query;
    try {
      const data = await userServices.getHealthRecord({
        userId,
        litmit,
        offset,
        healthRecordId,
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

  // [GET] /api/v1/user/list-doctor-working-health
  async getDoctorWorkingOfHealth(req, res) {
    const { healthFacilityId, limit, offset } = req.query;
    try {
      const data = await workServices.getDoctorWorkingAtHealth({
        limit,
        offset,
        healthFacilityId,
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

export default new UserController();
