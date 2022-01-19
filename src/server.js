import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req,res) => {
    res.send(`Welcome Home`);
}

const handleListening = () => {
    console.log(`Server is working`);
}

app.use(logger);
app.get("/",home)
app.listen(PORT, handleListening);