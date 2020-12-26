import expAsyncHandler from "express-async-handler";
import Product from "../model/productModel.js";

//@desc: fetch all products
//@route: GET /api/products
//@access: public
const getProducts = expAsyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//@desc: fetch single product
//@route: GET /api/products/:id
//@access: public
const getProductById = expAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProductById, getProducts };
