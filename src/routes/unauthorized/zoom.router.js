const zoomRouter = require('express').Router()
const zoomUserRouter = require('./zoom.user.router');
const zoomMeetingRouter = require('./zoom.meeting.router');

zoomRouter.use('/user', zoomUserRouter )
zoomRouter.use('/meeting',zoomMeetingRouter)

module.exports = zoomRouter