"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("../../app/controller");
var _middleWares = require("../../middleWares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /manager
var router = _express["default"].Router();

// Hospital services
router.route("/hospital-services").get(_controller.managerController.handleGetHospitalServices).post(_controller.managerController.handleCreateOrUpdateHospitalServices)["delete"](_controller.managerController.handleDeleteHospitalServices);
var _default = router;
exports["default"] = _default;