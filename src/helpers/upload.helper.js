// Import the AWS SDK for interacting with Amazon S3
const AWS = require("aws-sdk");

// Import AWS credentials and configuration constants
const {
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY,
  REGION,
  S3_PROFILE_BUCKET,
} = require("../config");
console.log(ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, S3_PROFILE_BUCKET);
// Import custom error types for error handling
const ERRORS = require("../utils/errorTypes");

// Configure AWS SDK with access credentials and region
AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION, // Replace with your desired region
});
const s3 = new AWS.S3();

const uploadFileToS3 = async (file) => {
  console.log(file);
  try {
    // Generate a unique file name suffix
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    // Determine the directory based on the MIME type
    let directory = "files"; // Default directory
    if (file.mimetype.startsWith("image/")) {
      directory = "images";
    } else if (file.mimetype === "application/pdf") {
      directory = "pdfs";
    }
    // Construct the S3 key with the directory and unique file name
    const key = `${directory}/${uniqueSuffix}-${file.originalname}`;
    console.log(key, "<==key");
    const params = {
      Bucket: S3_PROFILE_BUCKET,
      Key: key,
      ACL: "public-read",
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    // Use the AWS SDK to upload the file to the specified S3 bucket
    const data = await s3.upload(params).promise();
    // Return the URL of the uploaded file for public access
    return data.Location;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error(ERRORS.S3_UPLOAD_FAILED.CODE);
  }
};

module.exports = {
  uploadFileToS3,
};
