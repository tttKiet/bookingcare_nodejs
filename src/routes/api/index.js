import authRouter from "./auth";
import adminRouter from "./admin";
import userRouter from "./user";
import express from "express";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);

export default router;
