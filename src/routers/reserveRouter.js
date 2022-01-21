import express from "express";
import {reserve,watch,edit,remove} from "../controllers/reservecontroller.js";

const reserveRouter = express.Router();

reserveRouter.get("/",reserve);
reserveRouter.get("/:id",watch);
reserveRouter.get("/:id/edit",edit);
reserveRouter.get("/:id/remove",remove);


export default reserveRouter;