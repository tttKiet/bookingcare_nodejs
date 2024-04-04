import { adminController } from "../../app/controller";
import { uploadAwsS3, verifyTokenManager } from "../../middleWares";
import express from "express";

const router = express.Router();

// Work
router.post("/work", adminController.handleCreateOrUpdateWork);

router.get("/work", verifyTokenManager, adminController.handleGetWorking);
router.delete("/work", verifyTokenManager, adminController.handleDeleteWorking);

// WorkRoom
router
  .route("/work-room")
  .get(adminController.handleGetWorkRoom)
  .post(verifyTokenManager, adminController.handleCreateOrUpdateWorkRoom)
  .delete(verifyTokenManager, adminController.handleDeleteWorkRoom);
// router.use(verifyTokenAdmin);

// Get doctor with email
router.get(
  "/staff/doctor",
  verifyTokenManager,
  adminController.getDoctorWithEmail
);

router.get("/staff/doctor-by-id", adminController.getDoctorById);

// TypeHealthFacilities
router.post(
  "/health-facilities/type",
  adminController.handleCreateTypeHealthFacilities
);
router.get(
  "/health-facilities/type",
  adminController.handleGetTypeHealthFacilities
);

router.patch(
  "/health-facilities/type",
  adminController.handleUpdateTypeHealthFacilities
);

router.delete(
  "/health-facilities/type",
  adminController.handleDeleteTypeHealthFacilities
);

// Dash board information Health facilities
router.get(
  "/health-facilities/infomation/health-facilities-type",
  adminController.handleGetInfoTypeAndHealthFacilities
);

// HealthFacilities
const uploadWithLimit = uploadAwsS3.array("images", 3);
router.post(
  "/health-facilities",
  function (req, res, next) {
    uploadWithLimit(req, res, function (err) {
      if (err) {
        // your error handling goes here
        console.log(err);
        return res.status(401).json({
          msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng.",
        });
      }
      next();
    });
  },
  adminController.handleCreateHealthFacility
);
router.get("/health-facilities", adminController.handleGetHealthFacilities);

router.patch(
  "/health-facilities",
  function (req, res, next) {
    uploadWithLimit(req, res, function (err) {
      if (err) {
        // your error handling goes here
        return res.status(401).json({
          msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng.",
        });
      }
      next();
    });
  },
  adminController.handleUpdateHealthFacility
);
router.delete("/health-facilities", adminController.handleDeleteHealthFacility);

// Health Facilities Room
router.post(
  "/health-facility/room",
  adminController.handleCreateOrUpdateHealRoom
);

router.get("/health-facility/room", adminController.handleGetHealRoom);
router.delete("/health-facility/room", adminController.handleDeleteHealRoom);

// Specialist
router.get("/specialist", adminController.handleGetSpecialist);
router.get("/specialist/:id", adminController.handleGetSpecialistById);
router.post("/specialist", adminController.handleCreateOrUpdateSpecialist);
router.delete("/specialist", adminController.handleDeleteSpecialist);

// AcademicDegree
router.get("/academic-degree", adminController.handleGetAcademicDegree);
router.post(
  "/academic-degree",
  adminController.handleCreateOrUpdateAcademicDegree
);
router.delete("/academic-degree", adminController.handleDeleteAcademicDegree);

// Staff
router.get("/staff", adminController.handleGetStaff);

// Doctor
router.post("/staff", adminController.handleCreateOrUpdateStaff);

// Role
router.get("/role", adminController.handleGetRole);

// Code
router
  .route("/code")
  .get(adminController.handleGetCode)
  .post(adminController.handleCreateCode)
  .delete(adminController.handleDeleteCode);

router.route("/code/time").get(adminController.handleGetTimeCode);

// rank
router.get("/rank", adminController.handleGetRank);

// chart
router.get("/chart/record", adminController.handleGetChartRecord);
router.get("/chart/account", adminController.handleGetChartAccount);

// Cedicine
router
  .route("/cedicine")
  .post(adminController.handleCreateOrEditCedicine)
  .get(adminController.handleGetCedicine)
  .delete(adminController.handleDeleteCedicine);

// Manager admin Health Facility
router
  .route("/manager-admin-health-facility")
  .post(adminController.handleCreateOrEditManagerAdminHealth)
  .get(adminController.handleGetManagerAdminHealth)
  .delete(adminController.handleDeleteManagerAdminHealth);

// Examination Services
router
  .route("/examination-service")
  .get(adminController.handleGetExaminationServices)
  .post(adminController.handleCreateOrEditExaminationServices)
  .delete(adminController.handleDeleteExaminationServices);

// Hospital Service
router.route("/hospital-service").get(adminController.handleGetHospitalService);

//api/test/admin/test-email
router.route("/test-email").get(adminController.handleTestEmail);

export default router;
