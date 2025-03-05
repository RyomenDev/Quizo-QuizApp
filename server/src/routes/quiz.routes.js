import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { quizQuestions, getAllQuestions, addQuestion, deleteQuestion  } from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/questions", quizQuestions);
router.get("/", getAllQuestions);
router.post("/", addQuestion);
router.delete("/:id", deleteQuestion);

export default router;
