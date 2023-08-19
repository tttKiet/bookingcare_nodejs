import { userController } from "../../app/controller";
import express from "express";
const router = express.Router();

router.post("/register", userController.handleRegister);

export default router;
