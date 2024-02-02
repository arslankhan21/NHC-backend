const unauthorized = require('express').Router();
const userRouter = require('./user.router')

unauthorized.use('/user', userRouter)

module.exports = unauthorized