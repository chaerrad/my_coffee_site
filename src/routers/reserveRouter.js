import express from "express";
import {reserve,reserveseat,edit,remove} from "../controllers/reservecontroller.js";

const reserveRouter = express.Router();

reserveRouter.get("/",reserve);
reserveRouter.get("/:id(\\d+)",reserveseat);
reserveRouter.get("/:id(\\d+)/edit",edit);
reserveRouter.get("/:id(\\d+)/remove",remove);


export default reserveRouter;