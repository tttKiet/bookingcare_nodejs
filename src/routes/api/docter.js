import { adminController, staffController } from "../../app/controller";
import { uploadAwsS3, verifyToken, verifyTokenAdmin } from "../../middleWares";
import express from "express";
import { staffServices } from "../../services";
const multer = require("multer");
const upload = multer();

// /doctor
const router = express.Router();

// Health Examination Schedule
router
  .route("/health-exam-schedule")
  .get(staffController.handleGetHealthExamSchedule)
  .post(staffController.handleCreateOrUpdateHealthExamSchedule)
  .delete(staffController.handleDeleteHealthExamSchedule);

router.get("/working", staffController.handleGetDoctorWorking);

export default router;
