import express from "express";
import { userController } from "../../app/controller";
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

// only ssl https
router.get("/vnpay/vnpay_ipn", paymentController.vnpay_ipn);

export default router;
