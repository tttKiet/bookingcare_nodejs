import { adminController } from "../../app/controller";
import { uploadAwsS3 } from "../../middleWares";
import express from "express";
const multer = require("multer");
const upload = multer();

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
        return res
          .status(401)
          .json({
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
// router.delete(
//   "/health-facilities",
//   adminController.handleCreateHealthFacilities
// );
export default router;
