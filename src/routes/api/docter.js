import { adminController } from "../../app/controller";
import { uploadAwsS3, verifyToken, verifyTokenAdmin } from "../../middleWares";
import express from "express";
const multer = require("multer");
const upload = multer();

// /doctor
const router = express.Router();

// Health Examination Schedule
router
  .route("/health-exam-schedule")
  .get(adminController.handleGetHealthExamSchedule)
  .post(adminController.handleCreateOrUpdateHealthExamSchedule)
  .delete(adminController.handleDeleteHealthExamSchedule);

export default router;
