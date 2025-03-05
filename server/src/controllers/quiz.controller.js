import fs from "fs/promises";
import path from "path";

import FixedQuestions from "../models/fixedQuestions.model.js";

export const quizQuestions = async (req, res) => {
  try {
    // console.log("Fetching quiz questions...");
    // const filePath = path.join(process.cwd(), "public", "quiz.json");
    // const data = await fs.readFile(filePath, "utf8");
    // const quiz = JSON.parse(data);

    // res.json(quiz);

    const quizzes = await Quiz.find({});
    // console.log({ quizzes });

    res.json(quizzes);
  } catch (error) {
    console.error("Error loading quiz:", error.message);
    res.status(500).json({
      error: "Failed to load quiz",
      message: "Failed to load quiz",
    });
  }
};

import Quiz from "../models/quiz.model.js";

// Get all quiz questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Quiz.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz questions", error });
  }
};

// Add a new quiz question
export const addQuestion = async (req, res) => {
  try {
    const { question, choices, correctAnswer } = req.body;

    // Check if correctAnswer is included in choices
    if (!choices.includes(correctAnswer)) {
      return res
        .status(400)
        .json({ message: "Correct answer must be one of the choices." });
    }

    const newQuestion = new Quiz({ question, choices, correctAnswer });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error adding quiz question", error });
  }
};

// Delete a quiz question
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await Quiz.findByIdAndDelete(id);
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting quiz question", error });
  }
};
