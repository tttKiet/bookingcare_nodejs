import { userController } from "../../app/controller";
import express from "express";
import { requireLogin } from "../../middleWares";
const router = express.Router();

// router.post("/", userController.handleRegister);

// Patient Profile
router
  .route("/patient-profile")
  .get(requireLogin, userController.handleGetPatientProfile)
  .post(requireLogin, userController.handleCreateOrUpdatePatientProfile)
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

router.post("/", userController.handleCreateOrUpdateUser);
router.get("/", userController.handleGetUser);
export default router;
