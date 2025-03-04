import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { quizQuestions } from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/questions", quizQuestions);

export default router;
