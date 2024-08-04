"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _controller = require("../../app/controller");
var _express = _interopRequireDefault(require("express"));
var _middleWares = require("../../middleWares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// router.post("/", userController.handleRegister);

// Patient Profile
router.route("/patient-profile").get(_middleWares.requireLogin, _controller.userController.handleGetPatientProfile).post(_middleWares.verifyToken, _middleWares.requireLogin, _controller.userController.handleCreateOrUpdatePatientProfile)["delete"](_middleWares.requireLogin, _controller.userController.handleDeletePatientProfile);

// Booking and record
router.route("/booking").post(_middleWares.requireLogin, _controller.userController.handleBooking).get(_middleWares.requireLogin, _controller.userController.handleGetBooking);

// router
//   .route("/health-record")
//   .get(requireLogin, userController.handleGetHealthRecord);

// Get list doc tor working and schedule, price
router.get("/list-doctor-working-health", _controller.userController.getDoctorWorkingOfHealth);
router.get("/check-up-last-of-doctor", _controller.userController.getBookingLastStaff);
router.post("/", _controller.userController.handleCreateOrUpdateUser);
router.get("/", _controller.userController.handleGetUser);

// review
router.route("/review/index").get(_controller.userController.handleGetReviewIndex);
router.route("/review").get(_controller.userController.handleGetReview).post(_middleWares.requireLogin, _controller.userController.handleCreateOrUpdateReview)["delete"](_controller.userController.handleDeleteReview);
router.route("/health-facility/review/index").get(_controller.userController.handleGetReviewIndexHealth);
router.route("/health-facility/review").get(_controller.userController.handleGetReviewHealth);

// medical-record
router.route("/medical-record").get(_controller.userController.handleGetMedicalRecord);

// account
router.route("/change-pass").post(_controller.userController.handleChangePass);

// home
// index 1
router.get("/index", _controller.userController.handleGetIndex);
var _default = router;
exports["default"] = _default;