const {
  responseBadRequest,
  responseServerSideError,
  responseSuccess,
} = require("../utils/responseTypes");
const analyticsHelper = require("../helpers/analytics.helper");
const ERRORS = require("../utils/errorTypes");

const createAnalytics = async (req, res) => {
  try {
    const createdAnalytics = await analyticsHelper.createAnalytics(req.body);
    return responseSuccess(res, { ...createdAnalytics });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const getAnalyticsBySearch = async (req, res) => {
  try {
    const { page, limit, ...query } = req.query;
    const analytics = await analyticsHelper.getAnalyticsBySearch(
      { page, limit },
      { ...query }
    );
    return responseSuccess(res, analytics);
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

module.exports = {
  createAnalytics,
  getAnalyticsBySearch,
};
