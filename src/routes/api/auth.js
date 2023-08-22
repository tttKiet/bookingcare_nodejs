import { authController } from "../../app/controller";
import express from "express";
import { verifyToken } from "../../middleWares";
const router = express.Router();

router.post("/login", authController.handleLogin);
router.get("/logout", authController.handleLogout);
router.get("/fetch-profile", verifyToken, authController.handleFetchProfile);

export default router;
