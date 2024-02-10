const zoomMeetingRouter = require('express').Router();
const zoomMeetingController = require('../../controllers/zoomMeetingController');


zoomMeetingRouter.post('/create/:userId', zoomMeetingController.createMeeting); // create a zoom meeting for that user

module.exports = zoomMeetingRouter;