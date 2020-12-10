import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectionDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();
connectionDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API on port....");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

//server
const PORT = process.env.PORT || 500;
app.listen(
  PORT,
  console.log(
    `app started on port ${PORT} in ${process.env.NODE_ENV}`.bgGreen.white
  )
);
