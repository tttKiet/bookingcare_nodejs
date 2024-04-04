import { s3 } from "../middleWares";
import nodemailer from "nodemailer";
import "dotenv/config";
import handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";

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
  // const replacements = {
  //   name: "Cat",
  //   time: "22h",
  //   date: "22/4",
  //   doctor: "Bui Kiet",
  //   location: "Ha Noi",
  // };
  var htmlToSend = template(replacements);
  try {
    const info = await transporter.sendMail({
      from: '"Health Facility - Schedule ➕" <schedule-sending>', // sender address
      to: receiveEmail, // list of receivers
      subject: "Information",
      html: htmlToSend, // html body
    });
    console.log("info", info);

    return Promise.resolve(info);
  } catch (e) {
    return Promise.reject(e);
  }
}
