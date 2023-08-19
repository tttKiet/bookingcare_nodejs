import { authController } from "../../app/controller";
import express from "express";
const router = express.Router();

router.get("/login", authController.handleLogin);
router.get("/logout", authController.handleLogin);
router.get("/fetch-user-login", authController.handleLogin);

export default router;
