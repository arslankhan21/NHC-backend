const {
    responseSuccess,
    responseBadRequest,
    responseServerSideError,
  } = require("../utils/responseTypes");
  const ERRORS = require("../utils/errorTypes");
  const zoomUserHelper = require("../helpers/zoomUser.helper");

  const adminUser = async (req, res) => {
    try {
      console.log("req.auth: ", req.auth);
      const auth  = req.auth
      const data = await zoomUserHelper.getMe(auth);
      return responseSuccess(res, { ...data });
    } catch (error) {
      console.log("error: ", error);
      console.log("error.code: ",error.code , " error: ", {...error})
      if (error) {
        return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
      }
    }
  };

  const getZoomUserById = async (req, res) => {
    try {
      console.log("-----------req.params: ",req.params);
      const userId = req.params.userId
      const { auth } = req;
      const data = await zoomUserHelper.getZoomUserById(userId , auth);
      return responseSuccess(res, { ...data });
    } catch (error) {
      console.log("error.code: ",error.code , " error: ", {...error})
      if (error) {
        return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
      }
    }
  };

  const createZoomUser = async (req, res) => {
    try {
      const { email, first_name, last_name, password } = req.body;
      const { auth } = req;
      const createdUser = await zoomUserHelper.createZoomUser(
        email,
        first_name,
        last_name,
        password,
        auth
      );
      return responseSuccess(res, { ...createdUser });
    } catch (error) {
      console.log("createZoomUser -> zoomUserController -> error: ", error);
      console.log("error.code: ",error.code , " error: ", {...error})
      if (error) {
        return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
      }
    }
  };

  const deleteZoomUser = async (req, res) => {
    try{
      const { auth } = req
      const { userId } = req.params
      const result = await zoomUserHelper.deleteZoomUser(userId,auth);
      return responseSuccess(res, { ...result });
    }
    catch(error){
      console.log(error);
      console.log("error.code: ",error.code , " error: ", {...error})
      if (error) {
        return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
      }
    };
  };


  const getListOfZoomUsers = async (req, res) => {
    try {
      const { auth } = req
      const getAllZoomUsers = await zoomUserHelper.getUsers(auth);
      return responseSuccess(res, { ...getAllZoomUsers });
    } 
    catch (error) {
      console.log("error: " , error)
      console.log("error.code: ",error.code , " error: ", {...error})
      if (error) {
        return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
      }
    };
  };

  module.exports = {
    adminUser,
    getZoomUserById,
    getListOfZoomUsers,
    createZoomUser,
    deleteZoomUser
  };