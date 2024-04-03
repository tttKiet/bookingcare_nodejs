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
