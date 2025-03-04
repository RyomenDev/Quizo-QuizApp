import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  UserViewProfileController,
  UserUpdateProfileController,
} from "../controllers/user.controller.js";

const router = express.Router();

// Protected Route - Login Route
router.get("/profile", verifyToken, UserViewProfileController);
router.post("/updateProfile", verifyToken, UserUpdateProfileController);

export default router;
