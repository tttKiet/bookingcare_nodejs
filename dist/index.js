"use strict";

var _cookieParser = _interopRequireDefault(require("cookie-parser"));
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _db = _interopRequireDefault(require("./config/db"));
var _routes = _interopRequireDefault(require("./routes"));
var _cors = _interopRequireDefault(require("cors"));
var _middleWares = require("./middleWares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// Logger browser
app.use((0, _morgan["default"])("dev"));
var corsOptions = {
  origin: ["http://127.0.0.1:3000", "https://sandbox.vnpayment.vn", "https://bookingcare-nextjs-e2hsxu9lb-tttkiets-projects.vercel.app/", "https://bookingcare-nextjs.vercel.app/", "https://bookingcare-nextjs.vercel.app"],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

// Connect to database
(0, _db["default"])();

// Use CookieParser
app.use((0, _cookieParser["default"])());

// Use Middaleware
app.use(_middleWares.handleError);

// Static files
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));

// Config routers
(0, _routes["default"])(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).send("Not Found!");
});
module.exports = app;