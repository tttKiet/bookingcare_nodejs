"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "adminServices", {
  enumerable: true,
  get: function get() {
    return _adminService["default"];
  }
});
Object.defineProperty(exports, "authServices", {
  enumerable: true,
  get: function get() {
    return _authServices["default"];
  }
});
Object.defineProperty(exports, "healthFacilitiesServices", {
  enumerable: true,
  get: function get() {
    return _healthFacilitiesServices["default"];
  }
});
Object.defineProperty(exports, "managerServices", {
  enumerable: true,
  get: function get() {
    return _managerServices["default"];
  }
});
Object.defineProperty(exports, "staffServices", {
  enumerable: true,
  get: function get() {
    return _staffServices["default"];
  }
});
Object.defineProperty(exports, "userServices", {
  enumerable: true,
  get: function get() {
    return _userServices["default"];
  }
});
Object.defineProperty(exports, "workServices", {
  enumerable: true,
  get: function get() {
    return _workServices["default"];
  }
});
var _userServices = _interopRequireDefault(require("./userServices"));
var _authServices = _interopRequireDefault(require("./authServices"));
var _healthFacilitiesServices = _interopRequireDefault(require("./healthFacilitiesServices"));
var _staffServices = _interopRequireDefault(require("./staffServices"));
var _workServices = _interopRequireDefault(require("./workServices"));
var _adminService = _interopRequireDefault(require("./adminService"));
var _managerServices = _interopRequireDefault(require("./managerServices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }