import express from "express";
import {login,logout,adminlogin,customlogin} from "../controllers/logincontroller"; 
const loginRouter = express.Router();

loginRouter.get("/",login);
loginRouter.get("/logout",logout);
loginRouter.get("/customer",customlogin);
loginRouter.get("/admin",adminlogin);

export default loginRouter;