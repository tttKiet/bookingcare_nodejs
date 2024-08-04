"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadAwsS3 = exports.s3 = exports.localPdfLoader = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _multerS = _interopRequireDefault(require("multer-s3"));
var _s = _interopRequireDefault(require("aws-sdk/clients/s3"));
require("dotenv/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var s3 = new _s["default"]({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_AWS_S3,
    secretAccessKey: process.env.SECRET_KEY_AWS_S3
  },
  region: process.env.REGION_AWS_S3
});
exports.s3 = s3;
var uploadAwsS3 = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    bucket: "bookingcare-clound",
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
exports.uploadAwsS3 = uploadAwsS3;
var localPdfLoader = (0, _multer["default"])();
exports.localPdfLoader = localPdfLoader;