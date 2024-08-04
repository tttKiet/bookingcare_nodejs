import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import logger from "morgan";
import path from "path";
import connectDb from "./config/db";
import router from "./routes";
import cors from "cors";

import { handleError } from "./middleWares";

var app = express();

// Logger browser
app.use(logger("dev"));

const corsOptions = {
  origin: [
    "http://127.0.0.1:3000",
    "https://sandbox.vnpayment.vn",
    "https://bookingcare-nextjs-e2hsxu9lb-tttkiets-projects.vercel.app/",
    "https://bookingcare-nextjs.vercel.app",
  ],
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
