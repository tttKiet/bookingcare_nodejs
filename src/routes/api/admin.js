import { adminController, userController } from "../../app/controller";
import { uploadAwsS3, verifyToken, verifyTokenAdmin } from "../../middleWares";
import express from "express";
const multer = require("multer");
const upload = multer();

const router = express.Router();

// Midde wares
// router.use(verifyToken);
// router.use(verifyTokenAdmin);

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

// Dash board information Health facilities
router.get(
  "/health-facilities/infomation/health-facilities-type",
  adminController.handleGetInfoTypeAndHealthFacilities
);

// HealthFacilities
const uploadWithLimit = uploadAwsS3.array("images", 3);
router.post(
  "/health-facilities",
  function (req, res, next) {
    uploadWithLimit(req, res, function (err) {
      if (err) {
        // your error handling goes here
        console.log(err);
        return res.status(401).json({
          msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng.",
        });
      }
      next();
    });
  },
  adminController.handleCreateHealthFacility
);
router.get("/health-facilities", adminController.handleGetHealthFacilities);
router.patch(
  "/health-facilities",
  function (req, res, next) {
    uploadWithLimit(req, res, function (err) {
      if (err) {
        // your error handling goes here
        return res.status(401).json({
          msg: err.message || "Vui lòng không tải ảnh vượt quá số lượng.",
        });
      }
      next();
    });
  },
  adminController.handleUpdateHealthFacility
);
router.delete("/health-facilities", adminController.handleDeleteHealthFacility);

// Specialist
router.get("/specialist", adminController.handleGetSpecialist);
router.get("/specialist/:id", adminController.handleGetSpecialistById);
router.post("/specialist", adminController.handleCreateOrUpdateSpecialist);
router.delete("/specialist", adminController.handleDeleteSpecialist);

// AcademicDegree
router.get("/academic-degree", adminController.handleGetAcademicDegree);
router.post(
  "/academic-degree",
  adminController.handleCreateOrUpdateAcademicDegree
);
router.delete("/academic-degree", adminController.handleDeleteAcademicDegree);

// Staff
router.get("/staff", adminController.handleGetStaff);

// Doctor
router.post("/staff", adminController.handleCreateOrUpdateStaff);

// Role
router.get("/role", adminController.handleGetRole);

export default router;
