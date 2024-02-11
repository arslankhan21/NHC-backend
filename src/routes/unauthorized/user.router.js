const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

userRouter.post("/create", userController.createUser);
userRouter.put("/update/:userId", userController.updateUser);
userRouter.delete("/delete/:userId", userController.deleteUser);
userRouter.get("/all", userController.getUsers);
userRouter.get("/:userId", userController.getUserByID);

module.exports = userRouter;
