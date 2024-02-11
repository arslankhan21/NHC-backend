const {
  responseSuccess,
  responseBadRequest,
  responseServerSideError,
} = require("../utils/responseTypes");
const ERRORS = require("../utils/errorTypes");
const boothHelper = require("../helpers/booth.helper");

const createBooth = async (req, res) => {
  try {
    const createdBooth = await boothHelper.createBooth(req.body);
    return responseSuccess(res, { ...createdBooth });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const getBoothByID = async (req, res) => {
  try {
    const { boothId } = req.params;
    const booth = await boothHelper.getBoothByID(boothId);
    console.log(booth);
    return responseSuccess(res, { ...booth?._doc });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const getBooths = async (req, res) => {
  try {
    const booth = await boothHelper.getBooths();
    console.log(booth, "<==booth");
    return responseSuccess(res, booth);
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const updateBooth = async (req, res) => {
  try {
    const { boothId } = req.params;
    const booth = await boothHelper.updateBooth(boothId, req.body);
    return responseSuccess(res, { ...booth?._doc });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

const deleteBooth = async (req, res) => {
  try {
    const { boothId } = req.params;
    const booth = await boothHelper.deleteBooth(boothId);
    return responseSuccess(res, { ...booth?._doc });
  } catch (error) {
    if (ERRORS[error.message]) {
      return responseBadRequest(res, ERRORS[error.message]);
    }
    return responseServerSideError(res, error);
  }
};

module.exports = {
  createBooth,
  getBoothByID,
  getBooths,
  updateBooth,
  deleteBooth,
};
