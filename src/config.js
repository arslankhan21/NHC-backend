let dotenvConfig = require('dotenv').config()

if (dotenvConfig.error) {
    console.log('.env file not found')
}

const config = {
    // NODE_ENV : process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'secret', // Change jwt_secret before production --- TODO
    JWT_EXPIRY: process.env.JWT_EXPIRY || '1w', // Reduce the expiry time before production --- TODO
    ZOOM_OAUTH_BASE_URL: process.env.ZOOM_OAUTH_BASE_URL || 'https://zoom.us/oauth',
    ZOOM_REST_API_BASE_URL: process.env.ZOOM_REST_API_BASE_URL || 'https://api.zoom.us/v2',
    ZOOM_USER_ID: process.env.ZOOM_USER_ID,
    ZOOM_ACCOUNT_ID: process.env.ZOOM_ACCOUNT_ID,
    ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
    ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,
    ZOOM_SECRET_TOKEN: process.env.ZOOM_SECRET_TOKEN, //Zoom sends the secret token in each event notification we send to your app. Note: This secret token is used to verify event notifications sent by Zoom.
    ZOOM_VERIFICATION_TOKEN: process.env.ZOOM_VERIFICATION_TOKEN  //Replace the Verification Token with Secret Token to verify event notifications from Zoom.
}

const CRUCIAL_ENVIRONMENT_VARIABLES = ['PORT', 'JWT_SECRET', 'JWT_EXPIRY', 'ZOOM_OAUTH_BASE_URL' ,'ZOOM_REST_API_BASE_URL' ,'ZOOM_USER_ID' , 'ZOOM_CLIENT_ID' , 'ZOOM_CLIENT_SECRET' ]

for (let variableItem of CRUCIAL_ENVIRONMENT_VARIABLES) {
    if (!config[variableItem]) {
        console.log(`Crucial env variable missing: ${variableItem}`)
    }
}

module.exports = config
