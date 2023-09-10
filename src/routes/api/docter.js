import { adminController } from "../../app/controller";
import { uploadAwsS3, verifyToken, verifyTokenAdmin } from "../../middleWares";
import express from "express";
const multer = require("multer");
const upload = multer();

const router = express.Router();
