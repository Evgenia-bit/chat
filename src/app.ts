import express from "express";

import * as homeController from "./controllers/home";
const app = express();


app.set("port", process.env.PORT || 3000);
app.use(express.json());


app.get("/", homeController.index);

export default app;