"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = _interopRequireDefault(require("./auth"));
var _admin = _interopRequireDefault(require("./admin"));
var _user = _interopRequireDefault(require("./user"));
var _doctor = _interopRequireDefault(require("./doctor"));
var _manager = _interopRequireDefault(require("./manager"));
var _payment = _interopRequireDefault(require("./payment"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use("/auth", _auth["default"]);
router.use("/user", _user["default"]);
router.use("/admin", _admin["default"]);
router.use("/doctor", _doctor["default"]);
router.use("/manager", _manager["default"]);
router.use("/payment", _payment["default"]);
router.use("/test", _admin["default"]);
var _default = router;
exports["default"] = _default;