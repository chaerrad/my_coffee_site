import express from "express";
import {reserve,watch,edit,remove} from "../controllers/reservecontroller.js";

const reserveRouter = express.Router();

reserveRouter.get("/",reserve);
reserveRouter.get("/:id(\\d+)",watch);
reserveRouter.get("/:id(\\d+)/edit",edit);
reserveRouter.get("/:id(\\d+)/remove",remove);


export default reserveRouter;