"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _middleWares = require("../middleWares");
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = function router(app) {
  app.use(_middleWares.verifyToken);
  app.use("/api/v1", _api["default"]);

  // Hello world
  app.use("/", function (req, res) {
    res.send("Route not found!");
  });
};
var _default = router;
exports["default"] = _default;