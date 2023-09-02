import { s3 } from "../middleWares";

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
