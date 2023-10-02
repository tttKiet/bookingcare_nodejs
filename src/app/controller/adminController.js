import {
  authServices,
  healthFacilitiesServices,
  userServices,
  workServices,
} from "../../services";
import { uploadAwsS3, s3 } from "../../middleWares";
import { deleteImagesFromS3 } from "../../untils";
import staffServices from "../../services/staffServices";
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
    if (!name || !address || !phone || !email || !typeHealthFacilityId) {
      const keys = files.map((f) => ({
        Key: f.key,
      }));
      deleteImagesFromS3(keys);

      return res.status(404).json({
        statusCode: 1,
        msg: "Tham số đầu vào không đầy đủ.",
      });
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
    const {
      limit,
      offset,
      name,
      address,
      typeHealthFacility,
      typeHealthFacilityId,
      email,
      searchNameOrEmail,
      id,
    } = req.query;

    try {
      if (email) {
        const data = await healthFacilitiesServices.getHealthFacilityWithEmail({
          limit,
          offset,
          email,
        });
        if (data.statusCode === 0) {
          return res.status(200).json(data);
        }
        return res.status(400).json(data);
      } else {
        const data = await healthFacilitiesServices.getHealthFacilities({
          id,
          limit,
          offset,
          name,
          address,
          typeHealthFacility,
          typeHealthFacilityId,
          searchNameOrEmail,
        });
        if (data.statusCode === 0) {
          return res.status(200).json(data);
        }
        return res.status(400).json(data);
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [GET] /admin/health-facilities
  async handleGetHealthFacilityWithEmail(req, res, next) {
    const { limit, offset, email } = req.query;

    try {
      const data = await healthFacilitiesServices.getHealthFacilityWithEmail({
        limit,
        offset,
        email,
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
    const files = req?.files;
    const fileUrls = files.map((f) => {
      return f.location;
    });
    const { name, address, phone, email, typeHealthFacilityId, id, imageOlds } =
      req.body;
    if (imageOlds?.length === 0 && fileUrls.length === 0) {
      return res.status(200).json({
        statusCode: 1,
        msg: "Dữ liệu không được sửa đổi.",
      });
    }
    if (
      !id ||
      (!name && !address && !phone && !email && !typeHealthFacilityId)
    ) {
      const keys = files.map((f) => ({
        Key: f.key,
      }));
      keys.length > 0 && deleteImagesFromS3(keys);
      return res.status(200).json({
        statusCode: 1,
        msg: "Dữ liệu không được sửa đổi.",
      });
    }

    try {
      const data = await healthFacilitiesServices.updateHealthFacility({
        id,
        name,
        address,
        phone,
        email,
        typeHealthFacilityId,
        fileUrls,
        imageOldKeys: imageOlds,
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

  // [DELETE] /admin/health-faciliies
  async handleDeleteHealthFacility(req, res, next) {
    const { id } = req.body;

    try {
      const data = await healthFacilitiesServices.deleteHealthFacility({
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

  // [POST] /admin/health-facility/room
  async handleCreateOrUpdateHealRoom(req, res, next) {
    const { oldRoomNumber, healthFacilityId, roomNumber, capacity } = req.body;

    if (!oldRoomNumber && (!healthFacilityId || !roomNumber || !capacity)) {
      return res.status(401).json({
        statusCode: 4,
        msg: "Thiếu tham số truyền vào",
      });
    }

    try {
      const data = await healthFacilitiesServices.createOrUpdateRoom({
        oldRoomNumber,
        healthFacilityId,
        roomNumber,
        capacity,
      });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      const msg =
        err.message == "Validation error"
          ? "Số phòng đã tồn tại."
          : err.message;
      return res.status(401).json({ msg: msg });
    }
  }

  // [GET] /admin/health-facility/room
  async handleGetHealRoom(req, res, next) {
    const { healthFacilityId } = req.query;

    try {
      const data = await healthFacilitiesServices.getRoom({ healthFacilityId });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      const msg =
        err.message == "Validite error" ? "Số phòng đã tồn tại." : err.message;
      return res.status(401).json({ msg: msg });
    }
  }

  // [DELETE] /admin/health-facility/room
  async handleDeleteHealRoom(req, res, next) {
    const { roomNumber, healthFacilityId } = req.body;

    if (!roomNumber || !healthFacilityId) {
      return res.status(401).json({ statusCode: 401, msg: "Thiếu tham số." });
    }
    try {
      const data = await healthFacilitiesServices.deleteRoom({
        roomNumber,
        healthFacilityId,
      });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      const msg =
        err.message == "Validite error" ? "Số phòng đã tồn tại." : err.message;
      return res.status(401).json({ msg: msg });
    }
  }

  // [POST] /admin/specialist
  async handleCreateOrUpdateSpecialist(req, res, next) {
    // Create and Update specialist
    const { id, name, descriptionDisease, descriptionDoctor } = req.body;

    if (!name || !descriptionDisease || !descriptionDoctor) {
      return res.status(400).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }

    try {
      const data = await healthFacilitiesServices.createOrUpdateSpecialist({
        id,
        name,
        descriptionDisease,
        descriptionDoctor,
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

  // [GET] /admin/specialist
  async handleGetSpecialist(req, res, next) {
    const { limit, offset } = req.query;
    try {
      const data = await healthFacilitiesServices.getSpecialist({
        limit,
        offset,
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
  // [GET] /admin/specialist/:id
  async handleGetSpecialistById(req, res, next) {
    const { id } = req.params;
    try {
      const data = await healthFacilitiesServices.getSpecialistById({ id });
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

  // [DELETE] /admin/specialist
  async handleDeleteSpecialist(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        statusCode: 1,
        msg: "Thiếu id truyền vào.",
      });
    }
    try {
      const data = await healthFacilitiesServices.deleteSpecialist({
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

  // [GET] /admin/academic-degree
  async handleGetAcademicDegree(req, res, next) {
    const { limit, offset } = req.query;
    try {
      const data = await staffServices.getAcademicDegree({
        limit,
        offset,
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

  // [POST] /admin/academic-degree
  async handleCreateOrUpdateAcademicDegree(req, res, next) {
    const { id, name } = req.body;
    if (!name) {
      return res.status(400).json({
        statusCode: 1,
        msg: "Thiếu tên truyền vào.",
      });
    }
    try {
      const data = await staffServices.createOrUpdateAcademicDegree({
        id,
        name,
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

  // [DELETE] /admin/academic-degree
  async handleDeleteAcademicDegree(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        statusCode: 1,
        msg: "Thiếu id truyền vào.",
      });
    }
    try {
      const data = await staffServices.deleteAcademicDegree({
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

  // [POST] /admin/staff
  async handleCreateOrUpdateStaff(req, res, next) {
    const {
      id,
      email,
      password,
      fullName,
      phone,
      address,
      gender,
      academicDegreeId,
      specialistId,
      experience,
      certificate,
      roleId,
    } = req.body;
    if (
      !id &&
      (!email ||
        !password ||
        !fullName ||
        !phone ||
        !address ||
        !gender ||
        !academicDegreeId ||
        !specialistId ||
        !experience ||
        !certificate ||
        !roleId)
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await staffServices.createOrUpdateStaff({
        id,
        email,
        password,
        fullName,
        phone,
        address,
        gender,
        academicDegreeId,
        specialistId,
        experience,
        certificate,
        roleId,
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

  // [GET] /admin/staff
  async handleGetStaff(req, res, next) {
    const { limit, offset, email, fullName } = req.query;
    try {
      const data = await staffServices.getStaff({
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

  // [GET] /admin/staff/doctor
  async getDoctorWithEmail(req, res, next) {
    const { limit, offset, email } = req.query;
    if (!email) {
      return res.status(400).json({
        statusCode: 1,
        msg: "Email chưa được truyền vào.",
      });
    }
    try {
      const data = await staffServices.getDoctorWithEmail({
        limit,
        offset,
        email,
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

  // [GET] /admin/role
  async handleGetRole(req, res, next) {
    const { option } = req.query;
    try {
      const data = await authServices.getRole({
        option,
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

  // [POST] /admin/work
  async handleCreateOrUpdateWork(req, res, next) {
    const { staffId, healthFacilityId, startDate, endDate, id } = req.body;
    if (!id && (!staffId || !healthFacilityId || !startDate)) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await workServices.createOrUpdateWorking({
        staffId,
        healthFacilityId,
        startDate,
        endDate,
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

  // [GET] /admin/work
  async handleGetWorking(req, res, next) {
    const { doctorName, id, doctorEmail, healthFacilityName } = req.query;

    try {
      const data = await workServices.getWorking({
        doctorName,
        id,
        doctorEmail,
        healthFacilityName,
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

  // [DELETE] /admin/work
  async handleDeleteWorking(req, res, next) {
    const { id } = req.body;

    try {
      const data = await workServices.deleteWorking(id);
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

  // [GET] /code
  async handleGetCode(req, res, next) {
    const { limit, offset } = req.query;
    try {
      const data = await staffServices.getCode({ limit, offset });
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
  // [Delete] /code
  async handleDeleteCode(req, res, next) {
    const { key } = req.body;
    if (!key) {
      return res.status(400).json({ msg: "Key chưa được truyền vào." });
    }
    try {
      const data = await staffServices.deleteCode({
        key,
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

  // [Create] /code
  async handleCreateCode(req, res, next) {
    const { name, key, value } = req.body;
    if (!name || !value || !key) {
      return res
        .status(400)
        .json({ msg: "Tham số cần thiết chưa được truyền vào." });
    }
    try {
      const data = await staffServices.createCode({ name, key, value });
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

export default new AdminController();
