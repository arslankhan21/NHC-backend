const {
  responseSuccess,
  responseBadRequest,
  responseServerSideError,
} = require("../utils/responseTypes");
const ERRORS = require("../utils/errorTypes");
const userHelper = require("../helpers/user.helper");

const createUser = async (req, res) => {
    try {
      const createdUser = await userHelper.createUser(req.body);
      return responseSuccess(res, { ...createdUser });
    } catch (error) { 
        if (ERRORS[error.message]) {
            return responseBadRequest(res, ERRORS[error.message])
        }
        return responseServerSideError(res, error)
  }
  };

const getUserByID = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userHelper.getUserByID(userId);
    console.log(user);
    return responseSuccess(res, { ...user?._doc });
  } catch (error) {
    if (ERRORS[error.message]) {
        return responseBadRequest(res, ERRORS[error.message])
    }
    return responseServerSideError(res, error)
}
};

const getUsers = async (req, res) => {
  try {
    const user = await userHelper.getUsers();
    return responseSuccess(res, { ...user });
  } catch (error) {
    if (ERRORS[error.message]) {
        return responseBadRequest(res, ERRORS[error.message])
    }
    return responseServerSideError(res, error)
}
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userHelper.updateUser(userId, req.body);
    return responseSuccess(res, { ...user?._doc });
  } catch (error) {
    if (ERRORS[error.message]) {
        return responseBadRequest(res, ERRORS[error.message])
    }
    return responseServerSideError(res, error)
}
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userHelper.deleteUser(userId);
    return responseSuccess(res, { ...user?._doc });
  } catch (error) {   
    if (ERRORS[error.message]) {
        return responseBadRequest(res, ERRORS[error.message])
    }
    return responseServerSideError(res, error)
}
};

module.exports = {
  createUser,
  getUserByID,
  getUsers,
  updateUser,
  deleteUser,
};
