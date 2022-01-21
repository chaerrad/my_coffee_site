import express from "express";
import {handleHome} from "../controllers/globalcontroller";

const globalRouter = express.Router();


globalRouter.get("/",handleHome);

export default globalRouter;