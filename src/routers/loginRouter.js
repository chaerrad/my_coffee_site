import express from "express";
import {login,logout,join,postJoin,postlogin,adminlogin,customlogin} from "../controllers/logincontroller";
const loginRouter = express.Router();

loginRouter.route("/").get(login).post(postlogin);
loginRouter.route("/join").get(join).post(postJoin);
loginRouter.get("/logout",logout);
loginRouter.get("/customer",customlogin);
loginRouter.get("/admin",adminlogin);

export default loginRouter;