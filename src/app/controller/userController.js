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
    const { limit, offset, patientProfileId, profileName } = req.query;

    try {
      const data = await userServices.getPatientProfile({
        limit,
        offset,
        userId: req.user.id,
        patientProfileId,
        profileName,
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
      userId: userIdPost,
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

    const userId = req.user.keyType == "user" ? req.user.id : userIdPost;
    console.log("\n\nuserId\n\n", userId);
    if (!userId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào. [ userId ]",
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

  // [POST] middle ware
  async handleBooking(req, res, next) {
    // Get user logined
    const userId = req.user.id;
    const {
      healthExaminationScheduleId,
      paymentType,
      patientProfileId,
      descriptionDisease,
    } = req.body;
    if (
      !healthExaminationScheduleId ||
      !patientProfileId ||
      !descriptionDisease ||
      !userId ||
      !paymentType
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
        paymentType,
      });
      req.dataBooking = data;
      next();
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET]
  async handleGetBooking(req, res, next) {
    // Get user logined
    const userId = req.user.id;
    const {
      date,
      healthFacilityId,
      paymentType,
      patientProfileId,
      patientProfileName,
      status,
      bookingId,
    } = req.query;
    if (!userId) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await userServices.getBooking({
        status,
        date,
        healthFacilityId,
        paymentType,
        patientProfileId,
        patientProfileName,
        userId,
        bookingId,
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

  // // [GET] /api/v1/user/health-record
  // async handleGetHealthRecord(req, res) {
  //   // Get user logined
  //   const userId = req.user.id;
  //   console.log(req.user);
  //   const { litmit, offset, healthRecordId, timeCodeId } = req.query;
  //   try {
  //     const data = await userServices.getHealthRecord({
  //       userId,
  //       permission: req.user.role.keyType,
  //       timeCodeId,
  //       litmit,
  //       offset,
  //       healthRecordId,
  //     });
  //     if (data.statusCode === 0) {
  //       return res.status(200).json(data);
  //     }
  //     return res.status(400).json(data);
  //   } catch (err) {
  //     console.log(err);
  //     return res
  //       .status(500)
  //       .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
  //   }
  // }

  // [GET] /api/v1/user/list-doctor-working-health
  async getDoctorWorkingOfHealth(req, res) {
    const { healthFacilityId, doctorName, doctorEmail, limit, offset } =
      req.query;
    try {
      const data = await workServices.getDoctorWorkingAtHealth({
        limit,
        offset,
        healthFacilityId,
        doctorName,
        doctorEmail,
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
