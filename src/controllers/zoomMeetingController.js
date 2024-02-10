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
        const creatingMeeting = await zoomMeetingHelper.createMeeting(userId);
        return responseSuccess(res, { ...creatingMeeting });
    } catch (error) {
        console.log("createUser -> userController -> error: ", error);
    }
};

module.exports = {
    createMeeting,
};

