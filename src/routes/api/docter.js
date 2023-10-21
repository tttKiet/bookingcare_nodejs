import express from "express";
import { staffController } from "../../app/controller";

// /doctor
const router = express.Router();

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

export default router;
