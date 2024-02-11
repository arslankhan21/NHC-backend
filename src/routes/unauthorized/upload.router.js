const uploadRouter = require("express").Router();
const uploadContoller = require("../../controllers/uploadController");

uploadRouter.post("/image", uploadContoller.uploadImage);

module.exports = uploadRouter;
