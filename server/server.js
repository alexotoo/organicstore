import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import * as errorHanlers from "./middleware/errorMiddleware.js";
import connectionDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();
connectionDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API on port....");
});

app.use("/api/products", productRoute);

//error handling middleware
app.use(errorHanlers.notFoundRoute);

app.use(errorHanlers.errorHandler);

//server
const PORT = process.env.PORT || 500;
app.listen(
  PORT,
  console.log(
    `app started on port ${PORT} in ${process.env.NODE_ENV}`.bgGreen.black
  )
);
