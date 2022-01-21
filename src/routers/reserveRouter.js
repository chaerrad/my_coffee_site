import express from "express";
import {reserve,watch,edit,remove} from "../controllers/reservecontroller.js";

const reserveRouter = express.Router();

reserveRouter.get("/",reserve);
reserveRouter.get("/watch",watch);
reserveRouter.get("/edit",edit);
reserveRouter.get("/delete",remove);


export default reserveRouter;