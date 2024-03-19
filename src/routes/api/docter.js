import express from "express";
import { staffController } from "../../app/controller";
import {
  verifyTokenAdmin,
  verifyTokenManager,
  verifyToken,
  requireLogin,
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

// router.get(
//   "/health-exam-schedule-full-info",
//   staffController.handleGetHealthExamScheduleFullInfor
// );

router.get("/working", staffController.handleGetDoctorWorking);

// Check up
// router
//   .route("/check-up")
//   .get(staffController.handleGet);

router
  .route("/check-up/health-record")
  .get(staffController.handleGetRecordCheckUp)
  .patch(verifyToken, requireLogin, staffController.handleEditStatus);

router.get("/chart/revenue", staffController.handleChartRevenue);

export default router;
