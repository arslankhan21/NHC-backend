const {
  responseSuccess,
  responseBadRequest,
  responseServerSideError,
} = require("../utils/responseTypes");
const ERRORS = require("../utils/errorTypes");
const conferenceHelper = require("../helpers/conference.helper");

const createConference = async (req, res) => {
  try {
    const conference = await conferenceHelper.createConference(req.body);
    return responseSuccess(res, conference);
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const getConferenceById = async (req, res) => {
  try {
    const { id } = req.params;
    const conference = await conferenceHelper.getConferenceById(id);
    return responseSuccess(res, conference);
  } catch (error) {
    console.log(error);
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const getAllConferences = async (req, res) => {
  try {
    const conferences = await conferenceHelper.getAllConferences();
    return responseSuccess(res, conferences);
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const updateConference = async (req, res) => {
  try {
    const { id } = req.params;
    const conference = await conferenceHelper.updateConference(id, req.body);
    return responseSuccess(res, conference);
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const deleteConference = async (req, res) => {
  try {
    const { id } = req.params;
    await conferenceHelper.deleteConference(id);
    return responseSuccess(res, { message: "Conference deleted successfully" });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

module.exports = {
  createConference,
  getConferenceById,
  getAllConferences,
  updateConference,
  deleteConference,
};
