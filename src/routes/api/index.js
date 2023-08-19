import authRoter from "./auth";
import userRoter from "./user";
import express from "express";
const router = express.Router();

router.use("/auth", authRoter);
router.use("/user", userRoter);

export default router;
