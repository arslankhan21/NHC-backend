const zoomUserRouter = require('express').Router();
const zoomUserController = require('../../controllers/zoomUserController');

zoomUserRouter.get('/me', zoomUserController.adminUser);
zoomUserRouter.get('/get/:userId', zoomUserController.getZoomUserById)
zoomUserRouter.post('/', zoomUserController.createZoomUser); // create a user on the zoom APP Marketplace
zoomUserRouter.get('/get-all', zoomUserController.getListOfZoomUsers);
zoomUserRouter.delete('/delete/:userId', zoomUserController.deleteZoomUser);

module.exports = zoomUserRouter