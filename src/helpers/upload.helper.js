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

// Async function to upload an image file to Amazon S3 bucket
const uploadImageToS3 = async (file) => {
  console.log(file);
  try {
    // const imageBuffer = Buffer.from(await imageBlob.arrayBuffer());
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const key = `images/${uniqueSuffix}-${file.originalname}`;

    const params = {
      Bucket: S3_PROFILE_BUCKET,
      Key: key,
      ACL: "public-read",
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    // Use the AWS SDK to upload the file to the specified S3 bucket
    const data = await s3.upload(params).promise();
    // Return the URL of the uploaded image for public access
    return data.Location;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    throw new Error(ERRORS.S3_UPLOAD_FAILED.CODE);
  }
};

module.exports = {
  uploadImageToS3,
};
