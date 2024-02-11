let dotenvConfig = require("dotenv").config();

if (dotenvConfig.error) {
  console.log(".env file not found");
}

const config = {
  // NODE_ENV : process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "secret", // Change jwt_secret before production --- TODO
  JWT_EXPIRY: process.env.JWT_EXPIRY || "1w", // Reduce the expiry time before production --- TODO
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_AUTH_SOURCE: process.env.DB_AUTH_SOURCE,
  DB_NAME: process.env.DB_NAME,
  //AWS
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  S3_PROFILE_BUCKET: process.env.S3_PROFILE_BUCKET,
  REGION: process.env.REGION,
  //ZOOM credentials
  ZOOM_OAUTH_BASE_URL:
    process.env.ZOOM_OAUTH_BASE_URL || "https://zoom.us/oauth",
  ZOOM_REST_API_BASE_URL:
    process.env.ZOOM_REST_API_BASE_URL || "https://api.zoom.us/v2",
  ZOOM_USER_ID: process.env.ZOOM_USER_ID,
  ZOOM_ACCOUNT_ID: process.env.ZOOM_ACCOUNT_ID,
  ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
  ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,
  ZOOM_SECRET_TOKEN: process.env.ZOOM_SECRET_TOKEN, //Zoom sends the secret token in each event notification we send to your app. Note: This secret token is used to verify event notifications sent by Zoom.
  ZOOM_VERIFICATION_TOKEN: process.env.ZOOM_VERIFICATION_TOKEN, //Replace the Verification Token with Secret Token to verify event notifications from Zoom.
};

const CRUCIAL_ENVIRONMENT_VARIABLES = [
  "PORT",
  "JWT_SECRET",
  "JWT_EXPIRY",
  "ZOOM_OAUTH_BASE_URL",
  "ZOOM_REST_API_BASE_URL",
  "ZOOM_USER_ID",
  "ZOOM_CLIENT_ID",
  "ZOOM_CLIENT_SECRET",
  "ACCESS_KEY_ID",
  "SECRET_ACCESS_KEY",
  "S3_PROFILE_BUCKET",
  "REGION",
];

for (let variableItem of CRUCIAL_ENVIRONMENT_VARIABLES) {
  if (!config[variableItem]) {
    console.log(`Crucial env variable missing: ${variableItem}`);
  }
}

module.exports = config;
