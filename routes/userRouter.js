const { Router } = require("express");
const getUser = require("../controllers/getUser");
const signUp = require("../controllers/signUp");
const login = require("../controllers/login");

const userRouter = Router();

userRouter.get("/", getUser);

userRouter.post("/signUp", signUp);

userRouter.post("/login", login)

module.exports = userRouter;
