import express from "express";
const router = express.Router();

import { authUser } from "../controllers/userController.js";

//to authenticated user
router.post("/login", authUser);

export default router;
