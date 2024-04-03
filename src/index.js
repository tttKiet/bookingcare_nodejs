import express from "express";
import path from "path";
import logger from "morgan";
import "dotenv/config";
import connectDb from "./config/db";
import cookieParser from "cookie-parser";
import router from "./routes";
// import multer from "multer";
// import multerS3 from "multer-s3";
// import S3 from "aws-sdk/clients/s3";
import cors from "cors";
import { handleError } from "./middleWares";
var app = express();

// Logger browser
app.use(logger("dev"));

// Parse body object from request
// Cors

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const corsOptions = {
  origin: ["http://127.0.0.1:3000", "https://sandbox.vnpayment.vn", "*"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
connectDb();

// Use Middaleware
app.use(handleError);

// Use CookieParser
app.use(cookieParser());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Config routers
router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).send("Not Found!");
});

module.exports = app;
