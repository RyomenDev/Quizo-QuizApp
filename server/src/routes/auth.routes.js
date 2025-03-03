import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUserWithEmail,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Protected Route - Login Route
router.post("/login-user", verifyToken, loginUserWithEmail);
router.post("/resister-user", verifyToken, registerUser);
router.post("/reset-password", verifyToken, resetPassword);

export default router;
