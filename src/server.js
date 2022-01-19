import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import loginRouter from "./routers/loginRouter.js";
import purchaseRouter from "./routers/purchaseRouter.js";
import reservationRouter from "./routers/reservationRouter.js";
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);

app.use("/", globalRouter);
app.use("/login", loginRouter);
app.use("/purchase", purchaseRouter);
app.use("/reservation", reservationRouter);

