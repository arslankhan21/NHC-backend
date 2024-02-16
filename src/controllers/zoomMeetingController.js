const {
  responseSuccess,
  responseBadRequest,
  responseServerSideError,
} = require("../utils/responseTypes");
const ERRORS = require("../utils/errorTypes");
const zoomMeetingHelper = require("../helpers/zoomMeeting.helper");


const createMeeting = async (req, res) => {
  try {
    console.log("createMeeting -> req.params: ", req.params)
    const { userId } = req.params;
    const { auth } = req.auth;
    const creatingMeeting = await zoomMeetingHelper.createMeeting(userId ,auth);
    return responseSuccess(res, { ...creatingMeeting });
  } catch (error) {
    console.log("createUser -> userController -> error: ", error);
    if (error) {
      return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
    }
  }
};

const listOfUserMeetings = async (req, res) => {
  try{
    const { userId } = req.params;
    const { auth } = req.auth;
    console.log("List of user: " , userId);
    const listOfMeetings = await zoomMeetingHelper.userMeetings(userId ,auth);
    return responseSuccess(res, { ...listOfMeetings });
  }
  catch(error){
    console.log("listOfUserMeetings -> zoomUserController -> error: ", error);
    if (error) {
      return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
    }
  }
};

const getOneMeeting = async (req, res) => {
  try{
    const { meetingId } = req.params
    const { auth } = req.auth;
    const result = await zoomMeetingHelper.getMeeting(meetingId,auth)
    return responseSuccess(res, { ...result });
  }
  catch(error){
    console.log("getOneMeeting -> zoomUserController -> error: ", error);
    if (error) {
      return responseBadRequest(res, ERRORS.ZOOM_AXIOS_ERROR)
    }
  };
}

module.exports = {
  createMeeting,
  getOneMeeting,
  listOfUserMeetings
};