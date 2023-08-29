import { adminController } from "../../app/controller";
import express from "express";
const router = express.Router();

// TypeHealthFacilities
router.post(
  "/health-facilities/type",
  adminController.handleCreateTypeHealthFacilities
);
router.get(
  "/health-facilities/type",
  adminController.handleGetTypeHealthFacilities
);

router.patch(
  "/health-facilities/type",
  adminController.handleUpdateTypeHealthFacilities
);

router.delete(
  "/health-facilities/type",
  adminController.handleDeleteTypeHealthFacilities
);
export default router;
