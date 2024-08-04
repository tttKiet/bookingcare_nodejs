"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("../../app/controller");
var _middleWares = require("../../middleWares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /doctor
var router = _express["default"].Router();
router.route("/health-exam-schedule/doctor").get(_controller.staffController.getHealthExamScheduleForDoctor);
router.route("/register-schedule").post(_controller.staffController.registerSchedule)["delete"](_controller.staffController.deleteSchedule);

// get all
router.route("/health-exam-schedule/all").get(_controller.staffController.handleGetHealthExamScheduleAll);

// Health Examination Schedule
router.route("/health-exam-schedule").get(_controller.staffController.handleGetHealthExamSchedule).post(_controller.staffController.handleCreateOrUpdateHealthExamSchedule)["delete"](_controller.staffController.handleDeleteHealthExamSchedule);

// booking
router.route("/booking").get(_middleWares.verifyToken, _controller.staffController.handleGetBooking).post(_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleEditStatusBooking);

// router.get(
//   "/health-exam-schedule-full-info",
//   staffController.handleGetHealthExamScheduleFullInfor
// );

router.get("/working", _controller.staffController.handleGetDoctorWorking);
router.route("/check-up/health-record/done").post(_middleWares.localPdfLoader.array("pdf", 2),
// verifyToken,
// requireLogin,
_controller.staffController.handleEditHealthRecordAndDone);
router.route("/check-up/health-record").get(_controller.staffController.handleGetRecordCheckUp).post(_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleCreateHealthRecord).patch(_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleEditHealthRecord);

// Patient
router.route("/patient").post(_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleCreateOrUpdatePatient).get(_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleGetPatient)["delete"](_middleWares.verifyToken, _middleWares.requireLogin, _controller.staffController.handleDeletePatient);

// ServiceDetails
router.route("/service-details").post(_controller.staffController.handleCreateEditServiceDetails).get(_controller.staffController.handleGetServiceDetails)["delete"](_controller.staffController.handleDeleteServiceDetails);

// PrescriptionDetails
router.route("/prescription-details").post(_controller.staffController.handleCreateEditPrescriptionDetails).get(_controller.staffController.handleGetPrescriptionDetails)["delete"](_controller.staffController.handleDeletePrescriptionDetails);
router.get("/chart/revenue", _controller.staffController.handleChartRevenue);
var _default = router;
exports["default"] = _default;