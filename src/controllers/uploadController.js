const {
  responseSuccess,
  responseBadRequest,
  responseServerSideError,
} = require("../utils/responseTypes");
const ERRORS = require("../utils/errorTypes");
const { uploadFileToS3 } = require("../helpers/upload.helper");

const uploadImage = async (req, res) => {
  try {
    // Extract uploaded file from request
    const file = req.file;

    // Upload picture to S3 bucket and update user details
    const imageLink = await uploadFileToS3(file);

    return responseSuccess(res, { imageLink });
  } catch (error) {
    // Handling errors and sending appropriate responses
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

module.exports = {
  uploadImage,
};
