const userRouter = require('express').Router()
const userController = require('../../controllers/userController')

userRouter.get('/me', userController.my)
userRouter.get('/get-user/:userId', userController.getUserByID); 
userRouter.get('/getAllUsers', userController.getUsers); 

userRouter.post('/', userController.createMeetingUser); // create a user on the zoom APP Marketplace
userRouter.post('/create-meeting', userController.createMeeting); // create a zoom meeting for that user
userRouter.post('/createUser', userController.createUser); 


userRouter.put('/updateUser/:userId', userController.updateUser); 

userRouter.delete('/delete/:userId', userController.deleteUser); 


module.exports = userRouter