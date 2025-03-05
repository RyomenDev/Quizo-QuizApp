import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUserWithEmail,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Protected Route - Login Route
router.post("/register", registerUser);
router.post("/login", loginUserWithEmail);
router.post("/resetpassword", verifyToken, resetPassword);

export default router;
