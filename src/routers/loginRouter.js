import express from "express";
import {login,logout,adminlogin,customlogin} from "../controllers/logincontroller";
import {handleHome} from "../controllers/globalcontroller";
const loginRouter = express.Router();

loginRouter.route("/").get(login).post(handleHome);
loginRouter.get("/logout",logout);
loginRouter.get("/customer",customlogin);
loginRouter.get("/admin",adminlogin);

export default loginRouter;