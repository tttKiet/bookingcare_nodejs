import { s3 } from "../middleWares";
import nodemailer from "nodemailer";
import "dotenv/config";
import handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { Op, Sequelize } from "sequelize";

export function deleteImagesFromS3(keys) {
  return s3
    .deleteObjects({
      Bucket: "bookingcare-clound",
      Delete: {
        Objects: keys,
        Quiet: false, // Set Quiet to true if you want a quiet delete (no error if some objects don't exist)
      },
    })
    .promise();
}

export function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

export async function sendEmail({
  receiveEmail,
  srcHtml: filePath,
  replacements,
  subject = "Lịch đặt mới",
  fileAttachments = [],
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // console.log("__dirname", __dirname);
  // "/src/views/template/email_booking_2.html"

  const source = fs.readFileSync(filePath, "utf-8").toString();
  var template = handlebars.compile(source);
  var htmlToSend = template(replacements);
  try {
    const info = await transporter.sendMail({
      from: '"BOOKING CARE ➕" <schedule-sending>', // sender address
      to: receiveEmail, // list of receivers
      subject: subject,
      html: htmlToSend, // html body
      attachments: fileAttachments,
    });

    return Promise.resolve(info);
  } catch (e) {
    return Promise.reject(e);
  }
}

export function removeAccentsAndLowerCase(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function searchLikeDeep(dbName, colName, value) {
  console.log();
  const wordsToSearch = removeAccentsAndLowerCase(value)
    .split(/\s+/)
    .filter(Boolean);
  const wordConditions = wordsToSearch.map((word) =>
    Sequelize.where(
      Sequelize.fn("unaccent", Sequelize.col(`${dbName}.${colName}`)),
      {
        [Op.iLike]: Sequelize.fn("unaccent", "%" + word + "%"),
      }
    )
  );
  return { [Op.and]: wordConditions };
}
