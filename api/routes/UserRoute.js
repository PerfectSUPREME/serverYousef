const { Router } = require("express");
const { CreateUser, DeleteUser, findAllUser, login, updateUser } = require("../controllers/UserController");
const UserRouter = Router();

UserRouter.post("/CreateUser", CreateUser);
UserRouter.delete("/DeleteUser", DeleteUser);
UserRouter.get("/findAllUser", findAllUser);
UserRouter.post("/login", login);
UserRouter.post("/updateUser", updateUser);

module.exports = UserRouter;
