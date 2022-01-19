import express from "express";

const purchaseRouter = express.Router();

const purchase = (req,res) => {
    res.send("purchase");
}


purchaseRouter.get("/beverage",purchase );
purchaseRouter.get("/bakery",purchase );
purchaseRouter.get("/icecream",purchase );

export default purchaseRouter;