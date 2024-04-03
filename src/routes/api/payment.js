import express from "express";
import {
  managerController,
  staffController,
  userController,
} from "../../app/controller";
import {
  verifyTokenAdmin,
  verifyTokenManager,
  verifyToken,
  requireLogin,
} from "../../middleWares";
import paymentController from "../../app/controller/paymentController";

// /payment
const router = express.Router();

//[POST] /payment/vnpay/create_payment_url
router.post(
  "/vnpay/create_payment_url",
  userController.handleBooking,
  paymentController.handleCreatePaymentVnpayUrl
);

router.get("/vnpay/vnpay_return", paymentController.vnpay_return);
// router.get("/vnpay/vnpay_return", paymentController.vnpay_return);

export default router;
