"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _controller = require("../../app/controller");
var _middleWares = require("../../middleWares");
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
// test
router.get("/test", _controller.adminController.adminTestApi);

// Work
router.post("/work", _controller.adminController.handleCreateOrUpdateWork);
router.get("/work", _middleWares.verifyTokenManager, _controller.adminController.handleGetWorking);
router["delete"]("/work", _middleWares.verifyTokenManager, _controller.adminController.handleDeleteWorking);

// WorkRoom
router.route("/work-room").get(_controller.adminController.handleGetWorkRoom).post(_middleWares.verifyTokenManager, _controller.adminController.handleCreateOrUpdateWorkRoom)["delete"](_middleWares.verifyTokenManager, _controller.adminController.handleDeleteWorkRoom);
// router.use(verifyTokenAdmin);

// Get doctor with email
router.get("/staff/doctor", _middleWares.verifyTokenManager, _controller.adminController.getDoctorWithEmail);
router.get("/staff/doctor-by-id", _controller.adminController.getDoctorById);

// TypeHealthFacilities
router.post("/health-facilities/type", _controller.adminController.handleCreateTypeHealthFacilities);
router.get("/health-facilities/type", _controller.adminController.handleGetTypeHealthFacilities);
router.patch("/health-facilities/type", _controller.adminController.handleUpdateTypeHealthFacilities);
router["delete"]("/health-facilities/type", _controller.adminController.handleDeleteTypeHealthFacilities);

// Dash board information Health facilities
router.get("/health-facilities/infomation/health-facilities-type", _controller.adminController.handleGetInfoTypeAndHealthFacilities);

// HealthFacilities
var uploadWithLimit = _middleWares.uploadAwsS3.array("images", 5);
router.post("/health-facilities", function (req, res, next) {
  uploadWithLimit(req, res, function (err) {
    if (err) {
      // your error handling goes here
      console.log(err);
      return res.status(401).json({
        msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng."
      });
    }
    next();
  });
}, _controller.adminController.handleCreateHealthFacility);
router.post("/page-mark-down/health-facilities", _controller.adminController.handleHealthFacilityEditMarkDown);

//staf mark down
router.post("/page-mark-down/doctor", _controller.adminController.handleDoctorEditMarkDown);
router.get("/health-facilities", _controller.adminController.handleGetHealthFacilities);
router.patch("/health-facilities", function (req, res, next) {
  uploadWithLimit(req, res, function (err) {
    if (err) {
      // your error handling goes here
      return res.status(401).json({
        msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng."
      });
    }
    next();
  });
}, _controller.adminController.handleUpdateHealthFacility);
router["delete"]("/health-facilities", _controller.adminController.handleDeleteHealthFacility);

// Health Facilities Room
router.post("/health-facility/room", _controller.adminController.handleCreateOrUpdateHealRoom);
router.get("/health-facility/room", _controller.adminController.handleGetHealRoom);
router["delete"]("/health-facility/room", _controller.adminController.handleDeleteHealRoom);

// Specialist
router.get("/specialist", _controller.adminController.handleGetSpecialist);
router.get("/specialist/:id", _controller.adminController.handleGetSpecialistById);
router.post("/specialist", _controller.adminController.handleCreateOrUpdateSpecialist);
router["delete"]("/specialist", _controller.adminController.handleDeleteSpecialist);

// AcademicDegree
router.get("/academic-degree", _controller.adminController.handleGetAcademicDegree);
router.post("/academic-degree", _controller.adminController.handleCreateOrUpdateAcademicDegree);
router["delete"]("/academic-degree", _controller.adminController.handleDeleteAcademicDegree);

// Staff
router.get("/staff", _controller.adminController.handleGetStaff);

// Doctor
router.post("/staff", _controller.adminController.handleCreateOrUpdateStaff);

// Role
router.get("/role", _controller.adminController.handleGetRole);

// Code
router.route("/code").get(_controller.adminController.handleGetCode).post(_controller.adminController.handleCreateCode)["delete"](_controller.adminController.handleDeleteCode);
router.route("/code/time").get(_controller.adminController.handleGetTimeCode);

// rank
router.get("/rank", _controller.adminController.handleGetRank);

// chart
router.get("/chart/record", _controller.adminController.handleGetChartRecord);
router.get("/chart/account", _controller.adminController.handleGetChartAccount);

// Cedicine
router.route("/cedicine").post(_controller.adminController.handleCreateOrEditCedicine).get(_controller.adminController.handleGetCedicine)["delete"](_controller.adminController.handleDeleteCedicine);

// Manager admin Health Facility
router.route("/manager-admin-health-facility").post(_controller.adminController.handleCreateOrEditManagerAdminHealth).get(_controller.adminController.handleGetManagerAdminHealth)["delete"](_controller.adminController.handleDeleteManagerAdminHealth);

// Examination Services
router.route("/examination-service").get(_controller.adminController.handleGetExaminationServices).post(_controller.adminController.handleCreateOrEditExaminationServices)["delete"](_controller.adminController.handleDeleteExaminationServices);

// Hospital Service
router.route("/hospital-service").get(_controller.adminController.handleGetHospitalService);

//api/test/admin/test-email
router.route("/test-email").get(_controller.adminController.handleTestEmail);

// Log
router.route("/log").post(_controller.adminController.handleTrigerLog);

// Chat
router.route("/chat/room-message").get(_controller.adminController.handleGetRoomMessage);
router.route("/chat/room").get(_controller.adminController.handleGetRoom);

// chart
router.route("/chart").get(_controller.adminController.handleGetChart);
var _default = router;
exports["default"] = _default;