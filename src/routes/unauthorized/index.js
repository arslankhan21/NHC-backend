const unauthorized = require("express").Router();
const userRouter = require("./user.router");
const boothRouter = require("./booth.router");
const zoomRouter = require("./zoom.router");
const uploadRouter = require("./upload.router");
const conferenceRouter = require("./conference.router");

unauthorized.use("/user", userRouter);
unauthorized.use("/booth", boothRouter);
unauthorized.use("/zoom", zoomRouter);
unauthorized.use("/upload", uploadRouter);
unauthorized.use("/conference", conferenceRouter);

module.exports = unauthorized;
