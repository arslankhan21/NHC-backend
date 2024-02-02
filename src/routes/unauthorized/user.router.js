const userRouter = require('express').Router()
const userController = require('../../controllers/userController')

// POST REQUEST ROUTES OF USER FOR UNAUTHORIZED USER
userRouter.get('/me', userController.my)

module.exports = userRouter