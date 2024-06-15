import express from "express";
import dbConnect from "./config/dbConnect.js";
import mainRoute from "./routes/mainRoute.js";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";

const app = express();
const port = 8000;

dbConnect();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", mainRoute);

app.listen(port, ()=>
  {
    console.log("Server listening  at "+port);
  });
