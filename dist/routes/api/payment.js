"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("../../app/controller");
var _paymentController = _interopRequireDefault(require("../../app/controller/paymentController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /payment
var router = _express["default"].Router();

//[POST] /payment/vnpay/create_payment_url
router.post("/vnpay/create_payment_url", _controller.userController.handleBooking, _paymentController["default"].handleCreatePaymentVnpayUrl);
router.get("/vnpay/vnpay_return", _paymentController["default"].vnpay_return);

// only ssl https
router.get("/vnpay/vnpay_ipn", _paymentController["default"].vnpay_ipn);
var _default = router;
exports["default"] = _default;