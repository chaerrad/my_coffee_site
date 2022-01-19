import express from "express";

const loginRouter = express.Router();

const login = (req,res) => {
    res.send("login");
}
loginRouter.get("/customer",login);
loginRouter.get("/admin",login);

export default loginRouter;