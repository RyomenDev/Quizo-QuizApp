import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  choices: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const Quiz = mongoose.model("FixedQuestions", quizSchema);
export default Quiz;
