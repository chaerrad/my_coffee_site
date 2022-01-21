import express from "express";
import {purchase,beverage,bakery,icecream} from "../controllers/purchasecontroller.js";

const purchaseRouter = express.Router();

purchaseRouter.get("/",purchase)
purchaseRouter.get("/beverage",beverage );
purchaseRouter.get("/bakery",bakery );
purchaseRouter.get("/icecream",icecream );

export default purchaseRouter;