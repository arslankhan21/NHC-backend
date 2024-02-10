const {
    responseSuccess,
    responseBadRequest,
    responseServerSideError,
  } = require("../utils/responseTypes");
  const ERRORS = require("../utils/errorTypes");
  const zoomUserHelper = require("../helpers/zoomUser.helper");

  const adminUser = async (req, res) => {
    try {
      const data = await zoomUserHelper.getMe();
      return responseSuccess(res, { ...data });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getZoomUserById = async (req, res) => {
    try {
      console.log("-----------req.params: ",req.params);
      const userId = req.params.userId
      const data = await zoomUserHelper.getZoomUserById(userId)
      return responseSuccess(res, { ...data });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createZoomUser = async (req, res) => {
    try {
      const { email, first_name, last_name, password } = req.body;
      const createdUser = await zoomUserHelper.createZoomUser(
        email,
        first_name,
        last_name,
        password
      );
      return responseSuccess(res, { ...createdUser });
    } catch (error) {
      console.log("createZoomUser -> zoomUserController -> error: ", error);
      throw new Error(error);
    }
  };

  const getListOfZoomUsers = async (req, res) => {
    try {
      const getAllZoomUsers = await zoomUserHelper.getUsers();
      return responseSuccess(res, { ...getAllZoomUsers });
    } 
    catch (error) {
      console.log("error: " , error)
      throw new Error(error);
    };
  };

  module.exports = {
    adminUser,
    getZoomUserById,
    getListOfZoomUsers,
    createZoomUser
  };