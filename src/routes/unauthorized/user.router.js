const userRouter = require('express').Router()
const userController = require('../../controllers/userController')

// POST REQUEST ROUTES OF USER FOR UNAUTHORIZED USER
userRouter.get('/me', userController.my)
userRouter.post('/', userController.createUser); // create a user on the zoom APP Marketplace
userRouter.post('/create-meeting', userController.createMeeting); // create a zoom meeting for that user
module.exports = userRouter