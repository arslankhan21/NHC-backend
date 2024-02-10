const zoomUserRouter = require('express').Router();
const zoomUserController = require('../../controllers/zoomUserController');

zoomUserRouter.get('/me', zoomUserController.adminUser);
zoomUserRouter.get('/:userId', zoomUserController.getZoomUserById)
zoomUserRouter.post('/', zoomUserController.createZoomUser); // create a user on the zoom APP Marketplace

module.exports = zoomUserRouter