import "./db";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./models/loginmodels";
import globalRouter from "./routers/globalRouter.js";
import loginRouter from "./routers/loginRouter.js";
import purchaseRouter from "./routers/purchaseRouter.js";
import reserveRouter from "./routers/reserveRouter.js";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);

app.use(
  session({
     secret: "Hello",
     resave: true,
     saveUninitialized: true,
     store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/my_coffee"}),
  })
);

app.use("/", globalRouter);
app.use("/login", loginRouter);
app.use("/purchase", purchaseRouter);
app.use("/reserve", reserveRouter);

