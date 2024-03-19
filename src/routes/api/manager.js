import express from "express";
import { managerController, staffController } from "../../app/controller";
import {
  verifyTokenAdmin,
  verifyTokenManager,
  verifyToken,
  requireLogin,
} from "../../middleWares";

// /manager
const router = express.Router();

// Hospital services
router
  .route("/hospital-services")
  .get(managerController.handleGetHospitalServices)
  .post(managerController.handleCreateOrUpdateHospitalServices)
  .delete(managerController.handleDeleteHospitalServices);

export default router;
