import express from "express";
import path from "path";
import logger from "morgan";
import "dotenv/config";
import { createError } from "http-errors";
import connectDb from "./config/db";
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
