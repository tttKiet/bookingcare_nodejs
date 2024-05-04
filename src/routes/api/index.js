import authRouter from "./auth";
import adminRouter from "./admin";
import userRouter from "./user";
import doctorRouter from "./doctor";
import managerRouter from "./manager";
import paymentRouter from "./payment";
import express from "express";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/doctor", doctorRouter);
router.use("/manager", managerRouter);
router.use("/payment", paymentRouter);
router.use("/test", adminRouter);

export default router;
