import { useState } from "react";
import PropTypes from "prop-types";
import { addQuestion } from "../../api";
import { InputField } from "../../utils";

const QuestionForm = ({ setQuestions, setShowForm }) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    choices: ["", "", "", ""],
    correctAnswer: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
    setError("");
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...newQuestion.choices];
    updatedChoices[index] = value;
    setNewQuestion({ ...newQuestion, choices: updatedChoices });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newQuestion.choices.includes(newQuestion.correctAnswer)) {
      setError("Correct answer must be one of the options.");
      return;
    }

    try {
      const addedQuestion = await addQuestion(newQuestion);
      setQuestions((prev) => [...prev, addedQuestion]);
      setShowForm(false);
      setNewQuestion({
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: "",
      });
      setError("");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mt-4 w-96 rounded-lg shadow-lg  backdrop-blur-lg bg-gradient-to-br from-white/50 to-white/5"
    >
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">
        Add a New Question
      </h2>

      <label className="block font-semibold text-white">Question:</label>
      <InputField
        type="text"
        name="question"
        placeholder="Enter your question"
        value={newQuestion.question}
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-white/30 text-white p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <label className="block font-semibold mt-4 text-white">Choices:</label>
      {newQuestion?.choices?.map((choice, index) => (
        <InputField
          key={index}
          type="text"
          placeholder={`Choice ${index + 1}`}
          value={choice}
          onChange={(e) => handleChoiceChange(index, e.target.value)}
          required
          className="w-full bg-transparent border border-white/30 text-white p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none mt-2"
        />
      ))}

      <label className="block font-semibold mt-4 text-white">
        Correct Answer:
      </label>
      <InputField
        type="text"
        name="correctAnswer"
        placeholder="Correct Option"
        value={newQuestion.correctAnswer}
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-white/30 text-white p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      <button
        type="submit"
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all shadow-md"
      >
        Submit Question
      </button>
    </form>
  );
};

QuestionForm.propTypes = {
  setQuestions: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default QuestionForm;
