import express from "express";
import dotenv from "dotenv";

import products from "./data/products.js";

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
app.listen(5000, console.log("app started on port 5000"));
