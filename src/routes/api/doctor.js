import express from "express";
import { staffController } from "../../app/controller";
import {
  verifyTokenAdmin,
  verifyTokenManager,
  verifyToken,
  requireLogin,
  localPdfLoader,
} from "../../middleWares";

// /doctor
const router = express.Router();

router
  .route("/health-exam-schedule/doctor")
  .get(staffController.getHealthExamScheduleForDoctor);

// Health Examination Schedule
router
  .route("/health-exam-schedule")
  .get(staffController.handleGetHealthExamSchedule)
  .post(staffController.handleCreateOrUpdateHealthExamSchedule)
  .delete(staffController.handleDeleteHealthExamSchedule);

// booking
router
  .route("/booking")
  .get(staffController.handleGetBooking)
  .post(staffController.handleEditStatusBooking);

// router.get(
//   "/health-exam-schedule-full-info",
//   staffController.handleGetHealthExamScheduleFullInfor
// );

router.get("/working", staffController.handleGetDoctorWorking);

// --------------------
// Check up
// router
//   .route("/check-up")
//   .get(staffController.handleGet);

router.route("/check-up/health-record/done").post(
  localPdfLoader.array("pdf", 2),
  // verifyToken,
  // requireLogin,
  staffController.handleEditHealthRecordAndDone
);

router
  .route("/check-up/health-record")
  .get(staffController.handleGetRecordCheckUp)
  .post(verifyToken, requireLogin, staffController.handleCreateHealthRecord)
  .patch(verifyToken, requireLogin, staffController.handleEditHealthRecord);

// Patient
router
  .route("/patient")
  .post(staffController.handleCreateOrUpdatePatient)
  .get(staffController.handleGetPatient);

// ServiceDetails
router
  .route("/service-details")
  .post(staffController.handleCreateEditServiceDetails)
  .get(staffController.handleGetServiceDetails)
  .delete(staffController.handleDeleteServiceDetails);

// PrescriptionDetails
router
  .route("/prescription-details")
  .post(staffController.handleCreateEditPrescriptionDetails)
  .get(staffController.handleGetPrescriptionDetails)
  .delete(staffController.handleDeletePrescriptionDetails);

router.get("/chart/revenue", staffController.handleChartRevenue);

export default router;
