import fs from "fs/promises";

export const quizQuestions = async (req, res) => {
  try {
    // console.log("Fetching quiz questions...");
    const data = await fs.readFile("quiz.json", "utf8");
    const quiz = JSON.parse(data);
    res.json(quiz);
  } catch (error) {
    console.error("Error loading quiz:", error.message);
    res.status(500).json({
      error: "Failed to load quiz",
      message: "Failed to load quiz",
    });
  }
};
