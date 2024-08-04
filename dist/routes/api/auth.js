"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _controller = require("../../app/controller");
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/login", _controller.authController.handleLogin);
router.get("/logout", _controller.authController.handleLogout);
router.get("/fetch-profile", _controller.authController.handleFetchProfile);
var _default = router;
exports["default"] = _default;