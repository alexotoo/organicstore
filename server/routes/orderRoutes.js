import express from "express";
const router = express.Router();
import { secured } from "../middleware/authMiddleware.js";

import { addOrderItems } from "../controllers/orderController.js";

router.route("/").post(secured, addOrderItems);
export default router;
