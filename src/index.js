import express from "express";
import path from "path";
import logger from "morgan";
import "dotenv/config";
import connectDb from "./config/db";
import router from "./routes";
import { handleError } from "./middleWares";

var app = express();

// Logger browser
app.use(logger("dev"));

// Parse body object from request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
connectDb();

// Use Middaleware
app.use(handleError);

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Config routers
router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).send("Not Found!");
});

module.exports = app;
