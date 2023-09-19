import { userController } from "../../app/controller";
import express from "express";
import { verifyToken } from "../../middleWares";
const router = express.Router();

// router.post("/", userController.handleRegister);
router.post("/", userController.handleCreateOrUpdateUser);
router.use(verifyToken);
router.get("/", userController.handleGetUser);
export default router;
