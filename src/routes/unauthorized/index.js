const unauthorized = require('express').Router();
const userRouter = require('./user.router')
const boothRouter = require('./booth.router')

unauthorized.use('/user', userRouter)
unauthorized.use('/booth', boothRouter)

module.exports = unauthorized