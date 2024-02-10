const unauthorized = require('express').Router();
const userRouter = require('./user.router')
const boothRouter = require('./booth.router')
const zoomRouter = require('./zoom.router')

unauthorized.use('/user', userRouter)
unauthorized.use('/booth', boothRouter)
unauthorized.use('/zoom', zoomRouter)

module.exports = unauthorized