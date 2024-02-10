const boothRouter = require('express').Router()
const boothController = require('../../controllers/boothController')

boothRouter.get('/get-booth/:boothId', boothController.getBoothByID); 
boothRouter.get('/getAllBooths', boothController.getBooths); 

boothRouter.post('/createBooth', boothController.createBooth); 

boothRouter.put('/updateBooth/:boothId', boothController.updateBooth); 

boothRouter.delete('/delete/:boothId', boothController.deleteBooth); 


module.exports = boothRouter