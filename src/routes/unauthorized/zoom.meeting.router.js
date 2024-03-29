const zoomMeetingRouter = require('express').Router();
const zoomMeetingController = require('../../controllers/zoomMeetingController');


zoomMeetingRouter.post('/create/:userId', zoomMeetingController.createMeeting); // create a zoom meeting for that user
zoomMeetingRouter.get('/list/:userId', zoomMeetingController.listOfUserMeetings);
zoomMeetingRouter.get('/get/:meetingId', zoomMeetingController.getOneMeeting);

module.exports = zoomMeetingRouter;