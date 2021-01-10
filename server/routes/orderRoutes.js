import express from "express";
const router = express.Router();
import { secured } from "../middleware/authMiddleware.js";

import { addOrderItems, getOrderById } from "../controllers/orderController.js";

router.route("/").post(secured, addOrderItems);

router.route("/:id").get(secured, getOrderById);

export default router;
