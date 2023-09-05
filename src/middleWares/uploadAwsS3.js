import multer from "multer";
import multerS3 from "multer-s3";
import S3 from "aws-sdk/clients/s3";
import "dotenv/config";

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_AWS_S3,
    secretAccessKey: process.env.SECRET_KEY_AWS_S3,
  },
  region: process.env.REGION_AWS_S3,
});

const uploadAwsS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "bookingcare-clound",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export { uploadAwsS3, s3 };
