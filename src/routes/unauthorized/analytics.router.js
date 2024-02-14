const analyticsRouter = require("express").Router();
const analyticsController = require("../../controllers/analyticsController");

analyticsRouter.post("/create", analyticsController.createAnalytics);
analyticsRouter.get("/searchBy", analyticsController.getAnalyticsBySearch);

module.exports = analyticsRouter;
