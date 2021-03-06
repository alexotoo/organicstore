import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { secured } from "../middleware/authMiddleware.js";

//to authenticated user
router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(secured, getUserProfile)
  .put(secured, updateUserProfile);

export default router;
