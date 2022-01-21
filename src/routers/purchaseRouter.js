import express from "express";
import {purchase,beverage,beverages,bakeries,icecreams,bakery,icecream} from "../controllers/purchasecontroller.js";

const purchaseRouter = express.Router();

purchaseRouter.get("/",purchase);
purchaseRouter.get("/beverage",beverage );
purchaseRouter.get("/beverage/:id(\\d+)",beverages);
purchaseRouter.get("/bakery",bakery );
purchaseRouter.get("/bakery/:id(\\d+)",bakeries );
purchaseRouter.get("/icecream",icecream );
purchaseRouter.get("/icecream/:id(\\d+)",icecreams );

export default purchaseRouter;