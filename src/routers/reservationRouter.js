import express from "express";

const reservationRouter = express.Router();

const reserve = (req,res) => {
    res.send("reserve");
}

reservationRouter.get("/watch",reserve);
reservationRouter.get("/edit",reserve);
reservationRouter.get("/delete",reserve);

export default reservationRouter;