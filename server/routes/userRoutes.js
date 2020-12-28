import express from "express";
const router = express.Router();

import { authUser, getUserProfile } from "../controllers/userController.js";
import { secured } from "../middleware/authMiddleware.js";

//to authenticated user
router.post("/login", authUser);
router.route("/profile").get(secured, getUserProfile);

export default router;
