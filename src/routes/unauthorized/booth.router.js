const boothRouter = require("express").Router();
const boothController = require("../../controllers/boothController");

boothRouter.post("/create", boothController.createBooth);

boothRouter.put("/update/:boothId", boothController.updateBooth);

boothRouter.delete("/delete/:boothId", boothController.deleteBooth);
boothRouter.get("/all", boothController.getBooths);

boothRouter.get("/:boothId", boothController.getBoothByID);

module.exports = boothRouter;
