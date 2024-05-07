import { userController } from "../../app/controller";
import express from "express";
import { requireLogin, verifyToken } from "../../middleWares";
const router = express.Router();

// router.post("/", userController.handleRegister);

// Patient Profile
router
  .route("/patient-profile")
  .get(requireLogin, userController.handleGetPatientProfile)
  .post(
    verifyToken,
    requireLogin,
    userController.handleCreateOrUpdatePatientProfile
  )
  .delete(requireLogin, userController.handleDeletePatientProfile);

// Booking and record
router
  .route("/booking")
  .post(requireLogin, userController.handleBooking)
  .get(requireLogin, userController.handleGetBooking);

// router
//   .route("/health-record")
//   .get(requireLogin, userController.handleGetHealthRecord);

// Get list doc tor working and schedule, price
router.get(
  "/list-doctor-working-health",
  userController.getDoctorWorkingOfHealth
);

router.get("/check-up-last-of-doctor", userController.getBookingLastStaff);

router.post("/", userController.handleCreateOrUpdateUser);
router.get("/", userController.handleGetUser);

// review
router
  .route("/review/index")
  .get(requireLogin, userController.handleGetReviewIndex);
router
  .route("/review")
  .get(requireLogin, userController.handleGetReview)
  .post(requireLogin, userController.handleCreateOrUpdateReview)
  .delete(userController.handleDeleteReview);

router
  .route("/health-facility/review/index")
  .get(userController.handleGetReviewIndexHealth);
router
  .route("/health-facility/review")
  .get(userController.handleGetReviewHealth);

// medical-record
router.route("/medical-record").get(userController.handleGetMedicalRecord);

// account
router.route("/change-pass").post(userController.handleChangePass);

// home
// index 1
router.get("/index", userController.handleGetIndex);

export default router;
