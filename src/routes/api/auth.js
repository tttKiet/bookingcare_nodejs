import { authController } from "../../app/controller";
import express from "express";
const router = express.Router();

router.post("/login", authController.handleLogin);
router.get("/logout", authController.handleLogout);
router.get("/fetch-profile", authController.handleFetchProfile);

export default router;
