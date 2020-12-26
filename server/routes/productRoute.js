import express from "express";
const router = express.Router();

import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

//too all products
router.route("/").get(getProducts);

//to single product by Id
router.route("/:id").get(getProductById);

export default router;
