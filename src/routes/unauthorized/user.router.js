const userRouter = require('express').Router()
const userController = require('../../controllers/userController')

userRouter.get('/get-user/:userId', userController.getUserByID); 
userRouter.get('/getAllUsers', userController.getUsers); 
userRouter.post('/createUser', userController.createUser); 
userRouter.put('/updateUser/:userId', userController.updateUser); 
userRouter.delete('/delete/:userId', userController.deleteUser); 


module.exports = userRouter